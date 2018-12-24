---

title: Recursion
slug: recursion-in-programming
date: 2016-12-26
---

# Recursion
A recursive function is a function which calls itself.

Here's how it goes: beginning recursion -> recursive loop of repeating a task -> until we hit our base case.

> a function being defined is applied within its own definition.  While this apparently defines an infinite number of instances (function values), it is often done in such a way that no loop or infinite chain of references can occur.

> Recursion is the process a procedure goes through when one of the steps of the procedure involves invoking the procedure itself. 

Notes
---
- like `while` loops but much cleaner
- self-referential definitions
- Recursion vs. Iteration: Iteration explicitly uses repetition structures to achieve results. Recursion on the other hand repeats through function calls
- a _base case_ is used to stop recursion 

There are 4 distinct pieces of a recursive function:


1. **Repeated task**: this is the function task you want to run on each function invocation
2. **Base case**: this is how we stop recursion! when the base case condition is met, recursion stops. it's very important you stop a recursive function, otherwise it'll keep recurring infinitely
3. **Recursion**: this is where we run the function again
4. **Beginning recursion**: this is where we kick things off!



Links
---
- [Understanding recursion (Javascript example)](http://kiranrao.azurewebsites.net/understanding-recursion-javascript-example/)
- [Codecademy: Recursion in JavaScript](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
- https://en.wikipedia.org/wiki/Recursion
- https://www.cs.umd.edu/class/fall2002/cmsc214/Tutorial/recursion.html
- https://www.youtube.com/watch?v=t4MSwiqfLaY

