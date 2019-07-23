---
title: Getting started with styled-components
date: 2019-07-22
---

- how do i get started? `npm i styled-components` and `import styled from 'styled-components'`
- how do i do media query mixins in styled-components that i used to do in Sass? Write them as a JS template literal instead and export/import that file.

### Basics

```js
import React from 'react'
import styled from 'styled-components'

function export default Button () {
	const 

}
```

### Media Queries with Mixins

You use the _mixin_ as a regular JavaScript function or template string. And then inside the styled component you can call that function or template string.

Ideally, you'd have the media queriues in a separate file that you can import in other files

```js
// media-queries.js
const device = {
	phone-only: '(max-width: 599px)',
	tablet-portrait-up: '(min-width: 600px)',
	tablet-landscape-up: '(min-width: 900px)',
	desktop-up: '(min-width: 1200px)',
	big-desktop-up: '(min-width: 1800px)'
}
export default device
```

```js
import styled from 'styled-components'
import device from './media-queries.js'

const ContentWrapper = styled.div`
  display: flex;
  // Mobile friendly by default
  flex-direction: column;

  // Switch to rows on large devices
  @media ${device['tablet-landscape-up']} {
    flex-direction: row;
  }
`
```

If you want to define your breakpoints as variables and then use them, you can do that as well. (I personally feel it's an unncessary step.

```js
// media-queries.js

// taking the sizes from the breakpoints in Chrome Dev Tools
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
```

```js
// Wrapper.js
import styled from 'styled-components'
import { device } from './device'

const Wrapper = styled.div`
  margin: 0 auto;

  @media ${device.laptop} {  // -> "@media (min-width: ${size.laptop})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`
```



Links
---

- [How to use media queries with styled components](https://jsramblings.com/2018/02/04/styled-components-media-queries.html)
- [The 100% correct way to do CSS breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)