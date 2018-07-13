---

title: 'Conditional Statements IF/ELIF/ELSE'
slug: conditional-statements-if-elif-else
date: 2015-12-07
lastmod: 2017-03-13
---

IF / ELSE
---

```bash
if [ condition ]
then
  # do something
else
  # do something else
fi
```

Be _very particular_ of the whitespace around `[` and `]`. It is `[ condition ]` and _not_ `[condition]` 

OR

```bash
if [ condition ]; then
  # do something
else
  # do something else
fi
```

where you can place `then` at the end of the same line as your `if` condition, separated by a semi-colon `;`.  

For example:

```bash
# Take user input
read input
    
# See if user provided twitter
if [ "$input" == "twitter.com" ]; then
  # show error
  echo "can not ping this!"
else
  # ping three times
  ping -c3 ${input}
fi
```

ELIF
---
ELIF is ELse IF.

```bash
# Take user input
read input
    
# See if user provided twitter
if [ $input == "twitter.com" ]; then
  # show error
  echo "can not ping this!"
elif [ $input == "google.com"  ]; then 
  echo "Why always Google? -_-"
else
  # ping three times
  ping -c3 ${input}
fi
```
