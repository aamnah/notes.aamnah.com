Basics of C programming language

- Every C program has a `main()`. This is the starting point of execution after a program is loaded into memory
- Every statement must end with a `;`
- Comments start with `//`


### Data Types in C

- Data types determine how much memory/space is offered to the data
- Also, how the data is displayed
- _Declaration statements_ must have data type before the variable name e.g. `int score`
- Space in memory is reserved at the time of execution


  - `int` - 4 bytes (32 bits)
  - `short` -  
  - `long` - 
  - `float` real number
  - `double` big real number
  - `char` - used to store a _single_ character

### C vs C++

```c
#include <stdio.h>

int main() {
  printf("bonjour le monde!");
  return 0;
}
```


```c++
#include <iostream>
using namespace std;

int main() {
  printf("bonjour le monde!");
  return 0;
}
```

- `iostream` is a C++ library for input-output. The C equivalent would be `stdio.h`
- use `gcc` and `g++` to run you C and C++ code respectively


### Header files

- Allow you to use functionality from other files and modules


### Logical operators

- The `&&` operator has a higher precedence than the `||` operator.
- The `!` sign is used for _logical negation_

### Overflow conditions
_Overflow_ condition occurs when you are trying to save a value that can not be stored in the amount of memory it has been allocated. When such a condition occurs, it'll end up in:

- Run time error (undetected by the compiler)
- Extra bits will be wasted and only the amount that can be stored will be saved, discarding rest

### Flow diagram

- Diamond = decision
- Rectangle = process
- Line = flow

### while vs. do-while

- `while` is executed _zero_ or more times, meaning it may not even execute a single time if the condition is false.
- `do-while` is executed _one_ or more times, meaning it runs _at least once_.

For example, in guessing games, you know you're going to make at least one guess, and if the first one isn't right then continue making guesses..

- Basically, in `while` the condition is tested before the loop and in `do-while` the condition is tested after the loop

### for loop

```
for ( initialization condition ; continuation condition ; incrementing condition )
{
  statement(s);
}
```

### Functions
_Top-down designing_ mechanism is based on the principle of 'divide and conquer' i.e. we divide a big task into smaller tasks and then accomplish them.

Functions are of two types

- Funcs that `return` values (must return a valid data type, only one data type can be used)
- Funcs that don't return values (data type is `void`, may only display data to screen)

```
return-value-type function-name( argument-list )
{
  declarations and statements
}
```
- If no data type is specified for `return`, default is `int`
- Arguments passed to the function need to be a valid data type as well



Links
---

- [](https://www.youtube.com/watch?v=9RJTQmK0YPI)