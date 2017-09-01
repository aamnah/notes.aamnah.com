---
title: Creating our own Modules
ctime: 2016-08-19 
---

tl;dr
---

- Create a module file using `module.exports`
- Include that module file using `require()`. Provide full file path. `var fs = require("fs")`
- OR import the ES6 way `import fs from 'fs'`
- You can further organize the modules by giving them their own folder. For example, people use `lib` to keep their modules in. 

---

Any code that is well designed, reusable, it is a function that can process independantly, you should give it it's own file and include that as a _module_. Module here just means that it is kinda _bundled_ separately (in a different file).

## create
You separate your code that you want to modularize, and make it a module using `module`'s `export` funcion.

```
module.exports = function() {
  // code goes here
};
```

## include
To include a module, you again use `require()`, but provide a full path to the file. By default, `require()` looks in the node_modules folder. You can change that to look into other folders. You don't need to put `.js` in the end, Node knows. For example:

    var powerUp = require("./powerUp");

will look in the root folder for the file _powerUp.js_ and include it in your project.

## organize

You can create a folder to keep all your custom modules in for better organization. People tend to call that folder `lib`. It's kinda like the `inc` folder. Your require path will change accordingly,

    var powerUp = require("./lib/powerUp");


