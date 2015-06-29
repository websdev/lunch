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


## Recreating a dialup modem in javascript
![](https://s3.amazonaws.com/media-p.slid.es/uploads/samccone/images/1266342/pasted-from-clipboard.png)


##What is sound?
> Vibrations that travel through a medium

##What is data?
> 101010111101010100100101010

##How do we get data into audio?
> Encoding problem


###Encoding data

* Humans are really good at encoding data
    * We have languages with grammar
    * Language is data encoding for speech
* How do we do this for computers?
    * Fast transmission
    * Easy to use
    * Cheap to implement


### History

* Optical Telegraph (1792 - 1837~) - Claude Chappe
    * Encoding data to symbols displayed on towers
* Morse Code (1836) - Samuel Morse
    * Electrical signals over wire    
* Baudot Code (1874) - Emile Baudot
    * 5 bit code to send letter
    * Multiplexed transmissions
* Harmonic Telegraph (1876~)
    * Alexander Bell (Audible Telegraphy)
    * Allowed 10 signals on a 1 telegram line


### How is data encoded into audio?

* FSK - By Frequency Shifting a Key

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Fsk.svg/300px-Fsk.svg.png)


### Modem

* ~1942
* Connecting teleprinters over regular phone lines
* Modulates and Demodulates data
* Works using existing infrastructure


### Recreating a modem

![](http://www.pubnub.com/blog/wp-content/uploads/2014/09/javascript.png)

#### Webaudio API
> <!-- .element style="font-size:50%" --> Oscillator Node   
> ~~WaveTableNode~~  
> ~~JavaScriptNode~~  
> ScriptProcessorNode  
> ~~AudioWorkerNode~~ (Future)


### How it works?

* Encoding
    * Convert text data into binary
    * Convert binary data to audio data using oscillators
* Decoding
    * ScriptProcessorNode to read audio data
    * Goertzel Algorithm (with Hamming window) to extract frequency data
    * Convert binary data to text


### Demos

* [Binary data to audio](http://samccone.github.io/noise/component-demos/string-to-binary-to-wave.html)
* [Everything together](http://samccone.github.io/noise//basic-demo/everything.html)
* [Original Slides with more demos](http://slides.com/samccone/jsconf-us#/)




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


### The Web Audio API
* [MDN - Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
* AudioContext
    * Deals with creation of nodes and execution of audio processing
* AudioNode
    * Audio source, destination and processing modules
* AudioParam
    * Parameter for an AudioNode   


### How does this work?
> <!-- .element style="height: 500px;" --> ![](https://speakerd.s3.amazonaws.com/presentations/ea1d3e5ad8ba42d09c5fc741a21ccc57/slide_11.jpg?1432867285)


### Using context and nodes

```javascript
// Create an audio context
const AudioContext = window.AudioContext || 
                     window.webkitAudioContext;
const context = new AudioContext();
```

```javascript
// Create other nodes from context
const oscillator = context.createOscillator();
const gain = context.createGain();
const biquadFilter = context.createBiquadFilter();
const waveShaper = context.createWaveShapre();
```

```javascript
// Connect nodes to each other and to destination
oscillator.connect(gain);
gain.connect(context.destination);
```


### Oscillators!!!

```javascript
const context = new AudioContext();
const oscillator = context.createOscillator();
oscillator.connect(context.destination);
oscillator.start(0);
oscillator.stop(0);
oscillator.start(0); // Not going to work
oscillator.disconnect(0); // garbage collect me!!
```

```javascript
const gainNode = context.createGain();
oscillator.connect(gainNode);
gainNode.connect(context.destination);
oscillator.start(0);

gainNode.gain.value = 0;
gainNode.gain.value = 1;
```


### More things you can do

```javascript
oscillator.frequency.value = 220;

// frequency is an AudioParam
oscillator.frequency.setValueAtTime(440, context.currentTime);

// linearly ramp value from current to target(0) in 3 seconds
gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 3); 
```

// [More info on AudioParams](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam)


### Even more things

```javascript
oscillator.type = "sine";
oscillator.type = "square";
oscillator.type = "sawtooth";
oscillator.type = "triangle";

// describe the wave using Float32Arrays of real
// and imag values that correspond to coefficients to the
// cosine and sine terms of a Fourier Series
let wave = context.createPeriodicWave(real, imag);

// The following will set oscillator.type = "custom"
oscillator.setPeriodicWave(wave);
```


### Making Music!!
* Creating a synthesizer in the browser
    * Connecting audio nodes
* Frequency data for notes
    * A4 - 440Hz, A5 - 880Hz, B4, C4, C4#, D4 ?
* Using a library 
    * [Octavian](https://github.com/stevekinney/octavian)

```javascript
const note = new Octavian.Note("A#4");
note.frequency; // 466.164
note.modifier; // "#"
note.pianoKey; // 50
note.downOctave(); // A#3
```


![](https://speakerd.s3.amazonaws.com/presentations/ea1d3e5ad8ba42d09c5fc741a21ccc57/slide_68.jpg?1432867285)


### Making Music in the Browser

* [GitHub - Steve Kinney](https://github.com/stevekinney/making-music)
    * [Audiophonic](http://stevekinney.github.io/audiophonic/)
    * [Face Theremin](http://stevekinney.github.io/face-theremin/)
    * [Socket Synth](http://socket-synth.herokuapp.com/)




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
