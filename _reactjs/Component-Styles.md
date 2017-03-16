# Components

- ES5 createClass Component
- ES6 Class Components
- ES5 Stateless Component
- ES6 Stateless Component

## ES5 createClass Component

```javascript
var HelloWorld = React.createClass({
  render: function () {
    return <h1>Hello World!M/h1>;
  }
});
```
## ES6 Class Components

```javascript
import React, { Component } from "react";

export default class Login extends Component {  
  render() {
    return (
      <div>
        Login Form will go here
      </div>
    )
  }
}
```

- No autobind, requires explicit bind with ES6 class
 
```javascript
// Works fine with ES5 createClass
<div onClick={ this.handleClick() }></div>

// Requires Explicit binding with ES6 Class
<div onClick={ this.handleClick().bind(this) }></div>
```
- PropTypes  are declared separately
- Default props are declared separately
- Set initial state in constructor


## ES5 Stateless Component

```javascript
var HelloWorld = function(props) {
  return <h1>Hello World!</h1>;
};
```
## ES6 Stateless Component

```javascript
const HelloWorld = (props) => {
  return <h1>Hello World!</h1>
}
```

OR 

```javascript
function HelloWorld(props) {
  return <h1>Hello World!</h1>
}
```