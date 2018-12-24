---
title: Quick intro to CSS Animations
date: 2017-11-09
---

```css
animation-name: scaleUp; /* the name of the corresponding @keyframes rule */
animation-duration: 2s; /* time to complete one animation cycle */
animation-delay: 1s; /* when to start */
animation-timing-function: 2s; /* defines acceleration curves */
animation-iteration-count: 6; /* repeat animation this many times, default is 1, infinite is an option */
animation-direction: normal; /* should the animation play forwards, backwards or alternate back and forth?  this will change which keyframe plays first and which plays last */

animation-play-state: normal; /* pause and resume the animation - running, paused */

animation-fill-mode: none; /* choose to set CSS property values based on keyframes before/after an animation is played. default is none - none, forwards, backwards, both */


 /* shorthand 
 animation: name duration;
 */
animation: scaleUp 2s; /* shorthand */
```

---

To add an animation you need two things, an `animation-name` property and a `keyframes` rule

```css
.el {
  animation-name: scaleUp;
}

@keyframes scaleUp {
  
}
```



### @keyframes
Each keyframe specifies the values of CSS properties at specific moments of the animation. 

The moments can be specified in percentages, e.g. `0%` means start, `100%` means end. They can also be specified in `from` and `to`

```css
@keyframes scaleUp {
  0% {
    transform: scale(0);
  }
  
  100% {
    transform: scale(1);
  }
}
```

is the same as 

```css
@keyframes scaleUp {
  from {
    transform: scale(0);
  }
  
  to {
    transform: scale(1);
  }
}
```

You can of course define more than two keyframes

```css
@keyframes scaleUp {
  0%, 70% { /* same animations can be provided as comma separated list */
    transform: scale(0);
  }

  50% {
    transform: scale(2);
  }  
  
  100% {
    transform: scale(1);
  }
}`****`
```

### When is it triggered
By default an animation is triggered on browser refresh if you applied it a basic element (and not a state). 
If you want an animation to play when an element is hovered, you'll add the CSS property to the `:hover` state

```css
.el:hover {
  animation-name: scaleUp;
  animation-duration: 2s;
}
```


Links
---

- [MDN: Using CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [caniuse: CSS Animations](https://caniuse.com/#feat=css-animation)