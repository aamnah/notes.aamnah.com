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