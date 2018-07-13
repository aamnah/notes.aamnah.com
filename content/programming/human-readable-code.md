---
title: Writing Code for Humans to Read
description: Tips and notes on writing code that is easy to read and pleasant to look at
date: 2017-10-20
---

> Programs are meant to be read by humans and only incidentally for computers to execute. - Donald Knuth

- Write your code for humans, humans are the ones who'll read, maintain and improve it. Computers only get machine code, don't worry about it.
- Whitespace is amazing when done right
- Be consistent. Be consistent in your naming, in capitalization, in spacing, in indentation, in code style. Pick a style, and stick to it.
- Have a directory based README file, but only if it is necessary. Don't make a directory just for a README file, that's over-organizing it.
- Documentation to the code should live with the code (i.e. comments). Ideally, your code  should be self-documented
- Don't comment *how* (unless it's really complicated), focus on the *why*
- Abstraction can make things hard to understand, proceed with caution 

> You only write it once, you'll read it lots of times

- Don't add tongue twisters in your code

```php
// e.g.

class UrlFetcher {
  public static function fetchUrl() {
    // ...
  }
}

$response = UrlFetcher::fetchUrl($url); // read this out loud. 

// remember, some people subvocalize what they read..
```
- Write your code for _this_ application, not for future applications. You'll write new code in future because you'll be smarter. 

### If statements
- Always return what you're expecting last. Do the checks you need first and then don't nest any of the return values that you want to output
- Keep your intended return statement out of the if blocks. 
- By keeping the inteneded return statement out of the `if` blocks, you'll avoid code duplication. If the return statement is in the `if` blocks, you're probably repeating it inside the many if blocks for every successful check
- By keeping the expected return statement at last, you can do as many checks as you want returning null/ throw exceptions etc. before the return statement
- Checking things that are negative might just be a better approach. Check for negatives and error out, instead of checking for positives and returning every time

```php
// Don't do it like this
<?php

class User {
  public function fullName() {
    
    if ($this->firstName && $this->lastName) {
      return $this->firstName . ' ' . $this->lastName;
    }
    
    return null; // return null by default
  }
}
```

```php
// Do it like this, this is better
<?php

class User {
  public function fullName() {
    
    if (!$this->firstName || !$this->lastName) {
      return null; //return null if the firstName or lastName don't exist
    }
    
    return $this->firstName . ' ' . $this->lastName;
  }
}
```

### Writing un-nested code
Here's and example of code where you're uploading a file

```php
// This is MEH
// You have to keep a mental model of states (if inside of if and then that else)
<?php

if (isset($_POST['file'])) {

  if (in_array($fileExtension, $allowedExtensions)) {
  	// Upload file
  } else {
    return;
    // Error and redirect
  }
  
} else {
  return; 
  // Error and redirect
}

```

```php
// This is BETTER 
// Do the negatives first (cleaner, easier to read, easier to maintain)
<?php

if (!isset($_POST['file'])) {
  return;
  // Error and redirect
}

if (!in_array($fileExtension, $allowedExtensions)) {
    return;
    // Error and redirect
} 
  
// Upload the file!

```

Links
---

- [YouTube: Tom Hudson - Writing Readable Code](https://www.youtube.com/watch?v=OVf0xP4BLq0)
- [YouTube: Tips for cleaner code: Cleaning up IF statements](https://www.youtube.com/watch?v=ldqDpmMkXgw&t=227s)
- [CSS Wizardry: Writing Tidy Code](https://csswizardry.com/2017/05/writing-tidy-code/)
- [YouTube: JS Nuggets - Clean Code: Variables](https://www.youtube.com/watch?v=gVjs8Qtr35I&t=61s)