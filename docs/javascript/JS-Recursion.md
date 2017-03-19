# Recursion
When a fnuction calls itself until it doesn't. Duh!

```javascript
let countDownFrom = num => {
  if (num === 0) return
  countDownFrom(num -1)
}
countDownFrom(10)
```

Links
---
- [YouTube: FunFunFunction: Recursion - Part 7 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=k7-N8R0-KY4)