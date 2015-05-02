# Spark Framework Demo

A simple hello world demo using the spark framework

## Prerequisites
* Java 8 installed and active
  * On Mac, install Java 8 from Oracle and run ```export JAVA_HOME=`/usr/libexec/java_home -v 1.8````

## How to run

The application is packaged as a "ShadowJar", the Gradle equivalent of a "Shaded" 
Jar in Maven-speak. To run, execute the following commands:

```
gradle shadowJar
java -cp build/libs/spark-all.jar HelloWorld
```

Navigate to ```http://localhost:4567``` in your browser to see the result
