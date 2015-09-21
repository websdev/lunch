# Lunch Club

The goal of Lunch Club is to preserve, bolster, and advance our development culture
of excellence and innovation by sharing stuff that we love as often as possible,
with as little friction, pomp, and ceremony as possible.

Any person at any location can share. Scrounge up and/or synthesize something awesome and share it!

**WARNING**

This repo is public.  DO NOT put any webs confidential information in here!

## Calling in Remotely

For those of you who would like to attend but can't be at the lunch talk in person, we'll use the following meetme number when we present:

`886283733`

To get the PIN, ask any of the contributors, @nchase or @nmielnik.

## Acceptable Content

Almost anything is acceptable.

Content that challenges and/or bolsters our 'best practices', technologies,
architecture, software design patterns, culture, etc is encouraged.

See [CONTENT_EXAMPLES.md](CONTENT_EXAMPLES.md) for examples (or add some of your own).


## Schedule

Date       | Title                                             | Duration| Resources
-----------|---------------------------------------------------|---------|----------
Fri Mar 6  | Rich Hickey: Simple Made Easy                     | 60 min  | [Link](resources/2015-03-06)
Fri Mar 20 | [who was present for this?]                       |         |
Wed Mar 23 | Gary Bernhard Medley                              | 40 min  | [Link](resources/2015-03-23)
Fri Mar 27 | Bill Scott: Bringing Change To Life               | 60 min  | [Link](resources/2015-03-27)
Fri Apr 3  | Performance Talk Combo (HTTP/2, Chrome Profiling) | 30m+30m | [Link](resources/2015-04-03)
Fri Apr 10 | Getting familiar with the VP GTM Process          | 60 mins | [Link](resources/2015-04-10)
Fri Apr 17 | -                                                 |         |
Mon Apr 20 | Contributing to medium-editor: What we've learned | 60 min  | [Link](resources/2015-04-20)
Fri Apr 24 | The Basics of Nodejs                              | 60 min  | [Link](resources/2015-04-24)
Mon Apr 27 | Implementing gratuitously animated UIs            | 60 min  | [Link](resources/2015-04-27)
Fri May 01 | the JVM in the 21st century                       | 60 min  | [Link](resources/2015-05-01)
Mon May 04 | Pycon talk: The average programmer                | 45 min  | [Video](https://www.youtube.com/watch?v=hIJdFxYlEKE)
Wed May 13 | How We React                                      | 60 min  | [Link](resources/2015-05-13)
Fri May 15 | -                                                 |         |
Mon May 18 | tpope and Vim                                     | 60 min  | [Link](resources/2015-05-18)
Fri May 22 | Douglas Adams's Hyperland                         | 50 min  | [Link](resources/2015-05-22)
Wed May 27 | The Soul of Software                              | 45 min  | [Link](http://devblog.avdi.org/2015/05/21/the-soul-of-software/)
Fri Jun 05 | Building Better UIs                               | 60 min  | [Link](resources/2015-06-05)
Mon Jun 15 | Semantic Version - My Knowledge v0.1.0            | 60 min  | [Link](https://github.com/nmielnik/notes/blob/master/semver-talk-06-15-2015/README.md)
Wed Jun 24 | JSConf - Lightning Talk Style (Part 1)            | 60 min  | [Slides](resources/2015-06-24)
Fri Jun 26 | Jeremy Ashkenas: Rise of the Transpilers          | 45 min  | [Link](resources/2015-06-26/)
Mon Jun 29 | JSConf - Lightning Talk Style (Part 2)            | 45 min  | [Slides](resources/2015-06-29)
Wed Jul 1  | code is a job                                     | 30 min  | [Slides](https://speakerdeck.com/garann/code-is-a-job)
Mon Jul 6  | JSConf - Lightning Talk Style (Part 3)            | 45 min  | [Slides](resources/2015-07-06)
Wed Jul 8  | ????
Mon Jul 13 | Let's Build a Microservice!                       | 45 min  | [Slides](resources/2015-07-13)
Mon Jul 27 | I read the UI Events Spec (and all I got were...) | 45 min  | [Slides](https://github.com/nmielnik/notes/blob/master/dom-events/lunch-talk-07-27-2015.md)
Fri Aug 07 | Implementing a Strong Code Review Culture         | 60 min  | [Link](resources/2015-08-07)
Wed Aug 26 | Fun with Feature Flags                            | 45 min  | Content TBD
Fri Sep 4  | Not Even Close The State of Computer Security     | 30 min  | [Video](https://vimeo.com/135347162)
TBD [Soon] | Short Talk One-Two Punch                          | 30 min  | [Link](resources/2015-09-21)

## Rules

* "Be Excellent To Each Other"


## Contributing

Make a pull request against the repo and publicize your intent to share something!

It's completely OK to introduce tentative entries with a 'TBD' date
(imagine a scenario where you want to share something, but you aren't ready to commit to a date yet).

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.


## Presenting

If your discussion requires a presentation, the `README.md` can be used to automagically
generate and open a presentation via npm's `start` task with some additional parameters.

Presentations are powered by the awesome [reveal.js](https://github.com/hakimel/reveal.js)
library which is a dependency of this repo - be sure to `npm install` if you plan to present.

The `start` task takes the following arguments:

`presentationFile` (required) which needs to be a root-relative path to the markdown file
containing the "slides".

`revealOptions` (optional) is escaped JSON which is passed to the reveal.js presenter.
[Here are the options](https://github.com/hakimel/reveal.js#configuration).

`theme` (optional) is a root-relative path to the stylesheet to use for the presentation.
When this option is omitted, the presenter will first look for a stylesheet adjacent to the passed
`presentationFile`.  If nothing is given or found, this will default to reveal.js's `black` theme.

Example:

```
npm start presentationFile="resources/2015-04-20/README.md"
```

In the example above, since `resources/2015-04-20/README.md` has an adjacent `style.css`, it will render
a special stylesheet without needing an additional `theme=` parameter to be passed.

A number of themes are available through the reveal.js dependency that will not
require any additional CSS to be written. Just pass a path to the `theme` argument,
e.g. `theme="./node_modules/reveal.js/css/theme/white.css"`.

PDFs can be generated from presentations with the `?print-pdf` query param.

In presentations, [two line breaks](presentation.ejs#L19) will create a new vertical slide.
[Three line breaks](presentation.ejs#L18) will create a new horizontal slide.

## Keyboard Shortcuts

While running the presentation framework, when viewing the slides from your browsers you can use these helpful keyboard shortcuts:

* <kbd>s</kbd> ('s' key) -> Enters 'presenter' mode, which opens another window showing the current slide, any notes you've added (that shouldn't be displayed), a clock showing the time and how long you've been presenting, and a preview of the next slide
* <kbd>ESC</kbd> | <kbd>o</kbd> (escape or 'o' key) -> Zooms out to a high level thumbnail view of all the slides

## Reading the Slides

Often times markup-like code is added to the presentations to allow for things like slide "fragments".

"Fragments" are revealed when the presenter wants to show them
(instead of everything being displayed at once when the slide is presented).

If you're just reading the content of the slides you probably want to remove that extra code.

You can view the notes without that extra code with something like this:

``` sh
sed s/\<\!--\.\*--\>//g resources/2015-05-01/README.md | less
```

And here's an example for vim with Markdown syntax highlighting:

``` sh
sed s/\<\!--\.\*--\>//g resources/2015-05-01/README.md | vim - -c "set syntax=markdown"
```
