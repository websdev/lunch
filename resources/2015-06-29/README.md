# <!-- .element class="presentationHeading" --> JSConf 2015 <span class="react">Day 2</span>
### Lightning Talk Style



## JavaScript CSS
* [Parsha Pourkhomami](http://twitter.com/parshap)
* Summary By: Nate Mielnik
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/05-A.md)

> This talk is about ideas, not code.


### CSS has limitations.

* No constants or variables
* No way to extend the language
* No dependency management (or really bad e.g. `@import`)
* No code sharing or re-use
* No interoperability with JS
* Sometimes these limitations are good, sometimes (especially in large-scale apps)
  they...aren't so good
* People have worked around these limitations by creating CSS preprocessors. (ambiguous syntax, weird semantics)


### Can we use JS to do CSS better?


### You CAN represent CSS via JS, but why?

* Better Variables
* Arithmetic that works
* Modules - `require` for CSS, because it's actually JS
* Code Reuse:
  * Share contants without changing values to match everywhere - if your app is in JS, this increases reuse quite a bit.
  * 'mixins'
* Take advantage of NPM - re-use some style modules (or publish some of your own)
* Unlocks JS tooling to be re-purposed for building up styles.


### Other Thoughts

* This could mean doing all inline styles and not classes (React)
* This seems like a great alternative to Shadow DOM



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



### Zombies and Soup: Why End-to-End testing sucks (and why it doesn't have to)
* [Dave Cadwallader](http://www.twitter.com/geek_dave)
* Summary By: Erin DeThorne
* [Notes](https://github.com/nchase/talks/blob/master/2015/jsconf/17-B.md)


> At WalmartLabs, we like to automate-away all our boring and tedious work, so we can focus on the fun stuff. But automated cross-browser end-to-end testing is really really hard to get right. We'll show you how we did it, and unveil some open source tools we're releasing to help with your zombie apocalypse, too.



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



### If you wish to learn ES6/2015 from scratch, you must first invent the universe
* [Ashley Williams](http://www.twitter.com/ag_dubs)
* Summary By: Gal Shenar 


> <!-- .element style="font-size: 70%" --> Javascript has always been a language with very little syntactic sugar—for better or worse. With ES6/2015, and future iterations,though, Javascript is gaining a more and more abstract and expressive syntax. To some it might appear that our language—which already seems accessible and approachable for beginners— is becoming even more accessible and approachable. However, both the humanities and CS education research have proven that abstraction, while a powerful tool for knowledgeable practitioners, can be an equally powerful foil for beginners. As we enter the era of language-level abstractions in ES6/2015, we are charged with the task of rethinking how we teach JavaScript. Through an interdisciplinary montage I will identify the problem of teaching abstraction as a ubiquitous demand across nearly every domain, and align the issues of creativity and critical thinking in the humanities with issues in computer science. The talk will conclude with a discussion of how the discipline of computer science and that of the humanities can inform each other to produce more effective and creative solutions to both developing and teaching abstractions.



# DONE