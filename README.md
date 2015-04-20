# Lunch Club

The goal of Lunch Club is to preserve, bolster, and advance Digital's culture
of excellence and innovation by sharing stuff that we love as often as possible,
with as little friction, pomp, and ceremony as possible.

Any person at any location can share. Scrounge up and/or synthesize something awesome and share it!


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
