# Loops

`while` loop runs while a condition is true (infinitely), `for` loop runs a certain number of times. To stop `while` loops you can use a `break` statement. (Or you need a statement that at some time evaluates to false so the loop could end). To keep track of how many times a loop has run, you start with a _counter_ variable at 0 and increment it every time the loop runs.

## While
while loops run when a condition is `true`. It's an infinte loop, meaning it keeps runing while the statement is true. to stop it form running, you need to use a `break` statement;

Example: exit loop when user enters _quit_

```javascript
var search;
while (true) {
	search = prompt('Do you wanna quit?');	
	if(search === 'quit') {
		break;
	}
}
```


### Do ... While

The `do` part will run as long as the `while` statement is true.

Do while loop is the same as while loop. The only difference is that it runs at least once, before getting to the point where it evaluates the `while` part.

```javascript
do {
    // something
} while ()

``` 

You can use do while loops where you want to run the same code until something is obtained, like a valid email address, or an answer

FYI: A `flag` is a variable that holds a true or false value.
## For
