# The JVM in the 
# 21st century 


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


## Isn't there a better way? 

Believe it or not, there is. Development on the JVM has changed a lot in the 
past 10 years, even if the way we write our legacy apps hasn't. In this talk
we'll explore the exciting world of JVM development in the 21st century.  We'll
touch upon the following concepts

* Core Java - Java 8, JAX-RS, Jetty, and why you shoulnd't worry about Tomcat
anymore
* Groovy / Grails - like Rails, but more groovy
* Scala, Akka, Play - and the future of the JVM


## Why do we care? 

* Virtually every company we care about runs the JVM 
  * Google, LinkedIn, Twitter, Netflix, ... 
* Only true multi-platform solution that exists 
  * Runs equally on Mac / Windows / Linux / Phones / Set-top Box / etc. 
* It's really, really fast 
  * JVM does JIT'ing really well 
  * Automatically parallelizes concurrent programs (since Java 7) 
  * Has very high-end concurrency data structures to support highly parallel thread-safe processing 
    * ConcurrentHashMap, etc 
    * AtomicInt, AtomicLong, etc 


## But first, some history .... 

* Java - 1.0 in 1996, rapid releases follow 
* 1.1 in 1997 
  * 1.2 ("J2SE") in 1998, J2EE 1.2 in 1999 
  * 1.3 in 2000, J2EE 1.3 in 2001 
  * 1.4 in 2002, J2EE 1.4 in 2003 
  * 5.0 in 2004, JEE 5.0 in 2006 
* slows down from here: Java 6 in 2006, JEE 6 in 2009 
  * 7 in 2011, JEE 7 in 2013 
  * 8 in 2014, JEE 8 ??? 
* Servlets in 1997, JSP in 1999 
  * Java web applications (WAR files) in 2001 


## Other JVM developements  

* Jython & JRuby in 2001 
* Spring 1.0 released 2002 
* Groovy in 2003 
* Scala in 2004 
* Clojure in 2007 


## What does this mean? 

* Our core platform was defined by 2000 
  * Servlets / Filters / web.xml / etc. all finalized 
  * Only incremental improvements since then. 
    * Mostly added new functionality: Java EE 7 profile has 38 JSRs! 
  * What has happened in the last 15 years? 


## Jax-RS and Jetty 

* Spec finalized in 2008 
* Official part of Java EE 6 (Web Profile), so all containers support it! 
* No more excessive configuration in web.xml! 


## Core Java 

* Java 7 
  * Invoke Dynamic! 
* Java 8 
  * Lambdas! 
  * Streams! 
* Spark framework Demo 


## Dropwizard & Spring-boot 

* Lightweight containers built on Jetty & new Java paradigms 
  * No need for big application container - write a small microservice and it runs itself 


## Groovy / Grails 

* Webs uses version 1.3.7 
  * Released 2011 
* Most popular is 2.x. Lots of plugins  
  * Recently released 3.0 (2015)  
  * Total rewrite.  Uses spring-boot as core and lightweight container wrapper  
  * No upgrade path from 1.0 --> 2.0 or 2.0 --> 3.0 


# Groovy / Grails more 

* Positives: super-high developer productivity 
  * Real-time compilation 
  * Convention over configuration (originally "Groovy on Rails") 
* Negatives: What's the future? 
  * Just recently switched open-source maintainers 
  * No longer in same company as Spring maintainers 
  * Team reduced from 6 full-time to 3 


## Play 

* Released initially in 2008 
  * Play 1.x --> very lightweight container 
    * Built on Netty (NIO JVM layer), Python compiler, & asynchronous services at core 
  * Play 2.x --> Typesafe 
* Positives: High feedback loop, super-high performance 
* Negatives: Scala build tooling (it's a pig!), hard to learn 
