---
title: Setting up Webpack and Babel for React projects
date: 2018-02-18
---


Install and setup Babel

```bash
# yarn global add babel-cli
npm install -g babel-cli
```

note: `babel-cli` also installs `babel` and `babel-node`

Create a `package.json` file so that you can save dependencies

```bash
# yarn init
npm init
```

```bash
# add deps to your project
yarn add babel-preset-react babel-preset-env
```

`babel-preset-env` includes everything in latest, es2015, es2016 and es2017 presets

```bash
# run Babel standalone
# babel inputFile --out-file=outputFile --presets=foo,bar,baz
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

use the `--watch` flag to watch for changes

### Yarn vs. npm
- Yarn was developed by engineers from Facebook, Google, Exponent and Tilde
- Yarn is faster than npm when it comes to installing packages
- Yarn has an offline cache. You don't always have to be online to install a package if it's already in the cache
- Yarn generates a `.lock` file by default
- Yarn add dependencies to `packages.json` by default
- Yarn has access to both npm and bower repositories, you can install all their packages with Yarn
- Gurus use Yarn, not because it's cool but because it's actually better