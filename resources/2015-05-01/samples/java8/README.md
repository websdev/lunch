# Java 8 Feature Demo

A simple demo of random sorting functionality to showcase Java 8 capabilities

## Prerequisites
* Java 8 installed and active
  * On Mac, install Java 8 from Oracle and run ```export JAVA_HOME=`/usr/libexec/java_home -v 1.8````

## How to run

The application is packaged as a "ShadowJar", the Gradle equivalent of a "Shaded" 
Jar in Maven-speak. To run, execute the following commands:

```
gradle shadowJar
java -cp build/libs/java8-all.jar Main
```

The output will be printed to the shell