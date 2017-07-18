---
layout: post
title: Play sound/video when image/link is clicked
permalink: play-sound-video-image-click
ctime: 2015-10-29
---


[Demo](http://codepen.io/aamnah/pen/gazjYa?editors=100)

We need:

- a js _function_ for playing sound/video
- a reference to that js function in the _href_ tag of the image/link/video
- an audio/video file with a unique id

## JS

Basically, get the media file by _id_ and use `.play()` to play it.

```javascript
  function play(media) {
    document.getElementById(media).play();
  }
```


## HTML

The magic in using direct reference to js functions in the _href_ tag. Like so: `href="javascript:play('media')"`

```html
<!-- image --> 
<a href="javascript:play('dog')"><img src="img/dog.png"></img></a>
  
<!-- link -->
<a href="javascript:play('dog')">Dog</a>
  
<!-- audio file -->
<audio
    id="dog"
    src="media/dog.wav"
    preload="auto"
></audio>
```