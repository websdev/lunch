<div class="titleline">
  <h1 class="h1--title">Continuation Local Storage</h1>
  <p class="fragment">Preserving call context in NodeJS callback chains</p>
</div>



## The Problem

(Example from https://github.com/domenic/zones)

    window.onload = e => {
      // (1)
      fetch("https://example.com").then(res => {
        // (2)
        return processBody(res.body).then(data => {
          // (5)
          const dialog = html`<dialog>Here's some cool data: ${data}
                              <button>OK, cool</button></dialog>`;
          dialog.show();
          dialog.querySelector("button").onclick = () => {
            // (6)
            dialog.close();
          };
        });
      });
    };
    function processBody(body) {
      // (3)
      return body.json().then(obj => {
        // (4)
        return obj.data;
      });
    }



## Solutions in threaded languages

Thread-local values persist for the unit of work.

    MDC.put(MDC_DOMAIN_KEY, domainOperation.fqdn);

    try {
        // ...
    } finally {
        MDC.remove(MDC_DOMAIN_KEY);
    }



## Attempted solutions in JavaScript

Pass context from function to function manually:

    let userId = '1234';
    foo(userId);

    function foo(userId) {
        bar(userId);
    }

    function bar(userId) {
        logger.info('Processing data for user ' + userId);
        // ...
    }

But doesn't work when calling functions that you didn't write, e.g. `fs` or any other native or library async functions.



## Attempted solutions in JavaScript

Attach context to a common shared object, such as the `request` in ExpressJS middleware:

    function middleware1(req, res, next) {
        req.userId = '1234';
        next();
    }

    function middleware2(req, res, next) {
        next();
    }

    function controller(req, res, next) {
        logger.info('Processing data for user ' + req.userId);
        res.send('Done');
    }

But it doesn't work once you leave the context that already passes the shared object (e.g., making calls to `fs`).



## A solution that promises to work without changing your code

- AsyncListener API originally proposed as part of Node.js 0.11.7. Implemented by a polyfill npm module in other versions. However, the pull request for Node was rejected/abandoned.
- Continuation Local Storage is a module building on AsyncListener.
- Enables storing context for a callback chain without explicit code everywhere.



## Continuation Local Storage Example

From digital-sso:

    // app.js
    var logCLS = cls.createNamespace('logger');
    app.use(function(req, res, next) {
        logCLS.bindEmitter(req);
        logCLS.bindEmitter(res);
        
        logCLS.run(function() {
            logCLS.set('childLogger', logger.child({
                requestId: req.id,
            }));
            next();
        });
    });

    // authorizeController.js
    module.exports = {
        authorize: function(req, res) {
            var childLogger = helperUtil.getChildLogger();
    childLogger.info({queryParams: req.query}, 'Got Authorize Request');
            // ...



## What are potential issues? 1/2

- New Relic originally developed Continuation Local Storage for their own use, and uses it in their node agent.
    + There can be incompatibility issues when using both: https://github.com/othiym23/node-continuation-local-storage/issues/33
- The AsyncListener API isn't in core, so third party module authors haven't jumped on board. This led to a proliferation of shim modules in NPM:
    + https://www.npmjs.com/browse/keyword/continuation-local-storage



## What are potential issues? 2/2

- AsyncListener is a polyfill using monkey patching, and has to be updated when the modules it wraps are changed
    + e.g. https://github.com/othiym23/async-listener/pull/49/files
- Many modules are not compatible with Continuation Local Storage as a result:
    + "bluebird, mongoose, a bunch of others. CLS just doesn't work with them or works with serous bugs [. . .] The bugs introduced by a missed CLS-unfriendly updates of a module or it's submodule may be subtle yet really destructive" <a href="https://github.com/othiym23/node-continuation-local-storage/issues/59">node-continuation-local-storage/issues/59</a>



## What are potential alternatives?

- AsyncListener is likely going away, to be replaced by AsyncWrap or Zones:
    + https://github.com/nodejs/promises/issues/9
    + https://github.com/domenic/zones
- Node v6 and above: https://github.com/Jeff-Lewis/cls-hooked uses AsyncWrap, a private, undocumented API to implement continuation local storage. But only 161 downloads in past month.



## References

- https://www.npmjs.com/package/continuation-local-storage
- relies on https://www.npmjs.com/package/async-listener
- origin: https://github.com/nodejs/node-v0.x-archive/issues/5243
- abandoned alternative: https://www.npmjs.com/package/zone
- future: TC39 Zone https://docs.google.com/presentation/d/1H3E2ToJ8VHgZS8eS6bRv-vg5OksObj5wv6gyzJJwOK0/edit
