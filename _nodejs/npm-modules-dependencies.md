---
title: NPM, Modules and Dependencies
ctime: 2017-03-13 

---

tl;dr
---

- `npm install <module> --save` - install a module and save it as a dependency in package.json
- `npm install <module> --dev` - install a module and save it as a devDependency in package.json
- `npm install <module> -g` install a module globally
- `npm update <module>` updates a module to latest version
- `npm init` - create a package.json
- `npm install` - install all dependencies listed in package.json 

---

Node Package Manager, installing and managing dependencies.

### install a module

    npm install lodash
    npm install async request express

`-g` = install globally
`--save` = also save it as a dependecy in the package.json file.

### node_modules
It installs the modules in the `node_modules` folder in your project directory. If you are using Git, you don't need to commit this folder, you just need to inslude the `package.json` file and the user will be able to install all dependencies on their own computer.

### including a module in your project

install it with `npm install` and then in your code, do:

```javascript
var async = require("async");
var _ = require("lodash");
```

What we did is use `require()` to include the module and saved it as a variable. Now we can call all related functions on the `async` keyword.

### package.json
`package.json` file keeps track of all your modules, their version and basic project details. The easiest way to create one is using 

    npm init

_entry point_ is usually the index file of your project. Node looks into your package.json file to figure out what file it should load.

Even if you init a file after you have already installed some modules, it'll include all existing modules.

You need a `package.json` in order to use `--save`. Just a simple file with curly brackets should work.

```javascript
{}
```

#### versioning

https://docs.npmjs.com/files/package.json#dependencies

In the simplest terms, the `~` matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

The `^`, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

- The tilde `~` matches the most recent minor version (middle number). It means _approximately close_ version
- The caret `^` matches the most recent major version (first number). It means _compatible_ with version [read more](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/)
- `install –-save` prepends a caret `^` instead of a tilde `~`


### install dependencies
If you have an existing package.json file, you can run:  

```bash
npm install
```

to install all the dependencies mentioned in that file

### installing globally
When you need project to run things on the command line and not just in your project, for example `grunt` or `gulp`, you install them _globally_ with the `-g` flag

    npm install grunt -g

The global installs are for the command line tools. But if you also require it in your project, you need to install it locally in your project as well.

### finding modules
Do a search on [http://search.npmjs.org](https://search.npmjs.org)



Links
---
- [StackOverflow: What's the difference between tilde(~) and caret(^) in package.json?](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)