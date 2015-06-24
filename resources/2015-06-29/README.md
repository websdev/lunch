# <!-- .element class="presentationHeading" --> JSConf 2015 <span class="react">Day 2</span>
### Lightning Talk Style



### Headless Testing Against Real Web Browsers
* Mike Ball
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/02-B.md)


> <!-- .element style="font-size: 80%;" -->  Continuous integration ensures software's health with each each codebase change, ideally via automated tests and other quality-assurance processes. Tools like Phantomjs offer a great path towards headless JavaScript testing, but what about those scenarios where the software under test requires an actual GUI web browser? Think NW.js, Flash, and Google Polymer web-component-tester. X Virtual Frame Buffer provides an excellent solution towards lightweight, headless testing against real web browsers. In this talk, I'll offer some background on X Virtual Frame Buffer, and demo how to test a Google Polymer web component on a lightweight Ubuntu VM in continuous integration.



### Recreating a dialup modem in javascript
* [Sam Saccone](http://twitter.com/samccone)
* Summary By: Ravi Singh
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/12-A.md)


> Pshhhkkkkkkrrrr​kakingkakingkakingtsh​chchchchchchchcch​dingdingding The siren song of the dialup modem that summoned AIM and the Book of Mozilla has a language unto itself. In this talk, we’ll learn how to implement an end-to-end frequency-shift keying modem, capable of sending and receiving data between computers using the Web Audio API. By using a browser, I’ll provide an interactive session detailing how we can use javascript to encode and decode what modem tones really mean.



### Parallelism experiments in JavaScript
* [Naveed Ihsanullah](http://twitter.com/naveedi)
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/09-A.md)


> <!-- .element style="font-size: 80%;" --> With the amazing performance of modern single threaded JavaScript how can we catch up in parallelism? Today’s hardware provides specialized instructions that can operate on data in parallel and provides multiple execution units that can run code in parallel. The single threaded nature of classic JavaScript cannot take advantage of these resources. When quad-core smartphones are already available today that leaves a lot of performance potential on the table. I will share work we are doing to extend JavaScript with flexible and powerful primitives for parallelism that will unlock new performance opportunities to the Web. Let’s explore how native code concepts like shared memory and execution synchronization could work in JavaScript. With great power comes great responsibility so I will touch on some mitigation strategies we have in place to make sure tomorrow’s web applications stay well behaved as they use all the horsepower your hardware can provide.



### Building a musical instrument with the Web Audio API
* [Steve Kinney](http://twitter.com/stevekinney)
* Summary By: Ravi Singh
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/13-A.md)


> <!-- .element style="font-size: 80%;" --> When you weren't looking, someone stuck a synthesizer into your favorite web browser. The Web Audio API is widely supported and makes it easy—and more importantly, fun—to create, process, and control audio in the browser. We can spin up oscillators, adjust gain, tweak frequencies, and slap on some funky delay. Additionally, we can also take existing sounds and manipulate them to our heart's content. We can grab input from cameras and microphones and use them as we see fit. But, the fun doesn't stop there—we still have the rest of the browser's media APIs at our disposal. We'll talk a little bit about the Web Audio API. We'll explore the browser as a vehicle for creative expression. We'll fire up some audio contexts and connect some nodes. We'll also leverage the getUserMedia Web API, WebSockets, and others to build unique musical instruments that could only be possible in the web browser. We'll not only talk about the API itself, but also some of the fundamental concepts for working with audio and making music.



### Maintaining a Local Dev Meetup
* [Jacob Roufa](http://twitter.com/jroufa)
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/14-A.md)


> What do you do when you only have a few regular attendees? Is your own schedule so crammed you can't sustainably present every topic every month? Do you still want a local user group? Some hard won experience from a local web developer meetup co-organizer. Or, how we kept the user group going and helped foster continued growth in attendance and participation.



### Umm... I have to do WHAT to run this code?
* [Gord Tanner](http://twitter.com/gordtanner)
* Summary By: Dan Giorgetti
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/14-B.md)


> Whether you work on open source or are hiring developers to work with you, first impressions matter. The first day on with a project is both exciting and challenging for any developer. From missing documentation, unknown dependencies, complex codebases and install processes, it’s a wonder that most people don’t just quit on the spot. However, when a plan is in place and when things are handled correctly, the first day with a codebase can become one of the most motivating days for any developer.



### Visualizing process evolution
* [Dann Toliver](http://www.twitter.com/dann)
* Summary By: Thomas Gideon
* [Notes](https://github.com/nchase/talks/commit/6c44c1339d9868e58880930d803145d7c74c95a7)


> <!-- .element style="font-size: 80%" --> What actually happens when your code is run? Our programs are simple text documents composed of patterns of rules, but the processes they guide aren't nearly as well behaved. Function scopes are generated, data is plumbed through pathways, bits are shifted and applications are evaluated. There's a lot of ins, a lot of outs. It's a very complicated case. We can gain some insight into the process with console.log and step-through debuggers, but we're left to develop a full program simulation in our minds based only on the code we wrote and the tiny snapshots our debugger gives us -- effectively requiring a JS interpreter to be compiled into our wetware. This can make it somewhat challenging to reason about our work. We'll look at some ways of remedying this, starting with basic data structures and tiptoeing toward full programs. Your code is the DNA for a process: let's build an illustrated anatomy guide.



### NodeBots: LIVE!
* [Kassandra Perch](http://twitter.com/nodebotanist)
* Summary By: Chris LaPointe


> Our semi-yearly episode of NodeBots:Live! We'll have so much to talk (and dance) about! Want to be on the panel? Let me know: the@nodebotani.st



### If you wish to learn ES6/2015 from scratch, you must first invent the universe
* [Ashley Williams](http://www.twitter.com/ag_dubs)
* Summary By: Gal Shenar 


> <!-- .element style="font-size: 70%" --> Javascript has always been a language with very little syntactic sugar—for better or worse. With ES6/2015, and future iterations,though, Javascript is gaining a more and more abstract and expressive syntax. To some it might appear that our language—which already seems accessible and approachable for beginners— is becoming even more accessible and approachable. However, both the humanities and CS education research have proven that abstraction, while a powerful tool for knowledgeable practitioners, can be an equally powerful foil for beginners. As we enter the era of language-level abstractions in ES6/2015, we are charged with the task of rethinking how we teach JavaScript. Through an interdisciplinary montage I will identify the problem of teaching abstraction as a ubiquitous demand across nearly every domain, and align the issues of creativity and critical thinking in the humanities with issues in computer science. The talk will conclude with a discussion of how the discipline of computer science and that of the humanities can inform each other to produce more effective and creative solutions to both developing and teaching abstractions.



### Drawing Hands: Built-ins written in JavaScript
* [JOHN-DAVID DALTON](http://www.twitter.com/jdalton)
* Summary By: Patrick Cavanaugh
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/16-B.md)


> Learn about how browsers/engines leverage JavaScript to implement built-in APIs. Knowing @jdalton there's likely going to be some performance bits too.



### Zombies and Soup: Why End-to-End testing sucks (and why it doesn't have to)
* [Dave Cadwallader](http://www.twitter.com/geek_dave)
* Summary By: Erin DeThorne
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/17-B.md)


> At WalmartLabs, we like to automate-away all our boring and tedious work, so we can focus on the fun stuff. But automated cross-browser end-to-end testing is really really hard to get right. We'll show you how we did it, and unveil some open source tools we're releasing to help with your zombie apocalypse, too.



### Polymer: The future of Web Components
* Chris Lorenzo
* Summary By: Noah Chase
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/10-B.md)


>What are web components and why you should be using them. Find out how to get started and how Comcast is using Polymer for customer facing applications.



### Altering the real world with JavaScript
* [Jan Jongboom](http://www.twitter.com/janjongboom)
* Summary By: Chris LaPointe
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/19-A.md)


> <!-- .element style="font-size: 80%;" --> JavaScript is everywhere, but too often it's locked in computers and phones. We need to bridge the gap between the physical world and your computer... It's time to alter the world around us with JavaScript! In previous JSConf talks Jan Jongboom ripped mainboards out of phones; abused sensors; and juggled devices, but this session is going to be harder, deeper, higher and more crazy! How about procedural music generated by the sensor data of all members of the audience? Using bluetooth beacons to find out if the person next to you is worth talking to? Hardware hacking your Firefox OS phone to add more sensors? Geofencing your newborn with a phone mainboard? And all of that... with JavaScript! Loaded with demo's this talk will forever change the way you think about JavaScript in the real world. LET'S DO THIS!
