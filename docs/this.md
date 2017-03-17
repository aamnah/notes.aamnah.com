# this

Depending on **where** and how a function is called, `this` can mean different things. `this` is all about the **context**.

`this` is the owner of the function, i.e. the object where the method is called.

`this` is used a lot in _clousres_ where functions have independant variables defined in an enclosing scope.

`this` is the strangest thing you'll come across in JS, but just remember that it is the object that owns the method being called.

## 4 Ways that `this` takes a value
- In normal functions
- Within methods on objects
- Within an object that has been constructed (a new instance of a prototype)
- A function invoked with `.call`, `.apply` or `.bind`

#### 1. 
In _normal functions_, `this` is in Global scope (`window`) if it hasn't been explicitly defined.

#### 2.
`this` by a method on an Object will always reference the object itself.

```javascript
Portland = {
    bridges: 12
}

function logBridges() {
    console.log(this.bridges);
}

Portland.foo = logBridges;

Portland.foo(); //12
logBridges(); //undefined
```


#### 3. 
when we use a constructor function to create a new object, `this` is the new object we created, not the constructor function.

```javascript
const City = function(name, state) {
    this.name = name || 'Portland';
    this.state = state || 'Oregon';

    printDetails() {
        console.log(My city is "+ this.name +", and my state is " + this.state);
    }
}
portland = new City();
seattle = new City('Seattle', 'Washington');

portland.printDetails(); // My city is Portland, and my state is Oregon
seattle.printDetails(); // My city is Seattle, and my state is Washington
```

You can run this above constructor function a 100 times and it'll create new instances with different values (which you provided). `this` changes every time you create a new instance, that's why it is highly replicable code.


## Node and `this`
In node, "this" in a normal function results in being global to the MODULE, not to the application. You can read more [here](https://nodejs.org/api/globals.html#globals_global).

From the docs, "In browsers, the top-level scope is the global scope. That means that in browsers if you're in the global scope var something will define a global variable. In Node this is different. The top-level scope is not the global scope; var something inside a Node module will be local to that module."




Read More
---
- [Treehouse: OOJ: Understanding this](https://teamtreehouse.com/library/objectoriented-javascript/introduction-to-methods/understanding-this)
- [Treehouse: Workshop: Understanding `this` in JavaScript](https://teamtreehouse.com/library/understanding-this-in-javascript-2)