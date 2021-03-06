---
title: Performance Testing with Apache JMeter
date: 2020-04-20T16:04:01.042Z
description: A beginner's guide to performance and load testing with JMeter
---
## Installing JMeter

JMeter is an open-source Java-based desktop app from Apache. It is designed to do performance testing with various scenarios, logics, and report visualisations. To use it on your Mac/Windows, you need to do the following steps:

1. Install JRE (Java Runtime Environment). You can download it from [https://www.oracle.com/java/technologies/javase-jre8-downloads.html](https://www.oracle.com/java/technologies/javase-jre8-downloads.html "https\://www.oracle.com/java/technologies/javase-jre8-downloads.html")
2. Download Apache JMeter

   * PC:

     * You can download from [https://jmeter.apache.org/download_jmeter.cgi](https://jmeter.apache.org/download_jmeter.cgi "https\://jmeter.apache.org/download_jmeter.cgi")
     * Select the binaries .zip file
     * And extract it anywhere that is accessible by your terminal
   * MacOS:

     * `brew install jmeter` in your command line
3. Running JMeter

   1. There are two types of JMeter app you can use, GUI and non-GUI modes. The GUI mode is recommended to create and edit your test plan. And non-GUI mode is used in terminal to run your JMeter test. **Never run a load test in GUI mode.**
   2. There are some ways to run JMeter in GUI mode:

      1. Open it in bin/ApacheJMeter.jar
      2. **Windows**: Go to the bin folder, and run this command `jmeter.cmd`
      3. **Mac**: type in your command line: `jmeter` then a JMeter window will be opened
   3. To run a test in non-GUI mode, you can run this command `jmeter -n -t "your_file".jmx`

## Building Test Plan

### Setting-up Properties and User-Defined Variables

A new test plan will be created using the JMeter GUI mode. When you have opened JMeter, you will see an empty test plan to start with. Since we will be running the load test with CLI, sometimes we need to set the test properties such as user credentials and server domains. We can store these properties as separate file `test.properties` so we don’t have to open the JMeter GUI to change them. 

For example,