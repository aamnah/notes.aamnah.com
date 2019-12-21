---
title: Shadows and Elevation in React Native
date: 2019-12-21
status: draft
---

In Android (and React Native), you don't have `box-shadow`, you have `elevation` instead, which works with `z-index`

```
Z = elevation + translationZ
```

- [React Native View Style Props: elevation](https://facebook.github.io/react-native/docs/view-style-props#elevation)
- [Android: elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation)