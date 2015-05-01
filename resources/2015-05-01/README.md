# The JVM in the 
# 21st century <!-- .element: class="presentationHeading" -->


We all know how much of a pain it is to bootstrap a new Java project, right?
You need to define your dependencies in an obtuse XML format, write a thousand
files consisting of DAOs, DTOs, SBOs, POJOs, and MDBs to make your 
AbstractFooBarFizzBuzzEDIFactoryProxyInjector pass the ARB, and
then package the file in a weird zip file (WAR? EAR? SAR?) with an obtuse
MANIFEST.mf file format to tell your enterprise application container how to run
the damn thing before you can even think about deploying to dev.  Only after
you do all that do you realize your major.minor version incompatability of the
Apache HTTP library requires you to upgrade your commons-lang dependency and
rewrite half your application because you can't use spring 3.1 and hibernate 5
together.


## Isn't there a better way? <!-- .element data-fragment-index="1" -->

Believe it or not, there is. Development on the JVM has changed a lot in the 
past 10 years, even if the way we write our legacy apps hasn't. In this talk
we'll explore the exciting world of JVM development in the 21st century.  We'll
touch upon the following concepts

* Core Java - Java 8, JAX-RS, Jetty, and why you shoulnd't worry about Tomcat
anymore
* Groovy / Grails - like Rails, but more groovy
* Scala, Akka, Play - and the future of the JVM


## Why do we care? <!-- .element data-fragment-index="2" -->

* Virtually every company we care about runs the JVM <!-- .element class="fragment" -->
  * Google, LinkedIn, Twitter, Netflix, ... <!-- .element class="fragment" -->
* Only true multi-platform solution that exists <!-- .element class="fragment" -->
  * Runs equally on Mac / Windows / Linux / Phones / Set-top Box / etc. <!-- .element class="fragment" -->
* It's really, really fast <!-- .element class="fragment" -->
  * JVM does JIT'ing really well <!-- .element class="fragment" -->
  * Automatically parallelizes concurrent programs (since Java 7) <!-- .element class="fragment" -->
  * Has very high-end concurrency data structures to support highly parallel thread-safe processing <!-- .element class="fragment" -->
    * ConcurrentHashMap, etc <!-- .element class="fragment" -->
    * AtomicInt, AtomicLong, etc <!-- .element class="fragment" -->


## But first, some history .... <!-- .element data-fragment-index="3" -->

* Java - 1.0 in 1996, rapid releases follow <!-- .element class="fragment" -->
* 1.1 in 1997 <!-- .element class="fragment" -->
  * 1.2 ("J2SE") in 1998, J2EE 1.2 in 1999 <!-- .element class="fragment" -->
  * 1.3 in 2000, J2EE 1.3 in 2001 <!-- .element class="fragment" -->
  * 1.4 in 2002, J2EE 1.4 in 2003 <!-- .element class="fragment" -->
  * 5.0 in 2004, JEE 5.0 in 2006 <!-- .element class="fragment" -->
* slows down from here: Java 6 in 2006, JEE 6 in 2009 <!-- .element class="fragment" -->
  * 7 in 2011, JEE 7 in 2013 <!-- .element class="fragment" -->
  * 8 in 2014, JEE 8 ??? <!-- .element class="fragment" -->
* Servlets in 1997, JSP in 1999 <!-- .element class="fragment" -->
  * Java web applications (WAR files) in 2001 <!-- .element class="fragment" -->


## Other JVM developements  <!-- .element data-fragment-index="4" -->

* Jython & JRuby in 2001 <!-- .element class="fragment" -->
* Spring 1.0 released 2002 <!-- .element class="fragment" -->
* Groovy in 2003 <!-- .element class="fragment" -->
* Scala in 2004 <!-- .element class="fragment" -->
* Clojure in 2007 <!-- .element class="fragment" -->


## What does this mean? <!-- .element data-fragment-index="5" -->

* Our core platform was defined by 2000 <!-- .element class="fragment" -->
  * Servlets / Filters / web.xml / etc. all finalized <!-- .element class="fragment" -->
  * Only incremental improvements since then. <!-- .element class="fragment" -->
    * Mostly added new functionality: Java EE 7 profile has 38 JSRs! <!-- .element class="fragment" -->
  * What has happened in the last 15 years? <!-- .element class="fragment" -->


## Jax-RS and Jetty <!-- .element data-fragment-index="6" -->

* Spec finalized in 2008 <!-- .element class="fragment" -->
* Official part of Java EE 6 (Web Profile), so all containers support it! <!-- .element class="fragment" -->
* No more excessive configuration in web.xml! <!-- .element class="fragment" -->


## Core Java <!-- .element data-fragment-index="7" -->

* Java 7 <!-- .element class="fragment" -->
  * Invoke Dynamic! <!-- .element class="fragment" -->
* Java 8 <!-- .element class="fragment" -->
  * Lambdas! <!-- .element class="fragment" -->
  * Streams! <!-- .element class="fragment" -->
* Spark framework Demo <!-- .element class="fragment" -->


## Dropwizard & Spring-boot <!-- .element data-fragment-index="8" -->

* Lightweight containers built on Jetty & new Java paradigms <!-- .element class="fragment" -->
  * No need for big application container - write a small microservice and it runs itself <!-- .element class="fragment" -->


## Groovy / Grails <!-- .element data-fragment-index="9" -->

* Webs uses version 1.3.7 <!-- .element class="fragment" -->
  * Released 2011 <!-- .element class="fragment" -->
* Most popular is 2.x. Lots of plugins  <!-- .element class="fragment" -->
  * Recently released 3.0 (2015)  <!-- .element class="fragment" -->
  * Total rewrite.  Uses spring-boot as core and lightweight container wrapper  <!-- .element class="fragment" -->
  * No upgrade path from 1.0 --> 2.0 or 2.0 --> 3.0 <!-- .element class="fragment" -->


# Groovy / Grails more <!-- .element data-fragment-index="10" -->

* Positives: super-high developer productivity <!-- .element class="fragment" -->
  * Real-time compilation <!-- .element class="fragment" -->
  * Convention over configuration (originally "Groovy on Rails") <!-- .element class="fragment" -->
* Negatives: What's the future? <!-- .element class="fragment" -->
  * Just recently switched open-source maintainers <!-- .element class="fragment" -->
  * No longer in same company as Spring maintainers <!-- .element class="fragment" -->
  * Team reduced from 6 full-time to 3 <!-- .element class="fragment" -->


## Play <!-- .element data-fragment-index="11" -->

* Released initially in 2008 <!-- .element class="fragment" -->
  * Play 1.x --> very lightweight container <!-- .element class="fragment" -->
    * Built on Netty (NIO JVM layer), Python compiler, & asynchronous services at core <!-- .element class="fragment" -->
  * Play 2.x --> Typesafe <!-- .element class="fragment" -->
* Positives: High feedback loop, super-high performance <!-- .element class="fragment" -->
* Negatives: Scala build tooling (it's a pig!), hard to learn <!-- .element class="fragment" -->