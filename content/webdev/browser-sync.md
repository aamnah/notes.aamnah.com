---
title: Browsersync
description: Automatically refresh your browser on multiple devices and see changes live
date: 2018-07-15
lastmod: 2017-07-16

---

### tl;dr

```bash
# INSTALL
npm install -g browser-sync #install with npm
# or
yarn global add broswer-sync #install with Yarn

# RUN
browser-sync start --server --files ./*.* #run by providing options at command line
# or
browser-sync start --config 'config/browsersync.js'

```


- `--server` or `-s` runs a local server, gives you an IP on which you can check your site
- `--files ` or `-f` let's you specify file paths to watch for file changes. `./*.*` looks for changes to all files in the current folder. SImilarly, `--files "css/*.css"` will look for changes to all `.css` files in the `css` folder


#### Config file
If you don't want to enter long command every time, you can save the same config to a `.js` file and mention it when running the command

```bash
browser-sync start --config 'config/browsersync.js'
```


```js
module.exports = {
  files: [ './*.*', './*/*.{html,htm,css,js}' ],
  server: true
}
```

is the same as running the following command:

```bash
browser-sync --server --files './**/*.{html,htm,css,js}'
```

You can also generate a config file contaiing all the default options with the following command:

```bash
browser-sync init
```



Links
---

- [Browsersync](https://browsersync.io/)
- [Browsersync Command Line Usage](https://browsersync.io/docs/command-line)
- [Browsersync Options](https://www.browsersync.io/docs/options/)
