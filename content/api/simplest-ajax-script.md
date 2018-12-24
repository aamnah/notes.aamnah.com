---

title: The Simplest AJAX Script
slug: simplest-ajax-script
subtitle: Learn how to use AJAX to load content from a text file without refreshing the whole page
date: 2015-01-02
---
index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Learning AJAX</title>
  </head>
  <body>
  <h1>The Simplest AJAX script</h1>
  <a href="ajax.txt">Load Ajax text file</a>
  <script src="main.js"></script>
  </body>
</html>
```

main.js
    
```javascript
(function(){

  var link = getElementByTagName('a')[0];

  link.onclick = function() {
    return false
  };

})(); 
```


In our page, we will add a link, which when clicked will load the text from a file (which we called 'ajax.txt' here) the ajax way i.e. without refreshing the whole page. We'll also add a link to the script file that will have our ajax request code.

When the link is clicked, the text will load via ajax. to disable the default action on click, which is going to the linked file in the browser, we will use 'return false;' in our javascript.

The **ajax.txt** file has text that says 'Your AJAX request was successful if this was loaded in without a full page refresh'.

Step 1 - Beginning our code
---
In our **main.js** file, we'll start by creating a [slef-invoking anonymous function](link-to-related-post) so our ajax code stays out of our global scope.

```javascript
(function(){

})(); 
```
    
Step 2 - Setting up for when the link is clicked
---

```javascript
(function(){

  var link = getElementByTagName('a')[0];

  link.onclick = function() {
  
    return false
  };

})(); 
```
    
We are going to select the link element. Since we only have one 'a' tag in our sample code, we are directly targetting the first link in the index.html file. You can set 'index' to determine which 'occurence' of the tag you want to target. Index starts with zero. `getElementByTagName('a')[0];` will get the first `a` tag in index.html. 
      
```javascript
var link = getElementByTagName('a')[0];
```

Next, we'll handle the click event of this link. Let's create a function that will run whenever the link is clicked.

By default if you click a link, it 'goes' to the linked file. We don't want that. We want it to 'load' everything the linked file on the page we are on, has without refreshing the page. So we'll add `return false;` at the end of the function to disable the default onclick action.

```javascript
link.onclick = function() {

  return false;
};
```
    
Step 3 - Starting AJAX code, i.e. creating an XHR Object.
---

```javascript
(function(){

  var link = getElementByTagName('a')[0];

  link.onclick = function() {
  
    return false
  };

})(); 
```
    
Our web page doesn't need to do a full page refresh to send a request to the server or receive a response back. 


Step 4 - readyState and Status Codes
---
onreadystatechange
200 = successful
304 = nothing has been changed since last request
