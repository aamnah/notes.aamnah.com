---
title: Data and Props
categories:
  - "ReactJS"
date: 2016-11-24
lastmod: 2016-12-03
---

# Props `this.props.whatever`

Props is how you get data in. 

`this.props` is an object, which can have any sort of data properties. In order to use the properties, you wrap them in `{ }`. (In Angular it's a duble curly brace, in React it's just one)

```javascript
<div>Hello {this.props.name}</div>
```

`this.props.children` gets everything rendered inside a component


# Setting default props

You can set default prop values. So even if the user doesn't provide a prop value, it'll have something to use. This is done using `getDefaultProps()` method

```javascript
var Loading = React.createClass({
  getDefaultProps: function () {
    return {
      text: 'Loading'
    }
  },
  render: function () {
    ...
  }
})
```

So if we had a `Loading` component that took in a loading `text`, we could make sure that if a text attribute isn't provided to the component, `this.props.text` will by default be 'Loading'.

