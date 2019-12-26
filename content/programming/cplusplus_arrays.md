---
title: Arrays in C++
date: 2019-12-15
---

## Initialiizing Arrays 

integer arrays

```c++
int c [ 10 ] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int c [] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; // automatically calculate the size of array
int c [] = { 0 } // initialize all of them with the value as 0
```

character arrays

```c++
char name [ 100 ] = { 'a', 'b', 'c', '0', '1'}; // single quotation = single character
char name [ 100 ] = "abc01"; // string = double quotation marks
char name [] = "Hello World"; // automatically calculate the size of array
```

C adds a null characetr `\0` at the end of a character array. This null character is used by C to figure out where the populated area of an array ends..

Size of a character array = elements inside an array + null character at the end of the array

So you have to make sure that the size of a character array should be _one greater_ then the number of items it is supposed to store. If you do not accomodate for the null character at the end of a character array, it will result in errors and side effects