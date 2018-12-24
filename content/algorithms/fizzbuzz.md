---
title: Fizz Buzz
date: 2018-12-06
---

- A function that takes in a parameter as number, let's call it `num`
- It will log out to the console every number from 1 to `num`
- For each number, if the number is divisable by 3, it'll output the word `Fizz` instead of the number.
- For each number, if the number is divisable by 5, it'll output the word `Buzz` instead of the number.
- For each number, if the number is divisable by both 3 and 5, it'll output the word `FizzBuzz` instead of the number.

# Print all numbers from 1 till `num`

Using a `for` loop

```js
// print all numbers from 1 till `num`
for (i = 1; i <= num; i++) {
  console.info(i)
}
```

# Solution

```js
function fizzbuzz (num) {
  // print all numbers from 1 till `num`
  for (i = 1; i <= num; i++) {

    // if number divisible by both 3 and 5, print FizzBuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.info(`FizzBuzz`)
    }

    // if number divisible by 3, print Fizz
    else if (i % 3 === 0) {
      console.info(`Fizz`)
    }
    
    // if number divisible by 5, print Buzz
    else if (i % 5 === 0) {
      console.info(`Buzz`)
    }

    // if not divisible by 3 or 5, just print the number
    else {
      console.info(i)
    }
  }
}

fizzbuzz(39)
```

We know that a number that is both divisibleby 3 and 5 is also divisible by 15. So

```js
if ((i % 3 === 0) && (i % 5 === 0))
```

is the same as 

```js
if (i % 15 === 0)
```
