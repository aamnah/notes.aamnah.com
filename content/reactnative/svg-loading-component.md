---
title: Animating SVG in React Native
date: 2019-11-22
---

So this started when i wanted to create placeholder components using SVG.. Here's the complete code:

```jsx
// Placeholder.tsx
import React, { useEffect } from 'react'
import { Animated, View } from 'react-native'
import Svg, {
  SvgProps,
  Circle,
  CircleProps,
  Rect,
  RectProps,
  CommonPathProps
} from 'react-native-svg'

type Props = Readonly<{
  loading?: boolean
  shape?: 'circle' | 'rect'
  size: number
  height: number
  width: number
}>

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

export default function Placeholder({
  loading = true,
  size = 50,
  height = 50,
  width = 50,
  radius = 8,
  shape = 'rect',
  fill = 'gainsboro',
  ...rest
}: Props &
  SvgProps &
  CircleProps &
  RectProps &
  CommonPathProps &
  any) {

  useEffect(() => {
    // start the animation to change background color
    animateColor()
  })

  const AnimatedSvg = Animated.createAnimatedComponent(Svg)

  return (
    <View
    loading={loading}
    style={{margin: 8}}
    {...rest}
    >
      {shape === 'circle' && (
      <AnimatedSvg
        size={size}
        height={size}
        width={size}
        viewBox={`0 0 ${size * 2} ${size * 2}`}
        fill={loading ? changeColor : fill}
      >
        <Circle
          cx={size}
          cy={size}
          r={size}
        />
      </AnimatedSvg>
      )}

      {shape === 'rect' && (
      <AnimatedSvg
        height={height}
        width={width}
        viewBox={`0 0 ${width} ${height}`}
        fill={loading ? changeColor : fill}
      > 
        <Rect
          x="0"
          y="0"
          rx={radius}
          width={width}
          height={height}
        />
      </AnimatedSvg>
      )}
    </View>
  )
}
```

Referencing the component:

```jsx
// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Placeholder from './Placeholder'

export default function App() {

  return (
    <View style={styles.container}>
      <Placeholder />
      <Placeholder loading={false}/>
      <Placeholder shape='circle' size={150}/>
      <Placeholder shape='rect' width={200} />
      <Placeholder loading={false} shape='circle' size={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Notes

- SVG is not supported in react Native, using `react-native-svg` for that
- Since SVG is not supported, it is also not supported by React Native `Animated`. So made the SVG a custom Animated component using `createAnimatedComponent()`
- For example, to animate an SVG path, you'd make it an Animated component like so: 

```jsx
import { Path } from 'react-native-svg'
const AnimatedPath = Animated.createAnimatedComponent(Path)
```

- The prop types are there because i'm using Typescript
- The `<Placeholder>` component can take 
  - a `shape` prop, the two options are `circle` or `rect`
  - a `size` for `circle`
  - `height` and `width` for `rect`
  - `loading: boolean` to decide whether to animate the background color or not
  - Default values have been added as fallbacks (`rx`, `height`, `width`, `loading`, `size`, `shape` and `fill`)
  
- I originally had `height` and `width` for `circle` as well, with `size` as a complimentary value. But i ended up getting rid of those since it is a circle.. Common usage will always have the same `height` and `width`


Links
---

- See the [Creating a placeholder loading Component in React Native using Animated]() post
- [MDN: rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)
- [MDN: circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
- [createAnimatedComponent](https://animationbook.codedaily.io/animated-create-animated-component/)
- [Animated](https://facebook.github.io/react-native/docs/animated.html)
