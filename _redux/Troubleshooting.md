# Troubleshooting Redux

## State is not updating
- Make sure you are not mutating your state in any of the reducers

## Actions not dispatching
- Make sure you're adding `this.props` before the action you want to dispatch.

## State is not showing
- This happens when you
