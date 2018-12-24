---

title: What can I do with the DOM? (Examples)
date: 2018-07-14

---

You can access *elements* and *nodes*.

```js
document.getElementById() // returns an element by it's ID
document.getElementsByClassName() // returns a live HTMLCollection (array-like object)
document.getElementsByTagName() // returns a live HTMLCollection
document.getElementsByTagNameNS() // returns a live NodeList
document.querySelector() // returns the **first** element, takes a CSS selector (`.class`, `#id`, `input[type="text"]`) as argument
document.querySelectorAll() // returns a non-live NodeList of all elements
document.getElementsByName() // returns a live NodeList
```

You can add things to the *document*

```js
document.createElement()
document.createAttribute() // creates and returns an attribute node
document.appendChild()
document.writeln(line) // writes a string of text followed by newline  
```


```js
let p = document.createElement('p')

p.innerText = "This is text inside the paragraph element you just created. Hola!"

document.body.appendChild(p)
```