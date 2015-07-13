# <!-- .element class="presentationHeading" --> JSConf 2015 <span class="react">Day 3</span>
### Lightning Talk Style



### NodeBots: LIVE!
* [Kassandra Perch](http://twitter.com/nodebotanist)
* Summary By: Chris LaPointe


> Our semi-yearly episode of NodeBots:Live! We'll have so much to talk (and dance) about! Want to be on the panel? Let me know: the@nodebotani.st


### Overview
Their summary was a little short, and website incomplete :), but the core concept is about getting together to make bots with javascript!

* [NodeBots Live](http://nodebotslive.com/)
* [NodeBots Website](http://nodebots.io/)
* [Arduino Bots](https://instagram.com/p/cFVNtmJxlc/)



### Tungsten.js: Virtual DOM + Server Rendering in a Legacy Codebase
* Andrew Rota
* Summary By: Nate Mielnik
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/12-B.md)


### Existing Architecture
* Performance was great
  * Server-side rendered templates, lazy loading resources, etc.
* DOM Manipulation bad
  * jQuery + Backbone = Overrendering
  * Have to think about low-level DOM performance (code review fights)


### Problems With Rewrites
* Expensive
* Break a lot of things
* Stall Developers


### Using Existing Infrastructure
* Back when we were laying phone line, but it was still expensive, they realized they could leverage barb wire fences as a way to transmit telephone signals or lay new phone lines
  * Farmers actually did this to create phone communcations
  * It's not perfect, but it's far less expensive when an ideal solution may be feasable for a long time


### What They Did
* Liked the idea of being able to look at individual components and pick libraries for each
* Used [Reactive](http://www.ractivejs.org/) to precompile Mustache templates into object, not strings
* Used the Virtual DOM library from [Mercury](https://github.com/Raynos/mercury)
* Used Backbone to bind events and handle data layer
* Wrote an integration library to put it all together ([Tungsten](https://github.com/wayfair/tungstenjs) -> open sourced)



### Polymer: The future of Web Components
* Chris Lorenzo
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/10-B.md)


### The Past:

* HTML was originally used to publish research documents
* The elements that we currently have in HTML, even HTML5, are too primitive
  to be useful when constructing modern web applications.


### Enter Web Components: High-Level "elements"

* There are four web component specs: Custom Elements, Templates, HTML Imports, Shadow DOM
* `<template>` - stores its content in memory (instead of printing it to screen)
* `<template>` can be used to generate content for Custom Elements
* HTML Imports: request/re-use HTML documents/doc fragments in other documents
* Shadow DOM: similar to an `<iframe>` - styles do not leak.


## Polymer: a Web Component Library

* Adds sugar to Web Components
* Polyfills Web Components down to _IE10_.
* Adds data binding, property observation
* Ecosystem of Components (https://elements.polymer-project.org/)


## Issues:

* Shadow DOM Spec only implemented in Chrome+FF. Polyfill unlocks this for IE10+.
* Difficult to use with Selenium
* Difficult to use with AMD, other module-loading systems



### Drawing Hands: Built-ins written in JavaScript
* [JOHN-DAVID DALTON](http://www.twitter.com/jdalton)
* Summary By: Patrick Cavanaugh
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/16-B.md)


> Learn about how browsers/engines leverage JavaScript to implement built-in APIs.


> JavaScript APIs are often implemented early by developers using “polyfills”, but browsers actually often implement them in JavaScript even when official support is added!


* `Array.prototype.indexOf`
* `Intl` - ECMAScript 5.1 Internationalization API


`mozilla-release/js/src/builtin/Array.js`:
<pre><code>/* ES5 15.4.4.15. */
function ArrayLastIndexOf(searchElement/*, fromIndex*/) {
    /* Step 1. */
    var O = ToObject(this);

    /* Steps 2-3. */
    var len = TO_UINT32(O.length);

    /* Step 4. */
    if (len === 0)
        return -1;

    /* Step 5. */
    var n = arguments.length > 1 ? ToInteger(arguments[1]) : len - 1;

    /* Steps 6-7. */
    var k;
    if (n > len - 1)
        k = len - 1;
    else if (n &lt; 0)
        k = len + n;
    else
        k = n;

    /* Step 8. */
    if (IsPackedArray(O)) {
        for (; k >= 0; k--) {
            if (O[k] === searchElement)
                return k;
        }
    } else {
        for (; k >= 0; k--) {
            if (k in O &amp;&amp; O[k] === searchElement)
                return k;
        }
    }

    /* Step 9. */
    return -1;
}</code></pre>


#### What's `IsPackedArray`?


`~/src/mozilla-release/ grep -F IsPackedArray -R js`:
<pre><code>js/src/builtin/Array.js:    if (IsPackedArray(O)) {
js/src/builtin/Array.js:    if (IsPackedArray(O)) {
js/src/builtin/Array.js:        if (IsPackedArray(O)) {
js/src/builtin/Array.js:        if (IsPackedArray(O)) {
js/src/jscntxt.h:bool intrinsic_IsPackedArray(JSContext* cx, unsigned argc, Value* vp);
js/src/vm/SelfHosting.cpp:js::intrinsic_IsPackedArray(JSContext* cx, unsigned argc, Value* vp)
js/src/vm/SelfHosting.cpp:    JS_FN("IsPackedArray",           intrinsic_IsPackedArray,           1,0),</code></pre>


#### Internationalization API

* Polyfill: https://github.com/andyearnshaw/Intl.js
* IE 11 implements native `Intl` support using JavaScript!
* Downsides:
    * Need to guard against user-space javascript code breaking the `Intl` API



### Parallelism experiments in JavaScript
* [![](http://img.youtube.com/vi/h_M_uscOKJM/0.jpg)](https://www.youtube.com/watch?v=h_M_uscOKJM)
* [Naveed Ihsanullah](http://twitter.com/naveedi)
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/09-A.md)


## Concurrerency vs Parallelism:

* "How can we make JS faster by exploiting hardware availability?"
* "How do we get native-like performance from the browser/JS?"
* Answer: utilize the CPU more.
* "Shared Memory" - low level access in JS. we can parallelize lots of work!
* Demo of different implementations of a worker/main setup (postMessage vs sharedMemory)
* Demo of Mendelbrot algorithm with `SharedArrayBuffer`
  * He brought the CPU to a grinding hault. High CPU utilization goal achieved!
* Shared Memory is in FF Nightly, Google has committed to implementing for Chrome.



### Visualizing process evolution
* [![](http://img.youtube.com/vi/QPCXsG_iMlc/0.jpg)](https://www.youtube.com/watch?v=QPCXsG_iMlc)
* [Dann Toliver](http://www.twitter.com/dann)
* Summary By: Thomas Gideon
* [Notes](https://github.com/nchase/talks/commit/6c44c1339d9868e58880930d803145d7c74c95a7)
* [Notes](https://github.com/commandline/talks/blob/master/jsconf2015/2015-05-29_viz_process_evolution.md)


<img src="http://localhost:3000/resources/2015-07-06/evolution/dna.jpg" style="width: 100%, height: 100%" />


<img src="http://localhost:3000/resources/2015-07-06/evolution/mandelbrot.png" style="width: 100%, height: 100%" />


> "We can make observations without looking at code"


Granularity
* Good Spatial & Temporal
* Not so much in the middle


<img src="http://localhost:3000/resources/2015-07-06/evolution/8-bit.jpg" style="width: 100%, height: 100%" />


Live Demo

[Underview](http://bentodojo.com/underview/)

available on [github](https://github.com/dxnn/underview)


Why?

* Reading code is slow
* Interpreter in our head
* Should be part of our dev tools



### Altering the real world with JavaScript
[![](http://img.youtube.com/vi/uQwM7VUgLK0/0.jpg)](https://www.youtube.com/watch?v=uQwM7VUgLK0)
* [Jan Jongboom](http://www.twitter.com/janjongboom)
* Summary By: Chris LaPointe
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/19-A.md)


> <!-- .element style="font-size: 80%;" --> JavaScript is everywhere, but too often it's locked in computers and phones. We need to bridge the gap between the physical world and your computer... It's time to alter the world around us with JavaScript! In previous JSConf talks Jan Jongboom ripped mainboards out of phones; abused sensors; and juggled devices, but this session is going to be harder, deeper, higher and more crazy! How about procedural music generated by the sensor data of all members of the audience? Using bluetooth beacons to find out if the person next to you is worth talking to? Hardware hacking your Firefox OS phone to add more sensors? Geofencing your newborn with a phone mainboard? And all of that... with JavaScript! Loaded with demo's this talk will forever change the way you think about JavaScript in the real world. LET'S DO THIS!


### Including Sensory Data
* Talked about sensory data, interfacing with physical interfaces (eg bluetooth), and controlling that all in a web browser with javascript
* Went over how to use sensors, and looking at strength in javascript data 


### Making music with phones
* Went over sensory input with phones with javascript
* Interfaced with a presentation on stage that would make noises depending on rotation information from phone
** Too many people logged in and it didn't really work :)


### Announcing Mozilla Glass
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">First look at Mozilla Glass! <a href="https://twitter.com/hashtag/jsconf?src=hash">#jsconf</a> <a href="http://t.co/bXZzS6TdnC">pic.twitter.com/bXZzS6TdnC</a></p>&mdash; Ben Spoon (@BenSpoon) <a href="https://twitter.com/BenSpoon/status/604398037142802433">May 29, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


![](/resources/2015-07-06/images/mozillaglass.png)


### Scanning on Bluetooth
aka. The Javascript Baby Monitor
<pre><code>
var adapter = navigator.mozBluetooth.defaultAdapter;
adapter.startLeScan([]).then(handle => {
    // Do stuff
});
</code></pre>
[Bluetooth Scanning](https://twitter.com/johnkpaul/status/604394861077217280/photo/1)



# DONE
