# <!-- .element class="presentationHeading" --> JSConf 2015 <span class="react">Day 1</span>
### Lightning Talk Style



## You Won’t Believe This One Weird Way to Rewrite Closures
* [Jonathan Martin](http://www.twitter.com/nybblr)
* Summary By: Nate Mielnik
* [Notes](https://github.com/nmielnik/talks/blob/master/2015/jsconf/04-B.md)


## Do these 5 things every line:
* No function params, var, variable assignment
  * params are really just local variables
* No memoization
  * no attaching data to functions
* One global variable is allowed
* Amnesic function bodies allowed
  * don't remember anything about their scope (buckets of statements)
* shortcut local variables allowed


## ClosureRegistry

```javascript
ClosureRegistry = (function () {

  function ClosureRegistry() {
    this._closure = {};
    this._registry - [];
  }

  delegate(['push', 'pop'], { // adds methods to a prototye (from) that just delegate to another place (closure)
    from: ClosureRegistry.prototype,
    to: function () { return this._registry; }
  });

  delegate(['get', 'set', 'args'], {
    from: ClosureRegistry.prototype
    to: function () { return this.scopeForCurrentClosure(); }
  });

  Scope.prototype.push = function () {
    this._dict = this._forkDict();
  };

  Scope.prototype.pop = function () {
    this._dict = this._dict.__parent;
  };

  ClosureRegistry.prototype.scopeForCurrentClosure = function () {
    this._registry[this._registry.length - 1];
  };

  ClosureRegistry.prototpye.func = function (name, params, body /* function body */) {
    var _this = this;
    var scope = this.scopeForCurrentClosure().fork();
    this.set(name, function() {
      _this.push();
      _this.args(params, arguments);
      var result = body();
      _this.pop();
      return result;
    });
  };

  return ClosureRegistry;
}());
```



### Woah, You Can Test IE & Microsoft Edge on a Mac & Linux?
* Talk by: Rey Bango, Web Developer Advocate at Microsoft
* Summary by: Jeremy Paskali


Problem: You are on Mac or Linux and you want to test the top browsers and devices for compatibility.

Internet Explorer global market share in May, 2015:
* 55% (netmarketshare.com)
* 20% (StatCounter)

![](https://cdn.css-tricks.com/wp-content/uploads/2013/10/overlappingBrowsers.png)


### dev.modern.ie

![](https://s3.amazonaws.com/uploads.hipchat.com/226/598147/OBRng1jcfOuEOsu/upload.png)

Note:
1. Microsoft IE + Edge tools, dev status, news, demos etc
2. Request features
3. View status of features: Under Consideration, In Development, Deployed


### RemoteIE

* Virtualized instance of IE without a VM
* Appears like you are running IE natively on Mac and Linux

![](https://remote.modern.ie/images/a437dcc5.step-3.png)

Note:
1. Download and install Remote Desktop
2. Sign in with Microsoft Account
3. Launch IE
4. Enter a URL and test


### Ngrok

Provides a public URL that tunnels to your local web server

![](https://ngrok.com/static/img/demo.png)


### Virtual Machines

![](https://s3.amazonaws.com/uploads.hipchat.com/226/598147/ZkdyMo2eUEXGznQ/upload.png)

Note:
1. Select IE and OS combination
2. Select VM platform: Parallels, VirtualBox, VMware
3. Free download
4. 90 day limit: take snapshot to revert to day 1


### Site Scan

Scan any public URL to test against specific list of issues

![](https://s3.amazonaws.com/uploads.hipchat.com/226/598147/6CYtORPEYFCdKyM/upload.png)

Note:
1. Static code scan of any URL
2. Older IE issues
3. Cross browser experience
4. Windows 8 features (touch, flip, tiles)
5. Accessibility


### Browser Screenshots

Experience your website across OSes, browsers, and form factors

![](https://s3.amazonaws.com/uploads.hipchat.com/226/598147/ErVTVYBKVfrXVgd/upload.png)


### Vorlon.js

Remotely debug and test JavaScript across all platforms and browsers.

![](https://s3.amazonaws.com/uploads.hipchat.com/226/598147/EPBZOI4Nu6auqF5/upload.png)

Note:
1. Open source
2. Runs on Node.js, Socket.io
3. Extensible plugin architecture
4. Remote devices talk to local server with small snippet on web page



### Beyond Responsive: Building a mobile web you're f*ing proud of
* [![](http://img.youtube.com/vi/Y4ZTRztwLrg/0.jpg)](https://www.youtube.com/watch?v=Y4ZTRztwLrg)
* [Kate Hudson](http://twitter.com/k88hudson)
* Summary By: Matthew Dantas-McCutcheon


> <!-- .element style="font-size: 80%;" --> Making the mobile web platform better, both for ourselves and for the next two billion users, is one of the most important challenges of our careers. It's not enough to rely on standards organizations and browser vendors to solve our technical and cultural problems. We've got to do more. I'm going to take a look at solving problems such as performance, routing, and offline experiences by circumventing the DOM, building hybrid Android apps, and using persistent background queues. Not that these approaches will solve all your problems – but rather, help you set new benchmarks, give greater clarity and direction to the bugs you file on browser vendors, and ultimately get you better results. By making bold technical decisions, we move the web forward. Instead of improving and optimizing the problematic paradigms/assumptions under which the web was built, we should borrow patterns from other mobile platforms or invent new ones. We also need to understand how the experience of coming online for the first time will be very different for the next generation of primarily non-North American mobile users.



### Making Relational Cool Again (or: JavaScript on ACID)
* [![](http://img.youtube.com/vi/19Av0Lxml-I/0.jpg)](https://www.youtube.com/watch?v=19Av0Lxml-I)
* [Tim Griesser](http://twitter.com/tgriesser)
* Summary By: Matthew Halbe
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/03-A.md)


> <!-- .element style="font-size: 80%;" --> Who in their right mind would ever want to work with RDBMS anymore. Especially in JavaScript, where you can just call "save" on your JSON and turn it into web-scale BSON, or get to choose between so many levels of DB that we don't even know which to use. This will be a story about one person's journey to try and make people believe that Node can actually be a thing for boring, early-2000's era web applications using (gasp) SQL. It'll also share some discoveries along the way including how ACID / transactions can be super useful in the everything-async world of JavaScript, and some tips and tricks for keeping a sane and organized data layer when venturing into the abyss of hybrid single-page / server-rendered applications.



### Communicate All the Things... With WebRTC!
* Kyle Tyacke
* Summary By: Pat Hayes
* [Notes](https://github.com/PatrickHayes/talks/blob/master/2015/jsconf/WebRTC.md)


## Real-time communications for browsers and mobile apps

* Supported by Google, Mozilla, Opera and others
* Real-time, plug-in free, video/audio/data
  * Hangouts, FB and others require a plug-in
* Works through NATS and filewalls
  * Uses ICE framework with STUN/TURN servers
* http://www.webrtc.org/


## Apps using WebRTC

* bemyeyes.org
  * Connects visually impaired people with sighted helpers
* PeerCDN
  * Allows a site's static content to be shared among visitors to the site
    * 90% reduction in bandwidth costs
    * just add a script tag to the site, and it starts working



### Async Programming in ES7
* [![](http://img.youtube.com/vi/lil4YCCXRYc/0.jpg)](https://www.youtube.com/watch?v=lil4YCCXRYc)
* [Jafar Husain](http://twitter.com/Jhusain)
* Summary By: Matthew Dantas-McCutcheon
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/04-A.md)


> <!-- .element style="font-size: 80%;" --> Currently there are ES7 features proposed for async programming that have never been seen in a programming language before. If accepted, these proposals could allow entire JS applications to be written without a single callback! By providing the same level of support for async functions as regular functions, ES7 could dramatically alter the way everyday developers write code. Imagine reading data from a stream or a web socket with a simple loop. Imagine catching async errors using try/catch, and never again finding yourself in the callback pyramid of doom.



### Would a sample at any other rate sound as sweet? An introduction to how our brains interpret sound
* Myles Borins
* Summary By: Dan Giorgetti


>In this talk we will explore signal processing, specifically how our brain interprets sound. We will explore some of the basic theory behind how music is digitally encoded and look back at some of the history and science behind the western musical cannon.


> Sampling is the taking of analog information and converting it to digital information.

> ![](https://upload.wikimedia.org/wikipedia/commons/5/50/Signal_Sampling.png)


> Started with MAX/MSP

>![](http://farm3.staticflickr.com/2461/3772235957_ed2c5d6267_z.jpg?zz=1)


## Some Terminology
- Sample Rate: Number of Samples taken per second
- Bit Depth: Number of bits used to encode sample data
- Codec: The algorithm used to encode the data
- Lossy: Throws out data, usually the frequencies humans can't hear
- Lossless: Retains all data


## Limitations of Sampling:
- NyQuist Limit: Sample rate dictates the maximum frequency in a system
- Human ear hears upto 20KHZ - Telephones use 8KHZ


> Musical Notes have existed as a form of communication for longer then the English Language



### (math == art && art == code)
* [![](http://img.youtube.com/vi/Z1q71gFeRqM/0.jpg)](https://www.youtube.com/watch?v=Z1q71gFeRqM)
* [John Brown](http://twitter.com/thisisjohnbrown)
* Summary By: Gal Shenar
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/06-A.md)


> <!-- .element style="font-size: 80%;" --> The formula for a Bezier curve is beautiful. Using sine and cosine to create orbiting objects is dazzling. L-systems create fractals through elegant simplicity. Developers, as a group, may be losing site of the beauty that code can create. Designers by the bunch are picking up a keyboard and creating amazing pieces, but it's happening the other way very slowly. That's a shame, because the computer lets otherwise unexpressed ideas go unexplored. Developers have the ability to embrace the art of programming and the art of art because of the myriad frameworks available. Use the language of your choice to make some art, whether it’s in the browser or in the physical realm. Walk away with the confidence and the inspiration to put down the work for a minute and pick up a digital paintbrush.


[Avatar Glitch](https://twitter.com/avatarglitch)
## Things Learned:
- how JPGs are constructed (for decent-looking generative glitch art)
- how to make animated gifs, buffers


[Plinco](https://twitter.com/plinco)
## Things Learned:
- hardware things, software things
- projection mapping


100 Days of N Divs
http://codepen.io/ThisIsJohnBrown/pen/MYNyVm/
See all of them on twitter - [John Brown](http://twitter.com/thisisjohnbrown)



### Mutations and Subscriptions in Relay
* Laney Kuenzel
* Summary By: Patrick Cavanaugh
* [Slides](https://speakerdeck.com/laneyk/mutations-in-relay)
* [GraphQL Introduction](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)


>A dive into how the Relay framework makes it simple for developers to implement mutations (data writes) and real-time updates.



### Knitting for Javascripters
* [![](http://img.youtube.com/vi/X1Cc1vrvjdY/0.jpg)](https://www.youtube.com/watch?v=X1Cc1vrvjdY)
* [Mariko Kosaka](http://twitter.com/kosamari)
* Summary By: Erin DeThorne
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/07-A.md)


> <!-- .element style="font-size: 80%;" --> Wouldn't it be cool if you could "print out" your own javascript generated bitmap art as a knitted scarf ? Well, you can ! Knitting textiles is a lot like programing computers. You write your knit pattern (code), your brain compiles it, and your hands render knit stitches (1s) and purl stitches (0s). It means you can decipher knitting nomenclature like "k2, m1L, k1, m1L, k until 3 sts remain, m1R, k1, m1R, k2" into JavaScript. This talk will cover how you can program knitting patterns in JavaScript and then use an electronic knitting machine from the 1980's to make beautiful knitted textiles.


> ![](http://new.tinygrab.com/5db8dc9625bdb123e2a5db83910f71cb132a5d6b3b.png)


> ![](http://new.tinygrab.com/5db8dc96257775ed2b869ca08247d1d50c690e200b.png)


> ![](http://new.tinygrab.com/5db8dc9625536d2ac85985460fc9d2e61e7901178f.png)


> ![](http://new.tinygrab.com/5db8dc962575817ee255332e44b98e2eb4b505e337.png)


> ![](http://new.tinygrab.com/5db8dc9625d7e30a7e24f78a5d8e658985bf766489.png)


> ![](http://new.tinygrab.com/5db8dc96252acf2df5a2343d9b57a29790056a19bd.png)


> ![](http://new.tinygrab.com/5db8dc96257602c0adb4da0071d87458b4c69b706c.png)


> ![](http://new.tinygrab.com/5db8dc96259ea1fdcfb38cf698d329532516718307.png)


> ![](http://new.tinygrab.com/5db8dc9625919d2870ea7bd29f5f1a86fd775ce5d5.png)


> ![](http://new.tinygrab.com/5db8dc96258271e2314592e9d68648b53548255edc.png)


> ![](http://new.tinygrab.com/5db8dc9625f410a99f27608eb336df88bdd452c569.png)


> ![](http://new.tinygrab.com/5db8dc96252b081bf9776f879c4ad4dacb4e0378a8.png)


> ![](http://new.tinygrab.com/5db8dc9625439336a39652124eb9779dd807b535ed.png)



### Cold War
* [Simon Swain](http://twitter.com/simon_swain)
* Summary By: Michael Barrett
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/08-A.md)


> <!-- .element style="font-size: 80%;" --> Growing up in the '80s wasn't as cool as it's made out to be. As a teenager of that decade, we not only lacked any reasonable fashion sense, we lived under the constant shadow of nuclear oblivion. In hindsight, the arms race begat some huge advances in computing theory and practice, and since your average mobile phone is more powerful than that era's entire North American early warning system, makes a great target for simulation. Cold War is an in-browser recreation of the nightmare that was the '80s, exploring emergent systems, the limits of Javascript performance, and some techniques that might actually be useful in your day job when you get back to civilization. Expect vector graphics, high altitude bombers, missiles, killer satellites and explosions. More than a few explosions. And unlike the '80s, lasers that actually work.



## Demo

* http://apprtc.appspot.com



# DONE
