---
title: React State with Hooks
date: 2019-07-04
---

```js
import React, { useState } from 'react'

export default function Demo () {
	const state = useState("")
	const text = state[0]
	const updateText = state[1]

	// useState() is a function that takes the the initial state and returns an array
	// containing two items
	// first item is the value you want to put in state
	// second item is the function to update that value

	// the above can be written in a shorthand way liek below
	const [text, updateText] = useState("")

	// every value you want to set in state gets its own line like above
}
```

- Hooks let you add state to a function component, no more `constructor()`, `this`, or `this.setState()`
- `useState()` is a hook that returns an array. First entry is whatever value you want to put  in the state.
The second entry is a function to update the state. You can name these entries whatever you want.
- Accessing state is as simple as referencing the variable `{name}`, since it'll be in scope.


```js
const [checked, setChecked] = useState(false)

const handleCheckboxToggle = e => setChecked(!checked)

// You can also provide a function to the updator
// pass previous state, return new state

const handleCheckboxToggle = e => setChecked(prevChecked => !prevChecked)
```

The state can be an object too

```js
const [state, setState] = useState({
	text: '',
	checked: false,
	loadning: false,
	data: []
})

const handleCheckboxToggle = e => setState(prevState => ({
	checked: !prevState.checked // since the state is an object, you can have to specify which property, in this case `checked`
}))
```

`useState()` does not do a shallow merge like `setState()` does, it wipes out the state that we had before. React recommends saving your state as separate variables so that updating one does not wipe the other. (Or you could write your own `mergeState` function)

```js
const mergeState = partialState => 
setState(prevState => ({
	...prevState, // takes new state being sent and merges with previous state
	...partialState
}))

<input onChange={e => mergeState({ text: e.target.value })}
```

## Linting
If you want linting for your React Hooks, you'll have to eject from the create-react-app project in order to install ES Lint
