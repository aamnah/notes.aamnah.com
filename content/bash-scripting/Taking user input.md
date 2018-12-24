---

title: Taking user input
slug: take-read-user-input
date: 2015-12-07
lastmod: 2017-03-13
---

You can `read` user input as a variable.

For example:

```bash
read name
```

will save what the user entered and save it as a variable called `name`.

You can ask a question first, like so:

```bash
echo "What's your name?"
read input
echo "Your name is: $input"
```

By default, it'll ask for input on a new line. You can **supress the new line** with `-n`

You can use `read` instead of `$1`. So instead of 

```bash
foo.sh Aamnah
echo "Your name is $1"
```

where you are passing my name as an argument, you can prompt me for it, like so:

```bash
foo.sh
echo -n "What's your name?"
read name
echo "Your name is $name"
```
    
