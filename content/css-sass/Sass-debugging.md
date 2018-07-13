---

title: Debugging Sass
slug: /debug-troubleshoot-sass-issues
date: 2014-05-22 06:08:52.000000000 +05:00
type: post
published: true
status: publish
categories:
- CSS
tags:
- compass
- sass
---

`sass --help` OR `sass -h` OR `sass -?`
will give you a whole list of commands you can use and how to use them.

`sass --style compressed main.css`
will output a compressed version of main.css in the console.


`sass --style compressed main.css:main.css`
the file before the : is the input file and the one after is the output file.

`sass --style expanded main.css:main.css`
converts to 'expanded' style, which is nested but without the indentation.

`sass -l main.css:main.css`
`-l` flag adds line numbers (as well as file name) corresponding to where the code is in the .sass file and adds it as comments to the .css output.

 
```sass
@mixin old {
    @warn "Please use new() instead"
}
```

`@warn` let's you warn users about the code. For example, if a mixin/code/function is deprecated, you can warn the users about it and tell them to use the new one. @warn is added in the .scss file and is outputted in the console. In other words, it prints an error to Terminal showing a defined message.

Notes:
---
- When an error is at the end of a line, it is usually a missed semi colon `;`
