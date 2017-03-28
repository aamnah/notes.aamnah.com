---
layout: post
title: Querying the DOM
subtitle: Select and modify HTML elements with JavaScript
permalink: querying-the-dom
ctime: 2017-03-21
---

_Querying_ is fancy word for searching/locating DOM elements using API methods, like `getElementById()` for example. The DOM (Document Object Model) represents a document as a tree. The tree is made up of parent-child relationships, a parent can have one or many children nodes.


Note that generally a DOM is a model for a structured document, it <q cite='http://stackoverflow.com/questions/4976344/what-is-dom-summary-and-importance'>is not restricted to or even invented for HTML or XML. A DOM is a general concept applicable to any document, especially those (the vast majority of them do) showing a hierarchical structure in which you need to navigate. You can speak about the DOM of a MS-Word document and there are APIs to navigate these as well</q>.

There are a few different ways in which you can get HTML elements in JavaScript

- `getElementById()` returns an element by it's ID
- `getElementsByClassName()` returns a live HTMLCollection (array-like object)
- `getElementsByTagName()` returns a live HTMLCollection
- `getElementsByTagNameNS()` returns a live NodeList
- `querySelector()` returns the **first** element, takes a CSS selector (`.class`, `#id`, `input[type="text"]`) as argument
- `querySelectorAll()` returns a non-live NodeList of all elements
- `getElementsByName()` returns a live NodeList


### Examples

```javascript
// getElementByID()
// gets an HTML element by providing it's ID attribute in HTML
// Return an Element
document.getElementById('modal')

// getElementsByClassName()
// 
document.getElementsByClassName() // notice the S in ElementS? Return an array (HTMLCollection) of elements
```

Notes
---

#### DOM, Element, Node 
- The **DOM** is a tree structure that represents the HTML of the website. It's the model of your HTML page that the browser cerates
- A **Node** is simply an HTML element. Specifically, `Node` is an interface object that is implemented by multiple other objects, including `Document` and `Element`. A parent node can have many children-nodes
- An **Element** is an object of a `Document`

#### HTMLCollection and NodeList
- An **HTMLCollection** is a generic collection (an array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list
- **NodeList** objects are collections of nodes such as those returned by properties such as `Node.childNodes` and the `document.querySelectorAll()` method. Although it's not an array, it is still possible to run `forEach()` on it

#### Live vs. Non-live
Live means an HTMLCollection or NodeList is automatically updated when the underlying document is changed (i.e. you make a change to the DOM). An HTMLCollection is pretty much always live, the changes in the DOM are reflected in the collection. A NodeList may or may not be live depending on the method used to get it.

```javascript
document.getElementsByClassName() // HTMLCollection, live
document.getElementsByTagName() // HTMLCollection, live
document.getElementsByName() // NodeList, live
document.querySelectorAll() // NodeList, non-live
```

Links
---
- [TLDR: (JavaScript) Web APIs and their Interfaces](/javascript-web-api-interfaces)
- [MDN: Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN: HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN: NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [StackOverflow: When is NodeList live and when is it static?](http://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [StackOverflow: What is DOM? (summary and importance)](http://stackoverflow.com/questions/4976344/what-is-dom-summary-and-importance)


[1]: http://stackoverflow.com/questions/4976344/what-is-dom-summary-and-importance