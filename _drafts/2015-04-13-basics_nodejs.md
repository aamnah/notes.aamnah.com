---
layout: post
title: Node.js Basics
permalink: node_js_basics

---
   
Node let's you run JavaScript programs outside of the browser. For example, you can run javascript code on the command line. If you are a good javascript programmer, you are no longer limited to the confines of the browser.

Node.js is non-blocking (can run multiple tasks, and keeps processing tasks while waiting for response) and is less heavy on system resources like memory and processing speed.

[Install Node.js on a Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)

Check version `node -v` 

Run file `node app.js`

### REPL

Just typing `node` at the command line and it will open a read-evaluate-print-loop (interactive REPL), like Python. To exit, press ctrl+c twice.

#### Hello World
Create a file called app.js

    {% highlight javascript %}
    console.log('Bonjour la monde!');
    {% endhighlight %}

Run the file from the command line

    node app.js


Project: Parse JSON data using Node.js
---

We'll 

- connect to the API URL
- read the data
- parse the data
- print the data