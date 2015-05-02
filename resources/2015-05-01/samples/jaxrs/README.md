# JAX-RS (Jersey) Framework Demo

A simple "Hello World" demo using JAX-RS (via Jersey)

## Prerequisites
* Java >= 7 installed and active
  * On Mac, install Java 7 or 8 from Oracle and run ```export JAVA_HOME=`/usr/libexec/java_home -v 1.7````

## How to run

The application is run via the standalone "Jetty" plugin for Gradle to execute
the Jersey server.  To run, execute the following command:

```
gradle jettyRunWar
```

Navigate to ```http://localhost:8080/jaxrs/hello``` in your browser to see the result
