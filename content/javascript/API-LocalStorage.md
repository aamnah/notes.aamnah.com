---
title: LocalStorage API
date: 2016-11-27
---

# Local and Session Storage

There are two types of storage

- Local storage
- Session storage

Local storage let's you save up to 5mb of data. That data can be accessed by any other page on the same site. That data lasts between visits and even after the browser is closed

### Local vs. Session storage
Local storage items persist even when you restart the browser whereas session storage items are cleared when you quit the browser. With session storage, the data disappears when the browser window is closed.

### Common use cases
- Save recent searches
- Save simple non-secure entry data, such as a voting site
- Save login names/info (not passwords)
- Save preferences

### Dos and Don'ts
Things you **should NOT** save with local storage include unencrypted passwords, SSNs, birth dates or credit card numbers.

You **can NOT** store binary data like JPEG or a movie with local storage. It only stores key:value pairs, like JS Objects. Unlike JS Objects, the _value_ of a local storage property is _always a string_.

The browser loads local storage data **synchronously**. This means the browser can not do anything else while the data loads.

Check for **local storage support** before using it.

```javascript
const checkLocalStorage = () => {
	try {
		return 'localStorage in window && window['localStorage] !== null
   } catch (e) {
   	return false
   }
}

if ( checkLocalStorage() ) {
	// code goes here
}
```

### Setting, Getting and Removing items
There are 3 functions that let you set, retrieve and remove data for a specific domain and storage type (session or local.)

- `.setItem(prop, value)`
- `.getItem(prop)`
- `.removeItem(prop)`

Local storage properties can be dealt with like any other JS object

- `localStorage.setItem('color', 'green')` is the same as `localStorage.color = 'green'`
- `localStorage.getItem('color')` is the same as `localStorage.color`
- `localStorage.removeItem('color')` is the same as `delete localStorage.color`


Read more
---
- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Treehouse: Using Local Storage with JavaScript](https://teamtreehouse.com/library/using-local-storage-with-javascript)