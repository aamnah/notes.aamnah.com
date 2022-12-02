---
title: SVG Icon System in React
date: 2019-06-27
lastmod: 2020-05-17
---

## SVG as Image

```js
import React from 'react'
import logo from './logo.svg' // Tell Webpack this JS file uses this svg

console.log(logo) // /logo.84287d09.svg

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />
}

export default Header
```

## SVG as a React component

You can import an SVG as a React Component. This has been supported since Create React App 2.0 (`react-scripts@2.0.0` and `react@16.3.0`)

```js
import { ReactComponent as MyIcon } from './icon.svg'
export { MyIcon }
```

```jsx
import { ReactComponent as Logo } from './logo.svg'
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo className="App-logo" alt="logo" />
  </div>
)
```

> Don't forget the curly braces in the import! The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename.

A `ReactComponent` SVG will show as inline `<svg>` when rendered. You can now use all the CSS magic.

```css
.App-logo g {
  fill: red;
}

.App-logo path {
  stroke: palegoldenrod;
  stroke-width: 10px;
  fill: none;
  stroke-dasharray: 35px 15px;
  animation: orbit 1s infinite linear;
}

@keyframes orbit {
  to {
    sroke-dashoffset: 50px;
  }
}
```

## SVG with Props

To be continued.. Will probably have to leave the `.svg` files and add the paths in a `.jsx` file so we could use `props`

Case for converting SVGs into React components

- Theming. You can change the color of all icons when you change the theme. But i'd argue you can do that with CSS as well

```jsx
// wrapping SVGs in theme-able components
import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
   light: '#fafafa',
   dark: '#0e0f11'
});
const LogoWrapper = styled.div`
   svg {
      fill: ${backgroundColor};
   }
`;
```

## Links

- [Consider importing SVGs as React components #1388 Closed ](https://github.com/facebook/create-react-app/issues/1388)
- [Docs: Adding SVGs](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs)
- [egghead: Add SVGs as React Components with Create React App 2.0](https://egghead.io/lessons/react-add-svgs-as-react-components-with-create-react-app-2-0?pl=create-react-app-2-0-1218245e)
- [Using SVG Icons Components in React](https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91)
- [How to Optimize and Export SVGs in Adobe Illustrator](https://www.sitepoint.com/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/)
- [Creating an SVG Icon System with React](https://css-tricks.com/creating-svg-icon-system-react/)
- [Working with SVGs in React](https://medium.com/@rossbulat/working-with-svgs-in-react-d09d1602a219)