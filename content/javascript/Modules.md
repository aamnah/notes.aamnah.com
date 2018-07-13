---
title: Modules
category: JavaScript
date: 2016-11-27
---

### Why?
- to avoid cluttering the global namespace


### self-executing anonymous function
```javascript
!function() {
	function foo() {
		// blah
	};

foo();
}();

```