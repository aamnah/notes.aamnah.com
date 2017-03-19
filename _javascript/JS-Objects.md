---
layout: post
title: JavaScript Objects
subtitle: Tracking data using Objects
permalink: js-objects
status: publish
ctime: 2016-11-21
mtime: 2017-03-19
---

# JavaScript Objects

```
{
	key: value
	property: value
	method: function () {}
}
```

Object is a value type that contains key value pairs inside curly barces. Keys are also known as properties and everything in JavaScript that isn't a primitive type is an object. Primitive types are Strings, Numbers, Booleans, Undefined, Null and Symbols (ES6). Yes, arrays are objects. Functions are objects too. The difference between functions and objects is that functions can be called.

When variables are used in objects they're called _properties_ and when functions are used inside and object they're called _methods_.

to create an object, we assign a variable to an _object literal_ 

```javascript
var students = {};
```

**NOTE**: `[ ]` create an array, `{ }` create an object. Pay attention if you're a beginner, i have already mixed these in code, code didn't work..


```javascript
var students = {
    name: "Dave"
};
```
property/key doesn't need to be in quotes. 

```javascript
var students = {
    name: "Dave",
    grades: [99, 85, 80, 79]
};
```
separate each key:value pair with a `,` the last pair doesn't need one.

FYI, there are multiple ways in which you can create an object 

- the literal way `myObj = {}`
- with `Object.create()` the method
- with _constructor functions_ and the `new` keyword `new Car()`

## Accessing and Modifying data
You access values by their property names:

- `person['name']`
- `person.name`

You create and modify data the same way, with an `=` sign

- `person.name = "Anna"`
- `person.age = 27`

if a property exists, it'll update the value. if it doesn't, it'll create the property AND update the value.

**You can use array methods (like `.join()`) on an object property**

## Loops (for .. in)

```javascript
for (var key in object) {
    // do something
}
```

`key` is the property name, this will change every time it loops. this doesn't have to called `key`, you can call it `jojo`, `x`, `k`, `prop` or whatever. `object` is the object name, the object you want to loop through.

You need **bracket notation** `person[key]` to access property values in a `for in` loop. `person.` _inside a for in loop_ will look for a property that is _literally named_ `key` in the object.

- `person[key]` CORRECT
- `person.key` WRONG - will look for one property literally called `key` instead of looping through properties
- `person["key"]` WRONG - will get the `key` property if it exists

FYI, you can `console.log()` multiple strings separated with a `,`

```javascript
console.log(key, ' : ', person[name]);
```

or just use template strings

```javascript
console.log(`${key} : ${person[name]}`;
```

## Constructor functions
_Constructor functions_ create objects. They are used with the `new` keyword, which creates the objects, sets `this` within the function to the object (i.e. `this` refers to the new object), and return the object.

```javascript
// Object constructor function
function Vehicle(year, make, model) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.getFullDescription = function() {
    return `${this.year} ${this.make} ${this.model}`
  }
}

// create a new instance of the object using the `new` keyword
let myCar = new Vehicle('2016', 'Honda', 'Civic')
```

## Factory functions
Factory functions return objects but they don't need to use the `new` keyword and they don't set `this` inside the function to the object being created. They just create and return an object

```javascript
// Factory function (using ES6 enhanced object literal syntax)
function createVehicle(year, make, model) {
  return {
    year,
    make,
    model,
    getFullDescription() {
      return `${year} ${make} ${model}`
    }
  }
}

// create a new instance of the object
let myCar = createVehicle('2016', 'Honda', 'Civic')
```

## JSON
JSON is just a **string** that is formatted as a JS Object. Servers are really good at sending and receiving strings (like HTML/CSS). Once a browser gets the string, it converts it to a pure JS object.


## Examples

```javascript
// Object literal
let car = {
  make:  'Honda',
  model: 'Civic',
  year: 2016
}

// Bracket notation
console.info(`I have a ${car['year']} ${car['make']} ${car['model']}`)

// Dot notation
console.info(`I have a ${car.year} ${car.make} ${car.model}`)

// When property key is a variable (e.g. inside loops)
// console.info(`I have a ${car[year]} ${car[make]} ${car[model]}`)


// Object literal
let employee = {
  // properties
  firstName: 'Harry',
  lastName: 'Denver',
  //method
  fullName: function () {
    return `${this.firstName} ${this.lastName}` // this refers to the object that owns the function
  }
}

// reference a property
console.info(`Our manager is ${employee.firstName}`)

// call a method
console.info(`His full name is ${employee.fullName()}`)

// Object constructor function
function Vehicle(year, make, model) { // notice the capital V? it's convention for constructor functions
	this.make = make; // notice the semicolons and equal signs
	this.model = model;
	this.year = year;
	this.getFullDescription = function () {
		return `${this.year} ${this.make} ${this.model}`;
	}
}

// create new instances with the new keyword
let myCar = new Vehicle('2015', 'Honda', 'City')
let mySistersCar = new Vehicle('2013', 'Toyota', 'Corolla Fielder')

console.info(`${myCar.getFullDescription()}`)
console.info(`${mySistersCar.year} ${mySistersCar.make} ${mySistersCar.model}`)

// factory functions?
function createVehicle(year, make, model) {
	return {
		make: make,
		year: year,
		model: model,
		getFullDescription: function () {
			return `${year} ${make} ${model}`
		}
	}
}

let myCar2 = createVehicle('2015', 'Honda', 'Civic') // no `new` keyword
let mySistersCar2 = createVehicle('2013', 'Toyota', 'Corolla Fielder')

console.info(`${myCar2.getFullDescription()}`)
console.info(`${mySistersCar2.getFullDescription()}`)


// ES6 Enhanced Object literal syntax
function createVehicle(year, make, model) {
	return {
		make, // if the property name and value variable name are the same, you don't have to type both
		year,
		model,
		getFullDescription() { // we can remove the function keyword
			return `${year} ${make} ${model}`
		}
	}
}
```


Links
---
- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [StackOverflow: Constructor functions vs. Factory functions](http://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions)