---
title: React Styled Components
date: 2018-11-02
---

```bash
#sudo npm i -g create-react-app
yarn global add create-react-app

create-react-app react-styled-components
cd react-styled-components

# npm i --save styled-components
yarn add styled-components
```


### Component Architecture

We usually have categories for the components..

```
src
├── components
│   ├── common
│   ├── containers
│   └── pages
├── index.css
├── logo.svg
└── index.js
```

*Containers* interact with data and have business logic, these generally won't have any styles associated with them. They are responsible for interacting with data stores and passing it down to child components

*Pages* consist of top level pages, Home, Contact, Landing etc. 

*Common* has things like buttons. These are a good starting point for styled components.

### Traditional React Components

```
common
├── Button.css
└── Button.js
```

```js
// Button.js
import React from 'react'
import './Button.css'

const Button = ({ children }) => {
  return (
    <button className='btn'>
      { children }
    </button>
  )
}

export default Button
```

```css
/*
Button.css
*/
.btn {
  background: plum;
  border: none;
  padding: 1em;
}
```

### React Styled Components

```js
// Button.js
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: salmon;
  border: none;
  padding: 1em;
`

export default Button
```

- after `styled.` could be an valid HTML element: `styled.button`, `styled.section`, `styled.h1` etc.

- within the backticks you can add ANY valid CSS markup, e.g. media queries, nested CSS, pseudo-selectors etc.

- the `{children}` are already taken care of

### Conditional styles with props

```jsx
<Button danger>
  Dragons!
</Button>
```

#### Traditional way

```jsx
// Button.js

import React from 'react'
import './Button.css'

// Conditional Styling based on props
const Button = ({ danger, children }) => {
  return (
    <button className={`btn ${danger ? ' btn-danger' : ''}`}>
      { children }
    </button>
  )
}

export default Button
```


```css
/*
Button.css
*/

.btn {
  padding: 1em;
  border: none;
  font-weight: bold;
}

.btn-danger {
  background: #DC3545;
  color: white;
}
```

#### Styled components way

- You have access to props from within the styled component
- If `danger` has been passed as prop, render some more `css`
- Look into _tagged template literals_ for more on how this works

```jsx
// Button.js

import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 1em;
  border: none;
  font-weight: bold;

  /* If 'danger' has been passed as prop, render some more 'css' */
  ${props => props.danger && css`
    background: #DC3545;
    color: white;
  `}
`

export default Button
```


Links
---

- [styled-components](https://www.styled-components.com/)
- [styled-components Docs](https://www.styled-components.com/docs/basics)
- [Udemy: React Styled Components 2018](https://www.udemy.com/react-styled-components/)
- [egghead.io - Convert SCSS (Sass) to CSS-in-JS](https://egghead.io/courses/convert-scss-sass-to-css-in-js)