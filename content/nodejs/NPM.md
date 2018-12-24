---
title: NPM intro
date: 2016-11-21
---

# NPM
- npm = Node Package Manager
- Let's you install and manage your _modules_. A module is just a bunch of code grouped together.
- It makes it easy to update your modules (versions) without having to edit code. 

## why NPM?
- makes it easy to download different modules
- makes it easy to upgrade different modules (e.g. jquery, bootstrap)
- makes it easy to remove modules
- it's a package **manager**. it makes your life easy by making managing your modules and packages easier
- it let's you install modules with single commands instead of having to download code locally and including it, or including links to CDNs.

## getting started

`npm` comes with Node.js. If you have Node installed, you have npm installed. You can check if it's already installed with

```bash
node -v
npm -v
```

- install npm: 

```bash
# Install on Ubuntu Debian
sudo apt update && sudo apt install nodejs npm -y
```
- initialize: 

```bash
npm init
```
inside your project folder. will create **package.json**

- install modules: 

```bash
npm i -S jquery
npm i -D react react-dom
```

- `i` is short for `install`
- `--save` or `-S` adds it to **package.json** as a dependency 
- `--save-dev` or `-D` adds it as a dev dependency. 
- Without `-S` or `-D`, jQuery would have been installed into our **node_modules/** folder but not saved to the package.json file.

## installing specified dependencies in package.json

if you were collaborating with a teammate, instead of having to push your entire `node_modules` folder to github, your teammate can just clone your project and run `npm install` and all of your dependencies that are saved inside of your `package.json` file (in this case just jquery) will be downloaded to her `node_modules` folder.


## NPM Scripts
let's you run commands you saved under `scripts` in _package.json_.

Inside of your package.json file, under the `"scripts"` property, add

```json
"test": "ava 'app/**/*.test.js' --verbose --require ./other/setup-ava-tests.js"
```

so that your complete scripts sections looks like

```json
  "scripts": {
    "test": "ava 'app/**/*.test.js' --verbose --require ./other/setup-ava-tests.js"
  }
```

Links
---
- [React Training](https://online.reacttraining.com/courses/reactjsfundamentals/lectures/762526#/finished)
