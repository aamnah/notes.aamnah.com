---

title: Querying the DOM
subtitle: Select and modify HTML elements with JavaScript
slug: querying-the-dom
date: 2017-03-21
lastmod: 2018-07-14

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

```js
getElementById() // return an Element
getElementsByClassName() // returns an array-like object (HTMLCollection)
getElementsByName() // returns a NodeList Collection
getElementsByTagName() // returns an HTMLCollection
getElementsByTagNameNS() // returns a NodeList
```

### Examples

```javascript
// getElementByID()
// gets an HTML element by providing it's ID attribute in HTML
// Return an Element
document.getElementById('modal')

// getElementsByClassName()
// 
document.getElementsByClassName('.post') // notice the S in ElementS? Return an array-like object (HTMLCollection) of elements
```

Notes
---

#### DOM, Element, Node 
- The **DOM** is a tree structure that represents the HTML of the website. It's the model of your HTML page that the browser cerates
- A **Node** is simply an HTML element. Specifically, `Node` is an interface object that is implemented by multiple other objects, including `Document` and `Element`. A parent node can have many children-nodes
- An **Element** is an object of a `Document`

#### HTMLCollection and NodeList
- An **HTMLCollection** is a generic collection (an array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list

```js
// HTMLCollection Properties & Methods
.length // returns no. of items in the collection
.item() // returns the specific node at the index (zero-based) e.g. forms.item(0)
.namedItem() // Returns the specific node whose ID or, as a fallback, name matches the string specified by name. e.g. forms.namedItem('myForm')
```

- **NodeList** objects are collections of nodes such as those returned by properties such as `Node.childNodes` and the `document.querySelectorAll()` method. Although it's not an array, it is still possible to run `forEach()` on it

```js
// NodeList Properties & Methods
NodeList.length // The number of nodes in the NodeList.
NodeList.item() // Returns an item in the list by its index, or null if the index is out-of-bounds; can be used as an alternative to simply accessing nodeList[idx] (which instead returns  undefined when idx is out-of-bounds).
NodeList.entries() // Returns an `iterator` allowing to go through all key/value pairs contained in this object.
NodeList.forEach() // Executes a provided function once per NodeList element.
NodeList.keys() // Returns an `iterator` allowing to go through all keys of the key/value pairs contained in this object.
NodeList.values() // Returns an `iterator` allowing to go through all values of the key/value pairs contained in this object.
```

#### Live vs. Non-live
Live means an HTMLCollection or NodeList is automatically updated when the underlying document is changed (i.e. you make a change to the DOM). An HTMLCollection is pretty much always live, the changes in the DOM are reflected in the collection. A NodeList may or may not be live depending on the method used to get it.

```javascript
document.getElementsByClassName() // HTMLCollection, live
document.getElementsByTagName() // HTMLCollection (NodeList in Webkit), live 
document.getElementsByName() // NodeList, live
document.querySelectorAll() // NodeList, non-live
document.getElementsByTagNameNS() // NodeList (HTMLCollection in Gecko & IE, NodeList with `.nameditem()` in Opera, pure NodeList in Webkit), live
```

Links
---
- [MDN: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [TLDR: (JavaScript) Web APIs and their Interfaces](/javascript-web-api-interfaces)
- [MDN: Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN: HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN: NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [StackOverflow: When is NodeList live and when is it static?](http://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [StackOverflow: What is DOM? (summary and importance)](http://stackoverflow.com/questions/4976344/what-is-dom-summary-and-importance)


[1]: http://stackoverflow.com/questions/4976344/what-is-dom-summary-and-importance
