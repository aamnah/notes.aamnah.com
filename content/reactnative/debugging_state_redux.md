---
title: Debugging Redux State in React Native
date: 2019-11-04
---

**tl;dr**

- Install [React Native Debugger][RND-releases] for your system and [redux-devtools-extension][http://extension.remotedev.io/] for your app
- Shake your app (device) and enable `Debug JS Remotely` from the menu.
- Close all open debugger windows (e.g. the one that opens in the Browser when you enable Remote debugging)
- Open a tab in React Native Debugger with the `port` your app's debugger is running on. For Expo DevTools it's usually `19002`. (RND is smart enough to automatically detect the port when you open a new tab..)
---


### Setup Redux DevTools Extension in your app

```bash
npm install -D redux-devtools-extension
```

If you just have a simple Redux store with no middleware or enhancers, use `devToolsEnhancer()`

```js
// store.js
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
```

If you have middleware, use `composeWithDevTools()`

```js
// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

[RND-releases]: https://github.com/jhen0409/react-native-debugger/releases