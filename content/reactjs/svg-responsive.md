---
title: Responsive SVGs in React
date: 2019-07-15
---

tl;dr: You need to import the responsive svg as a `ReactComponent`

Firstly, you need a responsive SVG. And then you need to inport it as a `ReactComponent` in React

```js
import React from 'react'


import logo from '../assets/img/logo-responsive.svg'
import { ReactComponent as Logo } from '../assets/img/logo-responsive.svg'

function Demo() {
  return (
    <div className="App-body">
      <main>
        <h1>Responsive SVG Demo</h1>

        {/* the img will show but will not be responsive */}
        <img src={logo} alt="logo" />

        {/* the ReactComponent will be a respnsive SVG, but it'll add the entire SVG, 
         i.e. ALL the <symbol>s you defined will be in the code */}
        <Logo /> 
      </main>
    </div>
  )
}

export default Demo
```

Links
---

- [How to Create Responsive SVG Images](https://webdesign.tutsplus.com/tutorials/how-to-create-responsive-svg-images--cms-32140)