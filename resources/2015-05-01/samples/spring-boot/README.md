# Spring-Boot Framework Demo

A simple hello world demo using the spring-boot framework

## Prerequisites
* Java >= 7 installed and active
  * On Mac, install Java 7 or 8 from Oracle and run ```export JAVA_HOME=`/usr/libexec/java_home -v 1.7````

## How to run

Spring boot packages its own executable jar via the ```spring-boot``` plugin. 
Simply run the following steps to execute the jar:

```
gradle build
java -jar build/libs/spring-boot.jar
```

Navigate to ```http://localhost:8080/``` in your browser to see the result.
To inspect the free metrics data, navigate to ```http://localhost:8080/metrics```
