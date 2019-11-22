---
title: Creating a placeholder loading Component in React Native using Animated
date: 2019-11-21
---

I'm creating a React Native component that shows as a placeholder for live data (in other words: loading boxes) and changing it's color to indicate that stuff is loading..

Here's how you go about doing that:

1. Create a new `Animated` value, and give it the initial value. 

```jsx
// set a value to be animated
const currentColor = new Animated.Value(0)
```

2. To change color you can use `.interpolate()` on the animated value you just created. Interpolate will take an array of input values `inputRange`, and another one of output values `outputRange`, and then map the values to each other. You can either do this interpolation inside your `Animate` function, or you can define it separately, which i did, like so:

```jsx
// interpolate color value
const changeColor = currentColor.interpolate({
  inputRange: [0, 1, 2],
  outputRange: ['gainsboro', 'whitesmoke', 'gainsboro']
})
```

What the code above would mean is that at my initial value of `0`, the color would be `gainsboro` and when i move to `1` it'll change to `whitesmoke`. Then i'm changing it back to `gainsboro` at `2` (because i want to loop the color change). If you set the `toValue` as `1` in the above code, it'll only transition till `whitesmoke` and ignore what comes afterwards.

3. Now, that i have the values defined, i'm going to setup my animation:

```jsx
// define the looping animation
const animateColor = ()=> {
    Animated.loop(
      Animated.sequence([
        Animated.timing(currentColor, {
          toValue: 2, // the value in interpolated output range that you want to go to
          duration: 2000 // ms
        }),
      ])
    ).start()
  }
```

In my animation, i'll `loop` a `sequence` of changes. Inside the sequence, i'm animating between different values (mapped to my colors above). Using the `.timing()` function, i'm changing the value i want to animate (defined as `currentColor`) over a period of 2000ms (i.e. 2sec) and going from the initial value of `0` to the interpolated value of `2` (using `toValue`).

The above two steps can also be combined like so:

```jsx

```

4. I'm starting the animation and saving the entire process as a function called `animateColor`. I'll then pass that function to the `useEffect()` hook (i.e. the equivalent of `componentDidMount()`)

```jsx
export default function App() {
  useEffect(() => {
    // start the animation to change background color
    animateColor()
  })
  return (
    // component goes here..
  );
}
```

In your component, when you're setting styles, you'll use the `Animated.Value` you defined in order to change color, in our case `backgroundColor: changeColor`

Here's the full code:

```jsx
import React, { useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

// set a value to be animated
const currentColor = new Animated.Value(0)

// interpolate color value
const changeColor = currentColor.interpolate({
  inputRange: [0, 1, 2], // the values that the animation will transition from
  outputRange: ['gainsboro', 'whitesmoke', 'gainsboro'] // values that are animating
})

// define the looping animation
const animateColor = ()=> {
    Animated.loop(
      Animated.sequence([
        Animated.timing(currentColor, {
          toValue: 2, // the value in interpolated output range that you want to go to
          duration: 2000 // ms
        }),
      ])
    ).start()
  }

export default function App() {
  useEffect(() => {
    // start the animation to change background color
    animateColor()
  })
  return (
    <View style={styles.container}>
      <Animated.View style={{ height: 150, width: 150, backgroundColor: changeColor, borderRadius: 8, margin: 8}}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Notes

- The above code is now in a good place to be used as a starting point. If you want to use `rgba` values, you may have to look into `hex-to-rgba`
- The entire thing could just be a CSS animation as well, look into that. I mean, we're only changing the background color? Answer: In vanilla React Native you can not use CSS animations. The `Stylesheet` properties in React Native are pretty limited. You can find a list of [all supported properties here](https://facebook.github.io/react-native/docs/layout-props.html)
- But maybe we can do CSS animations using `styled-components`?

### Animating SVGs
Can i use SVGs as placeholder? Sure. you'd have to use another library (e.g. `react-native-svg`)to add SVG support to React Native, and then you'd have to create a custom animated components using [createAnimatedComponent](https://facebook.github.io/react-native/docs/animated.html#createanimatedcomponent) to be able to animate an `<Svg>` component

See example [here](https://animationbook.codedaily.io/animated-create-animated-component/)

```jsx
import { Path } from "react-native-svg";
const AnimatedPath = Animated.createAnimatedComponent(Path);
```

See [Animating SVG in React Native]()

Links
---

- [React Native Change Background Color Using Animation in Android iOS](https://reactnativecode.com/change-background-color-using-animation-view/)
- [Animating backgroundColor in React Native](https://stackoverflow.com/a/33958541)
- [react-native-easy-content-loader: interpolate color with rgba](https://github.com/sarmad1995/react-native-easy-content-loader/blob/master/src/shared.js#L20)
- [rn-placeholder](https://github.com/mfrachet/rn-placeholder)
- [Animated](https://facebook.github.io/react-native/docs/animated)
- [Animations](https://facebook.github.io/react-native/docs/animations)
- [Animate Colors with React Native Interpolate](https://codedaily.io/screencasts/8/Animate-Colors-with-React-Native-Interpolate)