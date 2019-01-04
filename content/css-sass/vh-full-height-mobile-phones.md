---
title: Issues with making mobile screens take full height `100vh`
date: 2018-12-21
lastmod: 2019-01-04
---

- `100vh` does not take into account the browser bar or the navigation menu.
- On iOS Safari and Google Chrome, the viewport will not resize in response to the URL being shown or hidden. This is a compromise by design, to avoid page jarring, reflows and relayout.

![100vh on Android 8.0.0 - Chrome 70.0.3538.110]()
![100vh on iOS 12.1 - Safari 12]()

### The workaround

Calculate the `window`'s `innerHeight`, and use that as a CSS variable instead of `vh`

```js
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
```

```css
.element {
  height: 100vh; /* Fallback */
  height: calc(var(--vh, 1vh) * 100);
}
```

- `var(--vh, 1vh)` will evaluate to `var(6.67px, 1vh)` on an iPhone 6/7/8 (667px high). 
- the first argument is the custom property name `--vh` in this case, and the second argument is the desclaration value `1vh` which serves as the fallback if the first argument is invalid. So, use calculated `--vh`, and if it's not available, use `1vh`.

```
var( <custom-property-name> [, <declaration-value> ]? )
```

### In the wild

Here is how you'd do a `100vh` above the fold layout with a header, hero area and footer..

```css
.layout-above-the-fold {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.logo { height: calc(var(--vh, 1vh) * 20); }
.hero { height: calc(var(--vh, 1vh) * 65); }
.footer { height: calc(var(--vh, 1vh) * 15); }
```

Although, instead of using fixed heights for elements, using something like Flexbox or CSS grid is a better option.

Links
---

- [Viewport height is taller than the visible part of the document in some mobile browsers](https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html)
- [StackOverflow - CSS3 100vh not constant in mobile browser](https://stackoverflow.com/a/37113430)
- [CSS-Tricks - The trick to viewport units on mobile](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
- [Google Developers - URL Bar Resizing](https://developers.google.com/web/updates/2016/12/url-bar-resizing)