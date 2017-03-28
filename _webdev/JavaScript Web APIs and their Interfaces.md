---
layout: post
title: (JavaScript) Web APIs and their Interfaces
subtitle: WTF is a Node, DOM, Element, Document, HTMLCollection, NodeList, Window and oher stuff
permalink: javascript-web-api-interfaces
ctime: 2017-03-21
---

# Web APIs
JavaScript is a scripting language. In the context of a web browser, scripting usually refers to program code written in JavaScript that is executed by the browser when a page is downloaded, or in response to an event triggered by the user. [1][1]

A Web API is an API for either a web server or web browser. There's a lot we can do inside a browser: animate graphics, send messages, edit photos, edit files etc. and to do all that we can utilize the browser's API, aka the Web API. Web API is usually consistent across browsers, and documented by W3C. JavaScript **shims** can be used to cover inconsistencies across browsers.

HTML5: Audio, Video, Canvas, Geolocation, Storage

With the web API, you can

- add, change, remove page elements
- move, resize, transform elements
- manipulate forms and user input (validation)
- make server requests (AJAX)
- store data (cookies, HTML5 LocalStorage)

# Interface (objects)
An API is an Application Programming INTERFACE. 

> The most basic scripting interface developed at W3C is the **DOM**, the Document Object Model which allows programs and scripts to dynamically access and update the content, structure and style of documents. 
>
> Modifications of the content using the DOM by the user and by scripts trigger events that developers can make use of to build rich user interfaces.
> 
> [W3C](https://www.w3.org/standards/webdesign/script)


- XMLHttpRequest makes it possible to load additional content from the Web without loading a new document, a core component of AJAX,
- the Geolocation API makes the user’s current location available to browser-based applications,
- several APIs make the integration of Web applications with the local file system and storage seamless.

Simply put, an interface is a **type of object**, that you're able to use in your web app or site. Node, Element, Document, Navigator, Storage, Event are all interface objects.

All objects implementing the same interface can be treated similarly. For example

> `Node` is an interface that is implemented by multiple other objects, including `Document` and `Element`. All objects implementing the `Node` interface can be treated similarly. The term **node** therefore (in the DOM context) means any object that implements the `Node` interface. Most commonly that is an element object representing a HTML element.
>
> [StackOverflow](http://stackoverflow.com/a/24974667/890814)

Links
---

- [MDN: Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Udemy: HTML5 APIs For JavaScript - A Course For Web Developers](https://www.udemy.com/html5-apis-for-javascript-a-course-for-web-developers/)


[1]: https://www.w3.org/standards/webdesign/script
[2]: https://en.wikipedia.org/wiki/Web_API