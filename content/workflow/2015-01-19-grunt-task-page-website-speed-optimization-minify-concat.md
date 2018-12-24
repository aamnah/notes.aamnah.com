---

title: Writing a Grunt Task for Website Speed Optimization
description: Write a Grunt task to take care of minifying, concatenating and optimizing JS, CSS, HTML and images in order to massively improve page load speeds.
slug: grunt-task-page-website-speed-optimization-minify-concat
---

This Grunt task will be able to take care of the following:

- Minifying CSS 
- Minifying JS
- Minifying HTML
- Concatentaing multiple JS files
- Concatenating multiple CSS files
- Optimizing Images



**NOTE:** ImageOptim is wayyyy better than imagemin. Imageoptim 'Saved 3MB out of 24.9MB. 15.4% per file on average (up to 84.7%)' where imagemin did 'Minified 368 images (saved 0 B)' for the same files. The only issue is, Image optim works on your mac and opens imageoptim installed on it to compress images. Whereas, imagemin works on the server.
