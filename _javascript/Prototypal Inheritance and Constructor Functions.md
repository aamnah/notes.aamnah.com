---
layout: post
title: Prototypal Inheritance and Constructor Functions
permalink: prototypal-inheritance-constructor-functions
publish: true
ctime: 2017-03-17
---

tl;dr
---

- A constructor function is just a normal function that creates (constructs) an object
- Every object has a Prototype object `__proto__`
- Every object inherits from it's Prototype object. If the prototype has a method or a property, the object using or  pointing to that prototype will have those too
- Changes made to a protype instantly updates all existing objects using that prototype, unlike object constructors which pass changes when new instances are created
- You would ideally use them both, methods in object constructor and methods in object prototype, in order to maximize on the performance and situation

You can edit the prototype in order to pass data to every instance of the object.

### Object Prototype vs. Object Constructor
Why create properties and methods in the prototype when you can just as easily create them in the object constructor itself?

- Properties and methods in the Prototype are passed on to all objects created. If you update a Prototype later, all objects using that Prototype will also be updated
- Properties and methods in an object constructor function are added when you create an object using that constructor, but existing objects don't update when you update the object later. If you make changes to an object, the changes will only be passed to new instances, created after the changes were made.
- Methods in Prototype will only be stored in memory once because objects coming from the same constructor point to one common prototype object, while methods in the constructor will get **re-declared** for every instance you create, effecting negatively on memory usage (modern Javascript engines such as V8 are smart enough for not to recreate instances of a method thanks to hidden classes)
- Properties and methods in an object constructor function are very much like _static_. Because you have used `this` to bind to only that particular instance, you have no relation with the object constructor. You are **binding to the particular instance**. Whereas in Prototype, you bind to the constructor. You're not pointing to methods in the instance you created, you're **pointing to methods in constructor**. Any change in constructor gets reflected in all instances because they're all pointing to the same prototype.

```javascript
// Object constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // Object method
  // Changes to an object method only effects object instances created AFTER the change
  this.greet = function() {
    console.info(`Hello ${this.firstName} ${this.lastName}`)
  }
}

// Prototype
// Adding a method to prototype
// Changes to a prototype method instantly updates all objects using that prototype
Person.prototype.details = function() { // it's not the prototype of Person, it's the prototype of any object created from Person
  console.info(`${this.firstName} ${this.lastName} is ${this.age} year(s) old`)
}

// Creating a new instance of the Person object
let john = new Person('John', 'Denver', 28)
console.info(john) // Person { firstName: 'John', lastName: 'Denver', age: 28, greet: [Function] }

// Test Prototype method and Object method
console.info(john.details()) // John Denver is 28 year(s) old
console.info(john.greet()) // Hello John Denver

// Changes to an Object Method vs. Changes to a Prototype Method
Person.greet = function() {
	console.info(`Hello there ${this.firstName} ${this.lastname}, you amazing fellow!`)
}

Person.prototype.details = function() {
  console.info(`${this.firstName} ${this.lastName} is ${this.age} year(s) old and he is amazing!`)
}

// Let's test the changes
console.info(john.details()) // John Denver is 28 year(s) old and he is amazing! >> Prototype method updated the existing object
console.info(john.greet()) // Hello John Denver >> Object method missing our updates

// Check out the prototype of an object
console.info(john.__proto__) // Person { details: [Function] }
```

Links
---

- [Udemy: Prototypal Inheritance and Function Constructors](https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3494208)
- [Methods Within Constructor vs Prototype in Javascript](http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)
- [TLDR: ES6 Classes vs. Constructor Functions](/es6-classes-vs-constructor-functions)