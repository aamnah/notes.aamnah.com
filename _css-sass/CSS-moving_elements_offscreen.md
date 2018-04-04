---
title: Moving elements off-screen with CSS and showing them on click
date: 2017-10-03
category: CSS
---

### tl;dr

- Use `transform` combined with `addEventListener()` (click handlers)
- `transforms` let you move things out of visible viewport
- `addEventListener()` let's you show whatever you have moved off-screen when a button/link is clicked

To have it hidden by default

```css
.foo {
  transform: translateX(100%); /* will hide to the right */
  transform: translateX(-100%); /* will hide to the left */
}
```
To show it

```css
.foo .is-visible {
  transform: translateX(0); /* will put it back in place */
}
```

The `.is-visible` class here determine the styles for when the element should be shown on screen. 

You can use JavaScript to add a class (e.g. `.is-visible`)  whenever the icon/link to show the element is clicked (e.g. `.Sidebar-trigger`)

```js
<script>
	const sidebarTrigger = document.querySelector('.Sidebar-trigger'),
	 			    body = document.getElementsByTagName('body')[0];
	
	sidebarTrigger.addEventListener('click', toggleSidebar);

	function toggleSidebar(event) {
		event.preventDefault();
		body.classList.toggle('.is-visible');
    }
</script>
```

#### Adding an overlay
An overlay over your main content and below the now-visible element (let's say e.g. a cart) can give a nice 3D feel. You'd accomplish that with `z-index`

```scss
.main {
  z-index: 1 // this goes below both the overlay and the cart
}
.overlay {
  z-index: 2 // this goes above the main content and below the cart
}
.cart {
  z-index: 3 // this goes on top
}
```