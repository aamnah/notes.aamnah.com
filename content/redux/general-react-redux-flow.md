---
title: General React-Redux Flow
date: 2017-01-11
---

# General React-Redux Flow

1. Create actions and reducers
2. Connect the app to store with `Provider`
3. Create a container
  - mapStateToProps
  - mapDispatchToProps
  - connect
4. Using state and dispatch

### connecting the store
```javascript
import { Provider } from 'react-redux

ReactDOM.render(
  <Provider store={store}>
    <MyRootComponent />
  </Provider>,
  document.getElementById('root')
)
```

### Creating a container
```javascript
import React from 'react
import { connect } from 'react-redux'

class MyClass extends React.Component {}

function mapStateToProps (state, ownProps) {}
function mapDispatchToProps (state, ownProps) {}

export default connect(mapStateToProps, mapDispatchToProps)(MyClass)
```

You can pass down the whole state to the connect function, or you can map your props and actions and then connect them, it's up to you really. Mapping it does make it more presentable and easier to maintain, but might not be that helpful if only have fancy little in state.

```javascript
export default connect(state => state)(MyClass)
```

### Using Redux State and Dispatching Redux Actions from React Containers
Once you have mapped your redux state and dispatch with `mapStateToProps` and `mapDispatchToProps`, you can now use the state and dispatch actions in React conatiner components.

The redux state is passed as a `prop` to your connected React container components, and you can access redux stuff with `this.props`

```javascript
// Dispatching actions
this.props.dispatch(myAction()) // ignored mapDispatchToProps, calling directly from state
this.props.myAction() // manually wrapped action in mapDispatchToProps
this.props.actions.myAction() // used bindActionCreators in mapDispatchToProps

// Using state
this.props.state.blah // ignored mapStateToProps, calling directly
this.props.blah // calling specific state parts mapped in mapStateToProps
```