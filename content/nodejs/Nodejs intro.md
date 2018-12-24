---

title: Node.js and it's C++ core
status: draft
date: 2017-03-16
---

# Nodejs Intro

- Node.js is a C++ program that has embedded Chrome's V8 Engine, another C++ program, and has added features to it, which can be used by writing JavaScript code. Because of it's C++ core, Node.js is suitable to be a server (backend) technology.
- JavaScript V8 Engine is written in C++. V8 engine can be run standalone, or be embedded in another C++ application, which is what Node.js did, it embedded V8 inside.
- Node.js is an application written in C++ which embeds another C++ program, the Chrome V8 engine
- V8 has hooks that can be used in a C++ program. 
- Because it's written in C++, it adds features to JavaScript, features that allow lower level operations, like managing file system. Node.js does more than what V8 can
- Through it's bindings, JavaScript in Node.js runs C++ code (e.g. print, read, load)
