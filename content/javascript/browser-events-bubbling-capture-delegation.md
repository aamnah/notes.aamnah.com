---
title: Event Capturing, Event Bubbling and Event Delegation
date: 2017-11-11
category: JS
tags:
  - concepts
---

- Bubbling and Capturing are _behaviours_, a way of propagating events to multiple handlers
- _Event propagation_ is the blanket term used for both event bubbling and event capturing. It is the process of calling all the listeners for the given event type.
- Bubbling, capturing and delegation are _not browser features_, they're all _models_ of dealing with events

## Event propagation
Event propagation is the process of calling all the listeners for the given event type. It is bi-directional, it first travels all the way down from the `window` to the `event.target` (capturing, i.e. moving down) and then travels back up (bubbling, i.e. going up)

## Event bubbling

Events travel?! In event bubbling, the event keeps travelling until it gets to the top most element in the tree. Events rise up like bubbles through the DOM tree

> What bubbling allows us to do is listen for events on ancestor elements, for example, if we set a click handler on the body, our callback will trigger whenever any of its children are clicked.
> [link](https://teamtreehouse.com/library/event-bubbling-and-delegation)

You don't need to worry much about *capturing*. It was standardized because of Netscape, and Netscape is dead.

## Bubbling vs. Capturing
_Bubbling_ is a bottom-to-top model (remember, bubbles go up), and _Capturing_ is a top-to-bottom model. Since they're both supported by the `addEventListener`, you can work either way. The event first makes it way downwards (capturing) and then moves back upwards (bubbling)

The event first travels down the element nodes and (assuming the ) travels back up

```html
<body>
  <header>
    <nav>
      <ul>
        <li><a>Link</a></li>
      </ul>
    </nav>
  </header>
</body>
```

In the structure above, a click on the `<a>` will not only generate a `click` event for the link, but for the the parent list item, the , all the way up to the `window` object. This is event bubbling, you are moving your way up in events, like a bubble

## Event delegation

> **Event delegation** is not a browser feature, but a popular technique built into libraries like jQuery
> [link](https://blog.meteor.com/browser-events-bubbling-capturing-and-delegation-14db28e924ae)

_Event delegation_ is a way of handling events. It is not the same as event bubbling.

> JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.
> [link](https://www.sitepoint.com/javascript-event-delegation-is-easier-than-you-think/)


- `event.target` is where the event actually occurred
- `event.currentTarget` is where the event is currently being handled

> Event delegation is the technique of attaching event handlers not to the elements you actually want to read out events from, but to a higher-level element.
> [link](https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html)

### Why event delegation?
- Event listeners are a potential cause of memory leaks and performance degradation. The more you have, the greater the risk

- Because you can take care of multiple events in one function instead of adding a function for each event. For example, you have a navigation menu that opens a different slide-out panel for each link. Let's say you have ten links in the menu, and you are listening to the `click` event on each. 

Now, if you don't use event delegation, you'll add ten event listener functions to cater to each.

In event delegation, event listener is added to an *enclosing element* instead of the actual element. For example, let's say your navigation menu is a `ul` that contains ten `li` with links inside each list item. You'd add the event listener to the `ul` that encloses all the list items on which you want to _actually_ want to run handlers.

Using event delegation, we'd add a single event listener to an enclosing element ()

---
With event delegation, we can add an event listener to a containing element and then use `event.target` to determine if an element inside the container was targetted

---

Links
---
- [Browser events: bubbling, capturing, and delegation](https://blog.meteor.com/browser-events-bubbling-capturing-and-delegation-14db28e924ae)
- [SitePoint: What Is Event Bubbling in JavaScript? Event Propagation Explained](https://www.sitepoint.com/event-bubbling-javascript/)
- [QuirksMode: Click event delegation on the iPhone](https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html)