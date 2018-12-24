---
title: "[ES2015] Classes in JavaScript"
category: JavaScript
tags:
  - ES2015
  - Concepts
date: 2016-12-22
---

# ES2015 / ES6 Classes in JavaScript

Classes in JS don't give JS an OO nature, JS remains Prototypal. Classes introduced in ES6 are mainly syntax sugar.

```javascript
"use strict";

// CLASS
class User{
  // Constructor
  // takes any values/attr you want to set
  constructor(username, email, password) {
    this.username = username // Whatever username we passed in is now this Class's (instance) username
    this.email = email
    this.password = password
  }

  static countUsers () {
    console.info('There are 50 users')
  }

  // Methods
  register() {
    console.log(`${this.username} is now registered`)
  }
}

// Instantiate the class
let Bob = new User('bob', 'bob@bobby.com', '123supersecretpass')

// Call a method 
Bob.register() // bob is now registered

// INHERITANCE
class Memeber extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password)
    this.package = memberPackage
  }

  getPackage() {
    console.info(`${this.username} is subscribed to the ${this.package} package`)
  }

}
let mike = new Member('mike', 'mike@email.com', 'pass123', 'Standard')

mike.register() // mike is now registereds
mike.getPackage() // mike is subscribed to the Standard package

```



## Constructors
Constructors are methods that'll run when your class is instantiated. They can take parameters. You can then set these params (passed in values) and assign them to class properties.

## Methods
Methods are functions that belong to a class. You can call them on an instance of a class, like so:

```javascript
Bob.register() // bob is now registereds
```

You can also have **static** methods. Whatever. Static methods can be called without having to instantiate a class, like this: 

```javascript
User.countUsers() // There are 50 users
```

## Inhertitence
You can **extend** existing classes to create new classes. `super` constructor calls (functions etc.) on the`constructor` in the parent class. `super` needs to be called before you can use the `this` keyword.

```javascript
class Member extends User {}
```


## Classes vs Functions?
You should create a class whenever you have code that needs to be _self-aware_ or keep something in memory. Whatever that means.

Links
---
- [YouTube: TraversyMedia: JavaScript ES6 / ES2015 - [04] Classes and Inheritance](https://www.youtube.com/watch?v=RBLIm5LMrmc)
- [Youtube: Nodecasts: JavaScript ES6 - Classes](https://www.youtube.com/watch?v=MsbNJPsjD-w)
- [YouTube: thenewboston: ECMAScript 6 / ES6 New Features - Tutorial 5 - Classes](https://www.youtube.com/watch?v=XHYvWYbqgJE)