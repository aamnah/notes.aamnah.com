# Input Fields

Here's the template of our React component

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

class MyComponet extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {}
  }
  // stuff goes here
}

ReactDOM.render(
  <MyComponent />,
  document.querySelector('#root')
)
```

You can get the value of any input field with  `e.target.value`

```javascript
 handleChange (e) {
   console.info(e.target.value)
  }
 
 render () {
   return (
     <input type='text' onChange(this.handleChange)/>
    )
  }
```

Once you have the value, you can update React state with `this.setState()`

```javascript
 handleChange (e) {
   this.setState({
    text: e.target.value
   })
  }
 
 render () {
   return (
     <input type='text' onChange(this.handleChange)/>
     <h3> You typed {this.state.text}</h3>
    )
  }
```

### Controlled components
Controlled components are components that are controlled by React, likely with state values.

### update the input field value
You can set the value in the input component

```javascript
     <input type='text' onChange(this.handleChange) value={this.state.text}/>
```

Links
---
- https://www.sitepoint.com/premium/screencasts/controlled-components-vs-uncontrolled-components-in-react