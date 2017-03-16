# Closures

# FunFunFunction

In JavaScript, functions are not just functions, they are also closures. ALL functions are closures. What that means is that the function body has access to variables that are defined outside the function.

```javascript
let me = 'Bruce Wayne'
function greetMe() {
	console.log(`Hello, ${me}!`)
}
greetMe()
```

We can do this in JS, call the function without passing it an argument. But apparently, we can't do this in other languages (which don't have support for closures). In other languages we do it like this:

```javascript
function greetMe(me) {
	console.log(`Hello, ${me}!`)
}
greetMe('Bruce Wayne')
```

The point of closures is that without them, you'll be miserable in functional programming. You'll have to manually pass a value as argument to the function, and to EVERY function inside that function

# JSisSexy

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s `arguments` object, however, even though it can call the outer function’s parameters directly.

You create a closure by adding a function inside another function.


**A function with access to it's own private variables**. No other function knows about or can access these vars.

JavaScript variables can belong to the **local** or **global** scope. Private variables can be made possible with **closures**.


You can use the same variable name within different closure functions, and you can have as many closures as you want.

_Inner function_ can access vars defined in _outer function_, as well as global vars. They won't be accessible _outside the clousre function_ though. 

This is an example of **lexical scoping**: in JavaScript, the scope of a variable is defined by its location within the source code (it is apparent _lexically_) and nested functions have access to variables declared in their outer scope.

```javascript
function outerFunction() {

	function innerFunction() {
		someCount++;
		console.log("Called" + someCount + " times");		
	}
	return innerFunction;

}

counter1 = outerFunction();
counter2 = outerFunction();

counter1(); // Called 1 times
counter2(); // Called 1 times
```

# Functional-Lite JavaScript

> Closure is when a function _remembers_ the variables around it even when that function is executed elsewhere

Links
---
- [Understand JavaScript Closures With Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
- [YouTube: FunFunFunction: Closures - Part 5 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=CQqwU2Ixu-U)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Frintend Masters: Functional-Lite JavaScrip: Closures](https://frontendmasters.com/courses/functional-js-lite/#v=xy8mj95e72&p=0.1063)
