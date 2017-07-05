---
layout: post
title: Self-invoking Anonymous Function - IIFE
ctime: 2015-11-04

---

A slef-invoking anonymous function is to make sure we stay out of the gloabl scope so that our script can play nicely with others. This is useful/needed when all you javascript code is in one main file.

We can do this by wrapping the code we write or execute within a selfinvoking anonymous function. We create a self incoking anonymous function like this:

```javascript
(function() {

})();
```

Now, whatever we put inside of here will only be unique to this anonymous function. It won't interfere with anything outside of it. So now we can safely create new variables and new functions and we don't have to worry about our code overriding another variable or function from another script or whatever else may be in teh global scope.

Our code inside the self-invoking anonymous function shouldn't interfere with anything that's outside in the global scope.


```javascript
var message='Hello!';

(function(){
    var message='Goodbye!'
})();

alert(message);
```

The above code will output the value of the variable that is out in the glocal scope and not whatever is in our anonymous self-invoking function.

- [Source](https://code.tutsplus.com/courses/learning-ajax/lessons/the-simplest-ajax-script)