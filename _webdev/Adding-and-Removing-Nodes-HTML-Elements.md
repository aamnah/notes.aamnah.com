---
layout: post
title: Adding and Removing Nodes (HTML Elements)
permalink: add-remove-nodes-html-Elements
ctime: 2017-03-21
---

Creating new nodes

- `createElement()` creates an HTML element
- `createTextNode()` creates a text node
- `appendChild()` appends (adds to the end) a node
- `insertBefore()` prepends a node, opposite of .appendChild()
- `removeChild()` removes a child node
- `replaceChild()` replaces a child node
- `cloneNode()` creates a copy of the node (You can clone a node before adding it for example)

### Creating and adding

```javascript
let paragraph = document.createElement("p"); // create a paragraph (<p> element)

// to add text to the <p> element, create a text node first
let node1 = document.createTextNode("This is new paragraph i just added to the DOM");
let node2 = document.createTextNode("This is the text i'm going to add before")

paragraph.appendChild(node1); // add (append) the text node to the <p> element
```

```javascript
// create a container <div> element
let container = document.createElement('div')

// cerate two paragraph <p> elements
let para = document.createElement('p') // create a pragraph
let anotherPara = document.createElement('p') // create another paragraph

// create some text nodes to add to <p> elements
let text1 = document.createTextNode('This is some text')
let text2 = document.createTextNode('This is some more random text')

// append text to paragraphs
para.append(text1)
anotherPara.append(text2)

console.info(para) // <p>This is some text</p>
console.info(anotherPara) // <p>This is some more random text</p>
console.info(container) // <div></div>

// append a paragraph to a div
container.append(para)
console.info(container) // <div><p>This is some text</p></div>

// insert a paragraph before another paragraph in the div
// parentNode.insertBefore(newNode, referenceNode) 
container.insertBefore(anotherPara, para)
console.info(container) // <div><p>This is some more random text</p><p>This is some text</p></div>
```

We have created the following HTML structure using JavaScript

```html
<div>
  <p>
    This is some more random text
  </p>
  <p>
    This is some text
  </p>
</div>
```

### Removing nodes

```javascript
let parent = document.getElementById("div1");
let child = document.getElementById("p1");

parent.removeChild(child);
```

### Replacing nodes

```javascript
let para = document.createElement("p");
let node = document.createTextNode("This is new.");
para.appendChild(node);

let parent = document.getElementById("div1");
let child = document.getElementById("p1");
parent.replaceChild(para, child);
```


Links
---

- [W3Schools: JavaScript HTML DOM Elements (Nodes)](https://www.w3schools.com/js/js_htmldom_nodes.asp)