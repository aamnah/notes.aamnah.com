---
title: Theming styled-components in React
date: 2019-11-05
---


```bash
npm i styled-components styled-theming
```

if you have a Typescript project

```bash
npm i @types/styled-theming
```

```js
// App.js

import React from 'react'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return(
    <ThemeProvider theme={{ mode: 'light' }}>
      {/* rest of your app */}
    </ThemeProvider>
  )
}
```


You can style variations of the same button with `theme.variants()`

```js
import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme.variants("mode", "kind", {
  default: { light: "#123456", dark: "#123456" },
  primary: { light: "#123456", dark: "#123456" },
  success: { light: "#123456", dark: "#123456" },
  danger: { light: "#123456", dark: "#123456" },
  warning: { light: "#123456", dark: "#123456" },
})

const Button = styled.button`
  background-color: ${backgroundColor};
`

Button.propTypes = {
  kind: PropTypes.oneOf(["default", "primary", ...]),
};

Button.defaultProps = {
  kind: "default",
};
```

### Props

Here, `default`, `primary`, `danger` etc. are _props_ that you can pass to your _Button_, and the styles will change based on what prop you passed.

You need to have a `default` prop when defining multiple variations

`kind` here is a _prop_ name. You can call it whatever, e.g. _variant_ 

#### Proptypes

If you are using Typescript with React, your `propTypes` would probably be a Typescript `type`

```js
type Props = Readonly<{
  kind?:
    | 'default'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
}>
```

### styling different states

You can have nested styles for the state, similar to Sass

```js
const StyledButton = styled.button`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 0 8px;
  border-radius: 4px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.05);
  border: 3px solid ${backgroundColor};

  :hover {
    background-color: ${backgroundColorHover};
  }
```