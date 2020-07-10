---
title: Parcel
date: 2018-10-18
---

## Why?

- Simpler to use than Webpack
- Has a built-in live dev server, with hot module replacement
- Let's you create and use modules with `import` and `export`
- Babel works right out of the box
- Live reloading works with HTML, CSS and JS
- Buils your projcect for you, default build directory is `dist`. You can change it with `--out-dir`
- Build code gets automatically compiled and minified

### Getting started

With Yarn

```bash
yarn global add parcel-bundler
yarn init -y
```

or with NPM

```bash
npm install -g parcel-bundler
npm init -y
```

### Setting up scripts in package.json

```js
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html --out-dir prod"
  },
```

### Babel config

Parcel uses Babel `@babel/preset-env` to convert JavaScript for you. You can easily add more Babel plugis to the config and they'll work with Parcel

```bash
yarn add @babel/plugin-proposal-class-properties
```

Create a `.babelrc` and add your plugins

```json
{
	"plugins": [
		"@babel/plugin-proposal-class-properties"
	]
}
```

### CSS and Sass

```bash
yarn add sass
```

import your Sass file in one of the JS files

```js
import '../styles/main.scss'
```

### Parcel and React

```bash
yarn add react react-dom
yarn add --dev parcel-bundler
```

```js
// package.json
"scripts": {
  "start": "parcel index.html"
}
```

### Parcel vs. SVGs
- issue 1: Parcel is stripping (inline) `<svg>` sprite out of an HTML doc when running `build`
- issue 2: Parcel is nesting `<svg>` code, i.e. nesting paths and groups inside one another when they are supposed to be siblings, not parent-child

#### Inline SVG
Parcel by default [doesn't support inline `<svg>`](https://github.com/parcel-bundler/parcel/issues/1622). You can either use `fs.readFileSync` to load the file, or use a plugin like [`parcel-plugin-inlinesvg`](https://github.com/albinotonnina/parcel-plugin-inlinesvg)

```bash
yarn add parcel-plugin-inlinesvg
```

That plugin didn't work. It replaced the `<img>` with the `.svg` files with some `.js` code that failed to load.

What did work was adding two config files for [PostHTML](https://github.com/posthtml/posthtml) and [htmlnano](https://github.com/posthtml/htmlnano) that disabled minification of svgs and some stuff about tags

```js
// .posthtmlrc
{
  "recognizeSelfClosing": true,
  "lowerCaseAttributeNames": false
}
```

```js
// .htmlnanorc
{
  minifySvg: false
}
```

Links
--

- [Getting Started](https://parceljs.org/getting_started.html)
