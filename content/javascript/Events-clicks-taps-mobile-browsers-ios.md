---
title: Notes on handling clicks and taps on iOS devices and touch enabled mobile browsers
date: 2017-11-12

---

- Click handlers don't work as supposed to on touch enabled browsers. iOS Safari will not fire a click event if it doesn't consider the element clickable (more on that below), but will work as expected for all elements if you add an event handler for _touch_ events
- If you only added an event handler for the `click` event, it'll work on desktop screens but likely won't do anything or behave wonky on a mobile screen. (e.g. the event listener not firing or having to tap two times for it to work)
- Sometimes you have devices with both touch screens and physical keyboards (e.g. a Blackberry phone, or a touchscreen laptop), so you kinda need to always check for both clicks and taps on  websites

#### Safari and click handlers not working

iOS Safari will only trigger click events for elements that

- are deemed clickable (a link or an input. divs/spans are not considered clickable)
- have the CSS `cursor` property set to `pointer`
- have an `onclick` attribute (can be empty, doesn't matter)

It's a known browser *bug* for iOS Safari that has been around since 2010. It has been documented [here](https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html), [here](http://www.shdon.com/blog/2013/06/07/why-your-click-events-don-t-work-on-mobile-safari), [here](http://gravitydept.com/blog/js-click-event-bubbling-on-ios) and [here](https://www.html5rocks.com/en/mobile/touchandmouse/). Here is a [codepen demo](https://codepen.io/aamnah/full/GOmyXK/) of the issue.

Alternatively, you can **listen to touch events** instead of clicks. Preferably listen to both because we do have devices with both physical keyboards and touch screens. `touchstart`, `touchend` are two touch events. `mouseover` and `mouseout` are fallbacks for hovering and cursor movement.

iOS Safari translates taps to a regular click event. It fires `mouseover`, `mousemove`, `mousedown`, `mouseup`, and `click` in that order. These events all fire together as soon as the user *lifts* the finger [more on safari mouse events](http://sitr.us/2011/07/28/how-mobile-safari-emulates-mouse-events.html)

#### Touch Events
You can listen to four kinds of touch events

- `touchstart` fired when user makes contact with touch surface and a touch point is created
- `touchmove` fired when user moves a touch point along the touch surface
- `touchend` fired when touch point is removed from surface
- `touchcancel` fired when touch point has been disrupted (depends on the implementation, e.g. too many touch points created..)

`touchenter` and `touchleave` were proposed drafts that haven't been implemented

#### Preventing default behaviour
There is some browser specific stuff that can happen on touch events. For example:

 - Double-tap or pinch-to-zoom
 - Scrolling
 - Going to a link
 - Submitting a form

The solution to prevent all these defaults (and using your custom action) is `event.preventDefault()`



#### Handling multiple events
The thing with handling multiple events like `touchstart` and `mouseup` is that they'll fire twice in touch enabled browsers. 

In jQuery, you can use the `.on()` function that is capable of handling multiple events as well as event delegation

```js
$( "#dataTable tbody" ).on( "touchend click", "tr", function() {
  alert( $(this).text() );
});
```

- touch event should be handled before click event
- You can cancel only the default action with `.preventDefault()`
- `.preventDefault()` can also be used to [mark an event as handled](https://stackoverflow.com/a/25518757/890814)
- Returning `false` prevents the event from bubbling up
- Returning `false` from an event handler will automatically call `event.stopPropagation()` and `event.preventDefault()`. A `false` value can also be passed for the handler as a shorthand for `function(){ return false; }`

```js
$(this).on("touchstart click", function() {
  // Do the magic
  return false; // stop propagation, you've already handled it once
});
```

If the listener has already responded to either one of the events, it'll stop propagation.

In pure JavaScript, you can do something like below:

```html
<button onclick="startup()">Initialize</button>
```

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  log("initialized.");
}
```

#### `onclick` attributes vs. event listeners

While adding `onlclick` attributes to elements may make them clickable on iOS Safari and be considered an easy fix, it is recommended that you keep your JS and HTML separate.

Instead of making elements clickable by adding `cursor` values in CSS or `onclick` attributes in HTML, you can do it all in JS only by adding an event listener that handles clicks as well as taps. Touch events work in mobile Safari regardless of whether the element is clickable or not.

```js
// using jQuery and .on()
$('.button-group').on('mouseup touchstart', 'button.btn-wishlist', function (e) {
  let product = $(this).attr('data-product')
  wishlist.add(product);
  e.preventDefault();
});
```

Adding event listeners instead of using `onclick` is the preferred way. If you have separate files for HTML and JS, your code should be separate too. Separation of concerns is recommended. 

The added benefit of removing the onclick attributes from the buttons was the code becoming more DRY (Don't Repeat Yourself). Imagine you have a table with 100 cells and you want to do something when any of the cells is clicked. Are you seriously going to add 100 onclick attributes? With a single event handler you can handle clicks on all those cells (because: event delegation). 


#### Tap delays
Mobile browsers used to add a **300-350ms delay** between `touchend` and `click` and waited to see if it was going to be a double-tap or not, since double-tap was a gesture to zoom into text.  This has been removed. As of March 2016 and iOS 9.3, this delay is **gone** for **mobile-optimised** sites. What you do need to do is add a `<meta>` tag to the site's `<header>`.

```html
<meta name="viewport" content="width=device-width">
```
This sets the viewport width to the same as the device, and is generally a best-practice for mobile-optimised sites. If you are using or have used Bootstrap, this meta tag is usually included in the getting started code.
  
Links
---
- [Touch Event Handling in JavaScript](http://tutorials.jenkov.com/responsive-mobile-friendly-web-design/touch-events-in-javascript.html)
- [StackOverflow](https://stackoverflow.com/questions/7018919/how-to-bind-touchstart-and-click-events-but-not-respond-to-both)
- [Google Developers: 300ms tap delay, gone away](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)
- [jQuery: .on()](https://api.jquery.com/on/)
- [MDN: Using Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)
- [JavaScript Kit: Introduction to Touch events in JavaScript](http://www.javascriptkit.com/javatutors/touchevents.shtml)
- [Apple Developer: Handling Events](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html)
- [HTML5Rocks: Touch And Mouse](https://www.html5rocks.com/en/mobile/touchandmouse/)