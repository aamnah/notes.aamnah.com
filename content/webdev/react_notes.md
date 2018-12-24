---
title: React Notes
date: 2018-07-07
---

Functional Components

```js
import React from "react"

export default () => (
  <div>
    <p>Hello Functional Component</p>
  </div>
)
```

Class Components

```js
import React from "react"

class Counter extends React.Component {
  render() {
    return <div>Hello Class Component</div>
  }
}

export default Counter;
```

Class components allow us to have component state

### Component State

```js
constructor() {
  super()
  this.state = { count: 0 }
}
```


### Example: Basic Counter


```js
import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Plus +</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Minus -</button>
      </div>
    )
  }
}

export default Counter
```