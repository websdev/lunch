<div class="splash">
  <h1>Someone I Love...</h1>
</div>



<div class="whois">
  <h1>
    Who is...
  </h1>
  <h1>
    <span class="fragment mcilroy">Douglas McIlroy?</span>
  </h1>
  <img class="fragment valentine" src="resources/2016-02-10/mcilroy-valentine.png" />
</div>



## Basic Facts about McIlroy

- Bell Labs Crew <!-- .element class="fragment" -->
- Old (but, lucky for us, very much alive) <!-- .element class="fragment" -->
- Boring speaker, but to no great detriment <!-- .element: class="fragment" -->

Note:

- Lots of these guys who made these really seminal contributions are _old_ &mdash;
  if they're even still alive. They simply won't be around too much longer.
- Lots of amazing contributions and research came out of Bell Labs,
  particularly in the 1970s. McIlroy worked alongside people like
  Brian Kernighan, Dennis Ritchie, Ken Thompson, and Rob Pike,
  who made stuff like C, C++, UNIX, and surrounding tools.



## Critical Contributions to Software Engineering

- <!-- .element: class="fragment" --> Many tools (`spell`, `speak`,  `sort`, `join`)
- <!-- .element: class="fragment" --> `diff`
- <!-- .element: class="fragment" --> pipes `cat README.md | grep -in 2015`

Note:

- I saw the UNIX tool `echo` attributed to McIlroy but I couldn't
  substantiate the claim from more than one source.
- His contributions and insight were critical to the ecosystem around
  the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
  of doing "One Thing Well", which he summarized thusly:

  "Write programs that do one thing and do it well. Write programs to work
  together. Write programs to handle text streams, because that is a universal
  interface."



## Fun and Power With Pipes

- Just like a real pipe. Except not real
- "You can do anything with pipes." &mdash; me <!-- .element: class="fragment" -->
- "Dear computer, please connect stdout to stdin" <!-- .element: class="fragment" -->
- Pipes are essential to the stream redirection toolkit... <!-- .element: class="fragment" -->

Note:

- Spoon knows pipes.
- Pipes are conceptually similar to a real pipe: take a stream-of-something
  from one place, hook it into another.
- Connecting stdin to a program wasn't a thing until pipes.
  A lot of the flexibility that we take for granted now wasn't possible -
  everything took a file argument.
- The day after pipes were introduced, there was an "orgy of one liners" -
  people doing really awesome things that just weren't possible before the pipe was introduced.
  [example: maybe I take `curl`, grab some stuff from some url, and pipe the response back into `curl` as stdin as a POST to some-other-thing]
- The best tools, even new tools, can read from stdin and generally write to
  stdout, or have some option that simply writes to stdout.



## Odds &amp; Ends

- "Software Componentry" - 1968

Note:

- Really tremendous early [but surprisingly lucid and relevant] thinking
  on the problems in the software industry and introduction of the notion of
  _"Mass Produced Software Components"_
- Read about this guy on the web, please.



## References

- https://en.wikipedia.org/wiki/Douglas_McIlroy
- http://c2.com/cgi/wiki?DougMcIlroy
- http://www.cs.dartmouth.edu/~doug/components.txt
- https://www.princeton.edu/~hos/frs122/precis/mcilroy.htm
