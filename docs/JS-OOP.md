### Contructor functions
A constructor function is given a _Capitalized_ name to make it clear that it is a constructor

```javascript
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
```

To use a constructor function we call it with the **new** keyword in front of it like:

```javascript
var myCar = new Car()
```

To modify the properties of the new Car instance that you just created:

```javascript
myCar.nickname = "Honda"
```

You can also pass in args to your constructor function, like you do in functions, of course.

Properties = Attributes
Methods = Functions

### Private methods and properties
To do this, we create the variable inside the `constructor` using the `var` keyword we're familiar with, instead of creating it as a `property` of `this`.

| Functions | OOP |
|-------------|-------|
| this | public |
| var  | private |


