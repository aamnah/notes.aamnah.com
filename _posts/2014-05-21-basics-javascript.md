---
layout: post
title: JavaScript Basics
date: 2014-05-21 16:22:38.000000000 +05:00
type: post
published: true
status: publish
categories:
- JavaScript
tags: []
---

## Comparison Operators


`>` Greater than  
`<` Less than  
`>=` Greater than equal to  
`<=` Less than equal to  
`===` Equal to  
`!==` Not equal to

## logical operators

JavaScript has three: **and** `&&`, **or** `||`, and **not** `!`.

**Modulo**  
Modulo is the same as **remainder**. When % is placed between two numbers, the computer will divide the first number by the second, and then return the remainder of that division.

## Function

A function takes in inputs, does something with them, and produces an output.  
Function syntax is as follows  

```javascript
var functionName = function (parameter) { };
```

## Global vs Local vars

Global = variable made outside a function, Local = variable made inside a function.  
Variables defined **outside** a function are accessible anywhere once they have been declared. They are called **global variables** and their scope is **global**.

```javascript
var globalVar = "hello";

var foo = function() {
    console.log(globalVar);  // prints "hello"
}
```
The variable globalVar can be accessed anywhere, even inside the function foo.

Variables defined **inside** a function are **local variables**. They cannot be accessed outside of that function.

For example:  

```javascript
var bar = function() {  
    var localVar = "howdy";  
}  
console.log(localVar);  // error
```

The variable `localVar` only exists inside the function `bar`. Trying to print `localVar` outside the function gives a error.

## Null, Undefined and NaN

**Null** means the value is null.  
**Undefined** means the value isn't defined. Undefined is given when the variable is mentioned but the value isn't defined. If the variable wasn't metioned it would give a 'ReferenceError: variable is not defined.'  
**NaN** means not a number.

## Incrementing and Decrementing

`i = i + 1` means we have incremented (increased) the variable `i` by 1 each time. 

- A more efficient way to code to increment up by 1 is to write i++.  
- We decrement down by 1 by writing i--.  
- We can increment up by any value by writing i += x, where x is how much we want to increment up by e.g., i += 3 counts up by 3s.  
- We can decrement down by any value by writing i -= x. (See the Hint for more.)

## HTTP Status Codes

A successful request to the server results in a response, which is the message the server sends back to you, the client.

The response from the server will contain a three-digit status code. These codes can start with a 1, 2, 3, 4, or 5, and each set of codes means something different. (You can read the full list here). They work like this:

**1xx**: You won't see these a lot. The server is saying, "Got it! I'm working on your request."

**2xx**: These mean "okay!" The server sends these when it's successfully responding to your request. (Remember when you got a "200" back from Codecademy?)

**3xx**: These mean "I can do what you want, but I have to do something else first." You might see this if a website has changed addresses and you're using the old one; the server might have to reroute the request before it can get you the resource you asked for.

**4xx**: These mean you probably made a mistake. The most famous is "404," meaning "file not found": you asked for a resource or web page that doesn't exist.

**5xx**: These mean the server goofed up and can't successfully respond to your request.

## for vs. while

In situations where you don't know in advance when to stop looping, we can use a while loop.

## .toUpperCase() and .toLowerCase()

turns text to all capps and all lower case respectively.

## Methods

**.length** tells the length of the string  
**indexOf('string')** tells what is the index (starting point) of the given string  
**charAt(8)** tells the character at index 8. since it is zero based it'll tell you the letter at the ninth place.  
**.substr(start, length)** gets a sub-string, or gets part of a string out based on the index given.

## Notes:

- in JS, `!` means none or not.
- `parseInt` will convert a string to an integer. `parsefloat` will give a decimal (floating) value. There is also `parsebool`.
- Be very careful with your syntax—if you write a loop that can't properly end, it's called an **infinite loop**. It will crash your browser! It is important that there is a way for the for loop to end. If the for loop is always going to be true, then you will be stuck in an infinite loop and your browser will crash.
- a **transfer protocol** is a fancy way of saying "rules for getting something from one place to another." On web, the rules are for transferring web pages to your browser.
- **REST** = **Re**presentational **S**tate **T**ransfer
- **Endpoints** are API-defined locations where particular data are stored. For instance, if you're using the API for a video hosting service, there might be endpoints for the most popular videos, the most recent videos, or videos belonging to a certain genre or category.
- JavaScript understands `1` to mean `true` and `0` to mean `false`.
- **heterogeneous arrays**, means a mixture of data types, like so: `var mix = [42, true, "towel"];`
- **two-dimensional array** by nesting arrays one layer deep. array inside an array. like so: `var twoDimensional = [[1, 1], [1, 1]];`
- **multi-dimensional array** if you really wanted, you could put arrays inside arrays inside arrays for even more dimensions.
- Sometimes you want arrays that aren't as nice and even as your 3 x 3 two-dimensional array: you may have three elements in the first row, one element in the second row, and two elements in the third row. JavaScript allows those, and they're called **jagged arrays**.
- You can also think of **objects** as combinations of key-value pairs (like arrays), only their keys don't have to be numbers like 0, 1, or 2: they can be strings and variables.

```javascript
var myObject = {  
key: value,  
key: value,  
key: value  
};
```
