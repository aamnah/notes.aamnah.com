# React-Router

## Programmatic Navigation

- go to a link

```javascript
// if using react-router (v2+)
import { browserHistory } from 'react-router'
browserHistory.push('/some/path')

// if using newer react-router API inside components (v3+)
this.props.history.push('/some/path')

// if using react-router-redux
import { push } from 'react-router-redux'
this.props.dispatch(push('/some/path'))
```

- go to a link on button click

```javascript
<button 
    onClick={() => browserHistory.push('my/link/')}
>
Let's go!
</button>
```

- got to a link and send URL params, query, state whatever along

```javascript
<button 
  onClick={() => browserHistory.push(
		{
			pathname: '/about/',
			query: { name: 'Aamnah' },
			state: { name: 'Aamnah' }
		}
  )}
>
Let's go!
</button>
```
the above is the same as doing this: `browserHistory.push("/about/?name=aamnah")`.

You can access `query` values (e.g. NAME) in React with `this.props.query.NAME` or `this.props.location.query.NAME` and `state` with `this.props.location.state.NAME`

Links
---
- [StackOverflow: Programmatically navigate using react router](http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router)
- [Navigating Outside of Components](https://github.com/ReactTraining/react-router/blob/master/docs/guides/NavigatingOutsideOfComponents.md)
- [v2.0.0 Upgrade Guide: Programmatic Navigation](https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.0.0.md#programmatic-navigation)
- [Github: mjackson/history](https://github.com/mjackson/history/#navigation)