---
title: Notes of React Hooks
date: 2019-12-03
---

# useEffect()

- named after _side effects_, e.g. API calls, manually changing the DOM, setting up a subscription etc.
- effects happens after every render by default
- If you need cleanup (i.e. `componentWillUnmount`), you `return` a function from your effect function.
- Use multiple effects to separate concerns
- Effects are run (_all of them_) in the order that they are defined
- cleans up the previous effects before applying the next effects (lesser bugs)
- You can pass an optional second argument to the effect, an array, which lets you specify what changes to look for when running the effect. If you are using effect to update the `count`, you'd tell the effect to look for any changes in the state of `count`, and disregard re-renders because of other changes

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

Example effect

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

  // return a function to sepcify how to cleanup after the effect
  // you can return a named function for brevity: return function cleanup() {
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```