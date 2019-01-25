---
title: Using Font Face Observer
date: 2019-01-19
status: draft
---

Font Face Observer let's you add a CSS class on an element based on whether or not the font was loaded. This is useful when you want to avoid FOUT (Flash of Unstyled Text)

```css
.wf-inactive body {
  font-family: helvetica, arial, sans-serif;

  /* 
    Add other styles to minimize text reflow (avoid jumpiness) here..
    font-size, line-height, letter-spacing
  */
}

body {
  font-family: "Graphik-Regular", helvetica, arial, sans-serif;
}

```

```js
import FontFaceObserver from 'fontfaceobserver'

document.body.classList.add('wf-inactive')

// Fontface Observer
const GraphikRegular = new FontFaceObserver('Graphik-Regular'),
      GraphikMedium = new FontFaceObserver('Graphik-Medium'),
      GraphikSemibold = new FontFaceObserver('Graphik-Semibold')

Promise.all ([
  GraphikRegular.load(),
  GraphikMedium.load(),
  GraphikSemibold.load()
])
.then (() => {
  document.body.classList.remove('wf-inactive')
  document.body.classList.add('wf-active')
})
.catch (() => {
  console.info(`web font is NOT loaded`)
});
```

```js
// serve from cache (sessions storage)
```

- `wf-active` and `wf-inactive` are common practice names for indicating whether a web font was laoded or not. Typekit and fonts.com use it. You can just as well use `font-loaded` or something else if you want, but keeping it the `wf-` way keeps it consistent whether you're using your own fonts or a webfont service.
- default timeout for font laoding is 3 seconds. You can change it

Links
---

- [Font Face Observer](https://fontfaceobserver.com/)
- [Github: Font Face Observer](https://github.com/bramstein/fontfaceobserver)