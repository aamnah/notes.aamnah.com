---
title: Bash script to create Media Queries with Sass
slug: bash_script_create_media_queries_sass
categories: [ "Bash Scripting" ]
tags: [ "sass", "media-queries", "script", "bash", "css" ]
date: 2014-08-30
---

The following bash script will create a main sass stylesheet **style.scss** and then create additional sass stylesheets for all devices (**mobile.scss**, **ipad.scss**, **desktop.scss**, **wide.scss**, **iphone.scss**) in a folder called **media-queries**.

In the end, we will combine stylesheets for all devices into one by importing them into our main style.scss.

I have divided the code for different devices in their own stylesheets becuase it keeps it is neat and organized and i prefer it that way. Sass does its magic and takes all the code from different files using `@import` and gives me one neat stylesheet. In the HTML, i only need to link to one stylesheet, the one that Sass generated for me.


#### Code

``` bash
#!/bin/bash
# Create Media Queries
mkdir media-queries

touch media-queries/mobile.scss
echo -e "
/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen
and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen
and (max-width : 320px) {
/* Styles */
}
" >> media-queries/mobile.scss

touch media-queries/ipad.scss
echo -e "
/* iPads (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
/* Styles */
}

/* iPads (landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape) {
/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait) {
/* Styles */
}
" >> media-queries/ipad.scss

touch media-queries/desktop.scss
echo -e "
/* Desktops and laptops ----------- */
@media only screen
and (min-width : 1224px) {
/* Styles */
}
" >> media-queries/desktop.scss

touch media-queries/wide.scss
echo -e "
/* Large screens ----------- */
@media only screen
and (min-width : 1824px) {
/* Styles */
}
" >> media-queries/wide.scss

touch media-queries/iphone4.scss
echo -e "
/* iPhone 4 ----------- */
@media
only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5) {
/* Styles */
}
" >> media-queries/iphone4.scss

touch style.scss
echo -e "
// Mobile
@import 'media-queries/mobile';

//iPads
@import 'media-queries/ipad';

//Desktops and Laptops
@import 'media-queries/desktop';

// Wide (Large) screen
@import 'media-queries/wide';

//iPhone
@import 'media-queries/iphone4'
" >> style.scss
```
    
Let's save our code in a file called **media-queries.sh**

To run the script, run the follwing command in terminal, in the same folder your script is in.
	
    bash media-queries.sh


Here are all the files created:

    .
    ├── media-queries
    │   ├── desktop.scss
    │   ├── ipad.scss
    │   ├── iphone4.scss
    │   ├── mobile.scss
    │   └── wide.scss
    └── style.scss

    1 directory, 6 files

Now that you have these stylesheets created, you can add the styles for the intended device in their own stylesheet. The files have the queries added and commented so you will know what are the breakpoints and if it is going to be portrait or landscape.

You will also need to convert the .scss file to .css. Look up [Sass](http://sass-lang.com/). If you write CSS code, you should be doing it in Sass. If you don't want to use Sass for the variables, or mixins, or nesting.. do it for the simple fact that you can combine multiple stylesheets into one.

#### The code to convert your .scss file to .css 
	
```bash
sass style.scss:style.css
```

The first file you give is the input file (the Sass file you want to convert) separated by a `:` and then the name of the output file (the CSS file to save as).

Additionally, you can add the `--watch` flag so that it keeps automatically generating the .css file as you save changes.

```bash
sass --watch style.scss:style.css
```