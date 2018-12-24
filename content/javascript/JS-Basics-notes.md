# JS Notes

7 JS Data Types: 

- undefined
- null
- boolean
- string
- symbol
- number = numeric data
- object

If you do a mathematical operation on an undefined variable your result will be `NaN` which means _Not a Number_. If you concatenate a string with an undefined variable, you will get a literal string of `undefined`.

_Compound Assignment With Augmented Multiplication_ is just `*=`

| Code | Output |
|--------|----------|
|   `\'`     |    single quote |
|   `\"`     |   double quote |
|   `\\`    |    backslash |
|   `\n`   |	newline |
|   `\r`    |	carriage return |
|   `\t`    |	tab |
|   `\b`   |	backspace | 
|   `\f`    |	form feed |

# Arrays []
`[' ']` is an empty array, `{ }` is not.
 the individual characters of a _string literal_ cannot be changed. On the other hand, the entries of _arrays_ are mutable and can be changed freely. 

`.push()` adds data to the end of an array
`.pop()` pops a value off the end of an array
`.shift()` removes the first element of an arary
`.unshift()` adds elements to the beginning of an array

_Parameters_ are placeholders for values that are to be input to a function when it is called. _Arguments_ are the actual values that are passed.


# Scope
Scope refers tp teh visibility of variables. Variables which are defined outside a function are called **Global** scope. Variables which are used without the `var` keyword are automatically created in `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

Variables which are declared within a function, as well as the function parameters have **local** scope. That means, they are only visible within that function.

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. 

`==` is the equality operator
`===` is the strict equality operator, it test both _data type_ and the value of the compared element.


## Switch statements

```javascript
switch(val) {
	case val1:
		// statement 1;
		break;
	case val2:
		// statement 2;
		break;
	...
	case valn:
		// statement N;
		break;
	default:
		// default statement;
}
```

### Switch statement with multiple identical cases

```javascript
switch(val) {
  case 1:
  case 2:
  case 3:
    // statement
    break;
} 
```

## Objects
calling properties  
- **dot notation** testObj.name
- **bracket notation** testObj["name"]

### bracket notation
is good for calling properties that have space in their names. Or if the property name is a number It is also good for **using a variable to access a property** (read: you must use bracket notation when accessing a property using a variable).

- testObj[16]
- testObj["my name"]
- testObj[name]  -- here name is a variable, you can tell by the lack of `' '`

### modifying properties
adding and editing are done the same way: `testObj.name = "Whatever"1`  
deleting is done using the `delete` keyword: `delete testObj.name`

### checking if a property exists
we use the `.hasOwnProperty()` method on the object. e.g: `Obj.hasOwnProperty("propname");`. It returns `true` or `false`

### accessing sub-properties
the sub-properties of an object can be accesssed by chaining together the dot or bracket notation. e.g: `myStorage.car.inside["glove box"]`

#Arrays vs Objects
- Arrays are index based, you access properties like `pet[3]` to get the 4th pet value.
- Objects use dot and bracket notations, and have **key-value pairs**.

# Loops

## For

```javascript
// for ([initialization]; [condition]; [final-expression])
for (i = 0; i < 5; i++ ) {
};
for (i = 0; i < 10; i+=2) {
	// will iterate EVEN numbers because i starts at 0
};
for (i = 1; i < 10; i+=2) {
	// wil iterate ODD numbers because of i starting at 1
};
for (i = 10, i > 0; i-=2) {
	// will iterate EVEN numbers backwards because of `i-=2` 
}
```

#### For loop to iterate over arrays
Remember that Arrays have zero-based numbering, which means the last index of the array is length -1. Our condition for this loop is `i < arr.length`, which stops when i is at length -1.

```javascript
for (i = 0; i< arr.lenth; i++) {
	// do something
}
```

#### nested For loop to iterate over nested sub-arrays

```javascript
  var product = 1;

  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
```

### While Loops

```javascript
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
```

## Generating numbers
`Math.random()` generates a ranmdom number between 0 and 1
`Math.floor()` rounds _down_ to the nearest whole number


# Regex
You can invert any match by using teh UPPERCASE version of the selector, e.g: `\S` instead of `\s` will match anything that isn't a whitespace.

`/` is the start/end
`g` global, return all matches, not just the first one
`i` ignore case, case-insensitive
`\d` digit (0-9)
`+` match one or more, e.g: `/\d+/g`
`\s` find spaces. e.g: `/\s+/g`
`" "` space
`\r` carriage return
`\n` new line
`\t` tab
`\f` form feed

# Object vs. Array

JavaScript has only one data type which can contain multiple values: Object. An Array is a special form of object.

- Arrays are created with `[]`. Objects are created with `{}`
- Arrays use `index` value to access array items (`veggie[6]`). Objects use a `key` to access their properties (`person['name']` or `person.name`).


- `Math.random()` generates a random number b/w 0 and 1.
- `Math.floor()` rounds the number down to it’s nearest whole number

