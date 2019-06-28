---
title: Implementing SVG icons in React
date: 2019-06-27
---

### v1

```js
import React from 'react'
import './Icon.scss'

function Icon({ name, size }) {
  return (
    <i className="Icon">
      <img
        src={`/icons/${name}.svg`}
        className={`Icon-${name}`}
        alt={name}
        width={size ? `${size}px` : '32px'}
      />
    </i>
  )
}

export default Icon
```

```js
import Icon from './Icon'

<Icon name="home" />
```

**Pros**

- Simple, gets the job done

**Cons**

- You can not style these like an SVG (e.g. `fill`, `stroke` etc.) because they are imported as a static image.
- Every image you include is a seperate image file requested and loaded

### v2

```js
import React from 'react'
import './Icon.scss'

// Import all the svg icons as React Components
import { ReactComponent as Bell } from '../../icons/bell.svg'
import { ReactComponent as Chatroom } from '../../icons/chatroom.svg'
import { ReactComponent as Couple } from '../../icons/couple.svg'

// map the passed icon names and the component (i.e. the SVG file) to load
const icons = {
  bell: Bell,
  chatroom: Chatroom,
  couple: Couple,
}

function Icon({ name }) {
  let SVGicon = icons[name]

  return <SVGicon className={`Icon Icon-${name}`} />
}

export default Icon
```

```js
<Icon name="bell" />
```

**Pros**

- You can use SVGs as inline SVGs, no more browser requests for images, just inline code
- You can style the SVGs with CSS

**Cons**

- No ability to edit SVG in JSX