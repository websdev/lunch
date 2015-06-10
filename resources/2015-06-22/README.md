# <!-- .element class="presentationHeading" --> JSConf 2015 <span class="react">Day 1</span>
### Lightning Talk Style



### Accessibility and JS: side-by-side
* [Felipe de Albuquerque](https://twitter.com/felipedeolinda)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/01-A.md)


> Through out history, JS has been pointed out as the villain when the matter is accessible websites. By presenting some tricks and techniques, we plan to provoke this discussion among developers, and show that Accessibility and JS may live together, as long as you take the right steps.



### Woah, You Can Test IE & Microsoft Edge on a Mac & Linux?
* Rey Bango
* Summary By: Jeremy Paskali


> OS X and Linux are two very popular operating system choices for web developers but they still want to be able to test Internet Explorer and the new Microsoft Edge browsers. In this talk, we'll discuss the state of browser marketshare, the options available for testing these browsers on OS X & Linux and new tools that offer enhanced testing capabilities for mobile browsers



### Beyond Responsive: Building a mobile web you're f*ing proud of
* [Kate Hudson](http://twitter.com/k88hudson)
* Summary By: [YOUR NAME HERE]


> <!-- .element style="font-size: 80%;" --> Making the mobile web platform better, both for ourselves and for the next two billion users, is one of the most important challenges of our careers. It's not enough to rely on standards organizations and browser vendors to solve our technical and cultural problems. We've got to do more. I'm going to take a look at solving problems such as performance, routing, and offline experiences by circumventing the DOM, building hybrid Android apps, and using persistent background queues. Not that these approaches will solve all your problems – but rather, help you set new benchmarks, give greater clarity and direction to the bugs you file on browser vendors, and ultimately get you better results. By making bold technical decisions, we move the web forward. Instead of improving and optimizing the problematic paradigms/assumptions under which the web was built, we should borrow patterns from other mobile platforms or invent new ones. We also need to understand how the experience of coming online for the first time will be very different for the next generation of primarily non-North American mobile users.



### Headless Testing Against Real Web Browsers
* Mike Ball
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/02-B.md)


> <!-- .element style="font-size: 80%;" -->  Continuous integration ensures software's health with each each codebase change, ideally via automated tests and other quality-assurance processes. Tools like Phantomjs offer a great path towards headless JavaScript testing, but what about those scenarios where the software under test requires an actual GUI web browser? Think NW.js, Flash, and Google Polymer web-component-tester. X Virtual Frame Buffer provides an excellent solution towards lightweight, headless testing against real web browsers. In this talk, I'll offer some background on X Virtual Frame Buffer, and demo how to test a Google Polymer web component on a lightweight Ubuntu VM in continuous integration.



### Making Relational Cool Again (or: JavaScript on ACID)
* [Time Griesser](http://twitter.com/tgriesser)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/03-A.md)


> <!-- .element style="font-size: 80%;" --> Who in their right mind would ever want to work with RDBMS anymore. Especially in JavaScript, where you can just call "save" on your JSON and turn it into web-scale BSON, or get to choose between so many levels of DB that we don't even know which to use. This will be a story about one person's journey to try and make people believe that Node can actually be a thing for boring, early-2000's era web applications using (gasp) SQL. It'll also share some discoveries along the way including how ACID / transactions can be super useful in the everything-async world of JavaScript, and some tips and tricks for keeping a sane and organized data layer when venturing into the abyss of hybrid single-page / server-rendered applications.



### Communicate All the Things... With WebRTC!
* Kyle Tyacke
* Summary By: [YOUR NAME HERE]


>In this talk we’ll look take a look at WebRTC, a rather new technology that is giving Javascript developers the tools to add real-time communications features to their applications without the need for plugins or learning a new language. We’ll examine the key components of this standard, look at how peer to peer connections are established, and discuss how you can start adding features like video calling and screen sharing to your applications today using the Respoke Javascript library!



### Async Programming in ES7
* [Jafar Husain](http://twitter.com/Jhusain)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/04-A.md)


> <!-- .element style="font-size: 80%;" --> Currently there are ES7 features proposed for async programming that have never been seen in a programming language before. If accepted, these proposals could allow entire JS applications to be written without a single callback! By providing the same level of support for async functions as regular functions, ES7 could dramatically alter the way everyday developers write code. Imagine reading data from a stream or a web socket with a simple loop. Imagine catching async errors using try/catch, and never again finding yourself in the callback pyramid of doom.



### You Won’t Believe This One Weird Way to Rewrite Closures
* [Jonathan Martin](http://www.twitter.com/nybblr)
* Summary By: Nate Mielnik
* [Notes](https://github.com/nmielnik/talks/blob/master/2015/jsconf/04-B.md)


>Closures are undoubtedly the most powerful feature JavaScript inherited from its Lisp forbears. But would JS be so powerful… without them? We’ll reimplement closures entirely from scratch without the convenience of native local variables or function parameters. Entirely in JavaScript. Using prototypal inheritance, some clever hat-tips from graphics programming, amnesic function bodies, and this one weird global variable.



### JavaScript CSS
* [Parsha Pourkhomami](http://twitter.com/parshap)
* Summary By: Nate Mielnik
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/05-A.md)


> <!-- .element style="font-size: 80%;" --> CSS has a number of deficiencies: no namespacing, dependency management, code isolation, or robust dead code elimination. It also has confusing cascading behavior and no way to share logic or constants with front-end code. We've created various hacks and alternative languages to resolve these issues, but the best solution has been right under our noses: JavaScript. By using JavaScript and its ecosystem, the require() module system gives us namespacing and dependency management, existing tools like UglifyJS can eliminate dead code, the confusing cascading behavior of CSS can be bypassed completely, and shared logic and constants can be written in one place. Take it a step further and we can polyfill CSS features, calculate critical path styles, and perform other mad science.



### Would a sample at any other rate sound as sweet? An introduction to how our brains interpret sound
* Myles Borins
* Summary By: [YOUR NAME HERE]


>In this talk we will explore signal processing, specifically how our brain interprets sound. We will explore some of the basic theory behind how music is digitally encoded and look back at some of the history and science behind the western musical cannon.


### (math == art && art == code)
* [John Brown](http://twitter.com/thisisjohnbrown)
* Summary By: Gal Shenar
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/06-A.md)


> <!-- .element style="font-size: 80%;" --> The formula for a Bezier curve is beautiful. Using sine and cosine to create orbiting objects is dazzling. L-systems create fractals through elegant simplicity. Developers, as a group, may be losing site of the beauty that code can create. Designers by the bunch are picking up a keyboard and creating amazing pieces, but it's happening the other way very slowly. That's a shame, because the computer lets otherwise unexpressed ideas go unexplored. Developers have the ability to embrace the art of programming and the art of art because of the myriad frameworks available. Use the language of your choice to make some art, whether it’s in the browser or in the physical realm. Walk away with the confidence and the inspiration to put down the work for a minute and pick up a digital paintbrush.



### Mutations and Subscriptions in Relay
* Laney Kuenzel
* Summary By: Patrick Cavanaugh
* [Slides](https://speakerdeck.com/laneyk/mutations-in-relay)
* [GraphQL Introduction](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)


>A dive into how the Relay framework makes it simple for developers to implement mutations (data writes) and real-time updates.



### Knitting for Javascripters
* [Mariko Kosaka](http://twitter.com/kosamari)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/07-A.md)


> <!-- .element style="font-size: 80%;" --> Wouldn't it be cool if you could "print out" your own javascript generated bitmap art as a knitted scarf ? Well, you can ! Knitting textiles is a lot like programing computers. You write your knit pattern (code), your brain compiles it, and your hands render knit stitches (1s) and purl stitches (0s). It means you can decipher knitting nomenclature like "k2, m1L, k1, m1L, k until 3 sts remain, m1R, k1, m1R, k2" into JavaScript. This talk will cover how you can program knitting patterns in JavaScript and then use an electronic knitting machine from the 1980's to make beautiful knitted textiles.



### Pebble Timeline - A Web API For Your Wrist
* Charlie McConnell
* Summary By: [YOUR NAME HERE]


>Where is my train? When is my next talk? Is now a good time to use the restroom? Pebble is a device intended to give you constant access to the tools and data that matter most without having to dig out your phone. In this talk we will show off how easy it is to start programming data driven applications for Pebble with just a few lines of JS.



### Cold War
* [Simon Swain](http://twitter.com/simon_swain)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/08-A.md)


> <!-- .element style="font-size: 80%;" --> Growing up in the '80s wasn't as cool as it's made out to be. As a teenager of that decade, we not only lacked any reasonable fashion sense, we lived under the constant shadow of nuclear oblivion. In hindsight, the arms race begat some huge advances in computing theory and practice, and since your average mobile phone is more powerful than that era's entire North American early warning system, makes a great target for simulation. Cold War is an in-browser recreation of the nightmare that was the '80s, exploring emergent systems, the limits of Javascript performance, and some techniques that might actually be useful in your day job when you get back to civilization. Expect vector graphics, high altitude bombers, missiles, killer satellites and explosions. More than a few explosions. And unlike the '80s, lasers that actually work.



### Introducing Mixed Mode
* Michael O'Brien
* Summary By: [YOUR NAME HERE]


>This talk will introduce the idea of working with both Dom + GL in a single co-ordinate system.



### Parallelism experiments in JavaScript
* [Naveed Ihsanullah](http://twitter.com/naveedi)
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/09-A.md)


> <!-- .element style="font-size: 80%;" --> With the amazing performance of modern single threaded JavaScript how can we catch up in parallelism? Today’s hardware provides specialized instructions that can operate on data in parallel and provides multiple execution units that can run code in parallel. The single threaded nature of classic JavaScript cannot take advantage of these resources. When quad-core smartphones are already available today that leaves a lot of performance potential on the table. I will share work we are doing to extend JavaScript with flexible and powerful primitives for parallelism that will unlock new performance opportunities to the Web. Let’s explore how native code concepts like shared memory and execution synchronization could work in JavaScript. With great power comes great responsibility so I will touch on some mitigation strategies we have in place to make sure tomorrow’s web applications stay well behaved as they use all the horsepower your hardware can provide.



### Amazing Things One Can Do With JS and the NES
* [Michael Matuzak](http://twitter.com/mmatuzak)
* Summary By: [YOUR NAME HERE]


>Have you ever wanted to make those 8-bit sounding tunes from your childhood? What better way to do it than using the actual hardware to get that classic sound? Oh wait. I have to learn some archaic assembler? Not anymore! Now make those classic sounds from your childhood with JavaScript. This talk will go over the basics of how sound works on the NES, and how we can use JavaScript to make music on the NES.



### Polymer: The future of Web Components
* Chris Lorenzo
* Summary By: [YOUR NAME HERE]
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/10-B.md)


>What are web components and why you should be using them. Find out how to get started and how Comcast is using Polymer for customer facing applications.



# DONE
