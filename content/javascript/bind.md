---
title: bind
date: 2016-11-25
---

# bind

> bind creates a new function and sets it's scope.

We use `.bind()` to create a new function and then set it's scope to be bound to whatever was passed to bind.



this code

```javascript
var myObj = {

    specialFunction: function () {

    },

    anotherSpecialFunction: function () {

    },

    getAsyncData: function (cb) {
        cb();
    },

    render: function () {
        var that = this;
        this.getAsyncData(function () {
            that.specialFunction();
            that.anotherSpecialFunction();
        });
    }
};

myObj.render();
```

and this code achieve the same

```javascript
render: function () {

    this.getAsyncData(function () {

        this.specialFunction();

        this.anotherSpecialFunction();

    }.bind(this));

}
```


`.bind()` simply creates a new function that, when called, has its `this` keyword set to the provided value. So, we pass our desired context, `this` (which is `myObj`), into the `.bind()` function. Then, when the callback function is executed, `this` references `myObj`.


```javascript
var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3
```



`.bind()`, `.apply()` and `.call()` are all methods used to set the scope of a function. call and apply are immediately executed whereas bind let's you call the function at a later time. `bind` sets the scope but doesn't execute the function.

Links
---
- [Smashing Magazine: Understanding Prototype.bind](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
- [JavaScript: bind function](http://krasimirtsonev.com/blog/article/JavaScript-bind-function-setting-a-scope)