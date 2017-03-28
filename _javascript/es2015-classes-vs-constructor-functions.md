---
layout: post
title: ES6 Classes vs. Constructor Functions
subtitle: Ways of cerating and describing objects in JavaScript 
permalink: es6-classes-vs-constructor-functions
publish: true
ctime: 2017-03-19
---

tl;dr
---
- A constructor function is just a normal function that creates (constructs) an object
- JavaScript does not has _classes_ and hence it does not has _methods_. What you have are _properties_ in an object, some of which may be _functions_ 
- Javascript is not your classic **class-based** language but rather a **prototype-based** language.
- Classes in JavasScript are _syntactic sugar_, meaning they're a feature that only changes how you type something, but nothing changes under the hood.
- The `class` syntax makes writing and building objects easier/neat.

```javascript
'use strict'; // older version of Nodejs only allowed classes in Strcit mode

class Person {
  // constructor function
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // adding stuff to prototype to pass on to all instances of this class
  // any methods that exist in the class will be automatically added to the prototype
  greet() {
    return `Hello ${this.firstName} ${this.lastName}`
  }

  details() {
	  return `${this.firstName} ${this.lastName} is ${this.age} year(s) old`
  }
}

let jane = new Person('Jane', 'Davis', 28)

// test
console.info(jane) // Person { firstName: 'Jane', lastName: 'Davis', age: 28 }
console.info(jane.greet) // [Function: greet]
console.info(jane.greet()) // Hello Jane Davis

console.info(jane.__proto__) // Person {}
console.info(Object.getPrototypeOf(jane)) // Person {}

// Get all methods/functions inside the class
console.info(Object.getOwnPropertyNames(Person.prototype)) // [ 'constructor', 'greet', 'details' ]

console.info(Person) // [Function: Person]
console.info(jane.constructor) // [Function: Person]
```

is functionally equivalent to

```javascript
// constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age
}

// adding stuff to prototype to pass on to all instances of this class
Person.prototype.greet = function() {
  return `Hello ${this.firstName} ${this.lastName}`
}

Person.prototype.details = function() {
  return `${this.firstName} ${this.lastName} is ${this.age} year(s) old`
}

let jane = new Person('Jane', 'Davis', 28)

// test
console.info(jane) // Person { firstName: 'Jane', lastName: 'Davis', age: 28 }
console.info(jane.greet) // [Function]
console.info(jane.greet()) // Hello Jane Davis

console.info(jane.__proto__) // Person { greet: [Function], details: [Function] }
console.info(Object.getPrototypeOf(jane)) // Person { greet: [Function], details: [Function] }

console.info(Person) // [Function: Person]
```

Note that while `jane.__proto__` in a normal constructor function gives us details for everything on the prototype `Person { greet: [Function], details: [Function] }`, `jane.__proto__` in a class constructor only gives the class `Person {}`, not methods. Technically, there are no _methods_ in JavaScript. 

Notice that since classes are just syntactic sugar, there is no easy way of finding all (prototype) _methods_ in a class. You can however use `Object.getOwnPropertyNames(Foo.prototype)` to find all _properties_ in a class prototype.


Links
---

- [Udemy: JavaScript Aside: ES6 Classes](https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3604652)
- [Methods Within Constructor vs Prototype in Javascript](http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)
- [TLDR: Prototypal Inheritance and Constructor Functions](/prototypal-inheritance-constructor-functions)
- [StackOverflow: Get functions (methods) of a class](http://stackoverflow.com/questions/31054910/get-functions-methods-of-a-class)