---

title: Import Files in Sass with `@import`
slug: /howto-sass-import-files
date: 2014-05-21 19:51:45.000000000 +05:00
type: post
published: true
status: publish
categories:
- CSS
tags:
- compass
- sass
---

Importing files is handy when you have your css in multiple files instead of one bloated stylesheet. See <a href="http://getbootstrap.com/css/#sass" target="_blank">Bootstrap's Sass files</a> for an example. Every css component gets it's own .scss file and they all get compiled into one main stylesheet.

The usual imports in a main.scss file are something like this:

 
```sass
// Reset
@import "_reset.scss";

// Definings
@import "_varables.scss";
@import "_mixins.scss";

// Global Styles
@imprt "_globals.scss";

// Page specifics
@import "pages/_about_us.scss";
```

Notes:
---

- Files that start with an `_` are left alone by sass. They are not compiled. (similar to Jekyll..)
- Order in which files are imported is important because of the cascading nature of css. Things that are defined first are often overwritten by later definitions.
- You can import a file that's already importing six other files. Nested imports work.
