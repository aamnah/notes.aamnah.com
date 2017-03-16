# React Router

```javascript
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Users} />
    <Route path='/other' component={Other} />
  </Router>
), document.getElementById('root'))
```

`history` is required.

What we did above is we mounted a Router to the DOM, it is now going to take Routes. A route takes a path (URL) and shows a component on that path.

### Link

If you want to navigate anywhere _within_ the site, you use `Link`. You'll only use actual `href` when you want to move away from the site. A link looks like this:

```javascript
<Link to='/other'>Other</Link>
```

You will not be making any server requests to go to any of these different links/pages.

### Nested Routes

You can have nested routes just like you can have nested components

```javascript
ReactDOM.render((
  <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <Route path='/users' component={Users} />
        <Route path='/other' component={Other} />
      </Route>
  </Router>
), document.getElementById('root'))
```

What the could above will do is that it'll load the Users route/component _inside_ the Main route/component.

### IndexRoute
`IndexRoute` let's you render `props.children`. It's aimed at setting a default UI that opens when you are at the route.

```javascript
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={AppLayout}>
      <IndexRoute component={Users} />
      <Route path='/other' component={Other} />
    </Route>
  </Router>
), document.getElementById('root'))
```

### Props
You can also pass props, like so:

```javascript
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={AppLayout}>
      <IndexRoute component={Users} />
      <Route path='/profile/:id' component={UserProfile}} />
    </Route>
  </Router>
), document.getElementById('root'))
```