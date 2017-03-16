# JS Conditionals

## Switch

**ONLY use the following ternary operator and short circuit evaluation in simple use cases where it is obvious what your code is doing**

## Ternary Operator
This operator is frequently used as a shortcut for the if statement.

```javascript
<boolean> ? <expression if true> : <expression if false>
```

```javascript
condition ? expr1 : expr2
```

Note that you can not use `return` statements in ternary operators. _The conditional operator requires expressions, not statements._ [1][1]. In other words, it's a _conditional_, you are assigning values, not returning things.

## Short Circuit Evaluation
### Boolean operators to test multiple cases in one statement
Stop code execution as soon as possible (in order to optimize code). It is old practice though so you won't see it much. It works well for plain old `if` statements and not that well with `if .. else`. 

```javascript
/*
&&
*/
console.log(3 === 3 && 'cow') //cow (strings with a length >0 are truthy)
console.log(3 === 3 && 'cow' && 'chicken') //chicken // all conditions are true
console.log(3 === 3 && false && 'chicken') //false // will stop at first false operand
3 === 3 && false && console.log('chicken') //false // will not run console.log()


/*
||
*/
console.log(3 === 3 || 'cow') //true 
console.log(3 === 4 || 'cow' || 'chicken') //cow // cow is the first truthy value the interprator comes to
console.log(3 === 3 || false || 0) //0 // if all values are false, it'll still return the last value
```

```javascript
function isAdult(age) {
	if (age && age >= 18) {
		return true;
	} else {
		return false;
	}
}
console.log(isAdult());
```

is the same as

```javascript
function isAdult(age) {
	return age && age >= 18;
}
console.log(isAdult());
```

Another way short circuiting is used is to set default values. For example, 

```javascript
function countToFive(start) {
    start = start || 1;
    for (var i = start; i <=5; i++) {
        console.log(i);
    }
}
```

here, for `start = start || 1` if no `start` argument is provided for your function, the first part of the statement will return false and move to the next, which is `1`. 

WARNING: This is old practice and will give you issues if you pass in `0` as a value, since 0 will return `false`. In ECMAScrit 2015, you can **set default values for parameters**.

```javascript
function countToFive(start = 1) {
    for (var i = start; i <=5; i++) {
        console.log(i);
    }
}
```

Here is another example of short circuit evaluation.

```javascript
function greet(name) {
    name && console.log('Hi ' + name + '!');
}
```





[1]: http://stackoverflow.com/questions/19439219/ternary-operator-with-return-statements-javascript