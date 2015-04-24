# the JVM in the 21st century

We all know how much of a pain it is to bootstrap a new Java project, right?
You need to define your dependencies in an obtuse XML format, write a thousand
files consisting of DAOs, DTOs, SBOs, POJOs, MDBs, and so many other acronyms 
to make your AbstractFooBarFizzBuzzEDIFactoryProxyInjector pass the ARB, and
then package the file in a weird zip file (WAR? EAR? SAR?) with an obtuse
MANIFEST.mf file format to tell your enterprise application container how to run
the damn thing before you can even think about deploying to dev.  Only after
you do all that do you realize your major.minor version incompatability of the
Apache HTTP library requires you to upgrade your commons-lang dependency and
rewrite half your application because you can't use spring 3.1 and hibernate 5
together. Isn't there a better way?

Believe it or not, there is. Development on the JVM has changed a lot in the 
past 10 years, even if the way we write our legacy apps hasn't. In this talk
we'll explore the exciting world of JVM development in the 21st century.  We'll
touch upon the following concepts

* Core Java - Java 8, JAX-RS, Jetty, and why you shoulnd't worry about Tomcat
anymore
* Groovy / Grails - like Rails, but more groovy
* Scala, Akka, Play - and the future of the JVM