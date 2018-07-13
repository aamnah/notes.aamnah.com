---
title: Python Basics
slug: python_basics
date: 2015-02-22
---
    
Print `print()`
---
Print is pretty much the same as `echo` in Bash and PHP and `puts` in Ruby

```python
name = "Aamnah Akram"
print(name)    
```

Input `input()`
---
Function to get information from a user. Always gets a string, even if the content is a number.

```python
input("How are you today?")
```

Variables
---
Variables in Python can not start with a number

```python
name = "Aamnah"
```

Save input as variable

```python
name = input("What is your name? ")
print(name)
```

Conditionals (if, else)
---

```python
if name == "Aamnah":
    print(name + " is awesome!")
else:
    print(name + " is OK i guess. " + name " is fine!")
```

Your if statement will work with or without the parentheses `( )` but since 2010, the [style guide](https://www.python.org/dev/peps/pep-0008/) recommends using them. So `if (name == "Aamnah"):` is preferred over `if name == "Aamnah":`

### Combining multiple conditions with `or` and `and`

Here is an example

```python
#!/bin/python

answer = raw_input("Are you a dumbo? YES or NO ")

if (answer == 'yes') or (answer == 'y'):
    print("Of course you are! You're very honest. ")

else:
    print("Lier Lier! ")

```

will output '**Of course you are! You're very honest.**' if you answer with _y_ **or** _yes_. If you answer with anything else, it'll say **Lier Lier!**


String Concatenation
---

```python
name = input("What's your name? ")
age = input("What's your age? ")
print(name + " is " + age " years old.")
```

String Formatting / Replacement
---

```python
name = input("What's your name? ")
if name == "Aamnah":
    print("{} is awesome".format(name))
else:
    print("{} is OK i guess. {} is fine!".format(name, name))
```

Another example

```python
name = "Aamnah"
age = 25
city = "Dubai"
print("{} is {} years old. She lives in {}".format(name, age, city))
```

Basic Numbers
---
When you divide two numeric values, you always get a float as result. Floats work _mostly_ how they are supposed to but occasionally you'll find some odd problems. For example

```python
0.1 + 0.1 + 0.1 - 0.3
```

should result 0 but gives 5.551115123125783e-17 instead. 


### Make numbers from strings

```python
int('55')
float('2.897')
```

When you take input in, it always takes it as a string. So you'd have to convert it to an int or float first in order to do any kind of calculation on it.

### Convert floats to integers and vice versa
    
```python
int('2.2')
float('2')
```

### Round floats to whole numbers `round()`

`round()` rounds a float to the nearest whole number. `round(2.4)` will become 2 and `round(3.9)` will become 4.

Exceptions
---

```python
user_string = "What's your word? "
user_num = "What's your number? "

try:
    our_num = int(user_num)
except:
    our_num = float(user_num)

if not '.' in user_num:
    print(user_string[our_num]
else:
    ratio = round(len(user_string)*our_num)
    print(user_string[ratio])

```

Containment `in`, `not in`
---
Check if something is in or not in something else. For example, `'a' in 'Aamnah'` would return `True`. `'b' not in 'Aamnah'` would return `True`. `'x' in 'Aamnah'` would return `False`

Lists
---

### Check List's length `len()`

```python
>>> fruits = ['Apple', 'Bannana', 'Mango', 'Cherries', 'Guava']
>>> len(fruits)
5
```

### Make Lists from String `list()`

```python
>>> list('a')
['a']
```

```python
>>> list('hello')
['h', 'e', 'l', 'l', 'o']
```

### Check if value in List

```python
>>> fruits = ['Apple', 'Bannana', 'Mango', 'Cherries', 'Guava']
>>> 'Apple' in fruits
True
```

```python
>>> fruits = ['Apple', 'Bannana', 'Mango', 'Cherries', 'Guava']
>>> 'Orange' in fruits
False
```

### Append to list `.append()`
We can only add lists to other lists. `.append()` add to the end of a list.

Splitting Strings `.split()`
---
Calling `.split()` on a string breaks the string up on whitespaces. If we had Returns or Tabs, they'd also break.

```python
>>> sentence = "My name is Aamnah. I am curious!"
>>> sentence.split()
['My', 'name', 'is', 'Aamnah.', 'I', 'am', 'curious!']
```

Join Strings `.join()`
---

```python
>>> sentence = "My name is Aamnah. I am curious!"
>>> sentence.split()
['My', 'name', 'is', 'Aamnah.', 'I', 'am', 'curious!']
>>> sentence_list = sentence.split()
>>> ' '.join(sentence_list)
'My name is Aamnah. I am curious!'
```

You can determine what is used to join the list. In the example above, we used spaces. We can also use `_` or `-` or something else.

```python
>>> '_'.join(sentence_list)
'My_name_is_Aamnah._I_am_curious!'
```

Everything we are joining **has to be a string**. We can't join numbers.

Loops
---

`while` loops

```python
count = 0
while (count < 9):
    print 'The count is:', count
    count = count + 1

print "Good bye!"
```

`for` loops 

```python
>>> my_list = [1, 2, 3, 4]
>>>  num  my_list:
...     print(num)
1
2
3
4    
```

See [<i class="fa fa-link"> More examples</i>](https://wiki.python.org/moin/ForLoop)

### While vs. For

A `for` loop can only iterate (loop) "over" collections of things. A `while` loop can do any kind of iteration (looping) you want. However, `while` loops are harder to get right and you normally can get many things done with `for` loops. [<i class="fa fa-link"></i>](http://learnpythonthehardway.org/book/ex33.html) 

### `else` in Loops
- If the `else` statement is used with a `for` loop, the else statement is executed when the loop has exhausted iterating the list.

- If the `else` statement is used with a `while` loop, the else statement is executed when the condition becomes false. [<i class="fa fa-link"></i>](http://www.tutorialspoint.com/python/python_while_loop.htm)

```python
#!/usr/bin/python

count = 0
while count < 5:
    print count, " is  less than 5"
    count = count + 1
else:
    print count, " is not less than 5"
```

When the above code is executed, it produces the following result:

    0 is less than 5
    1 is less than 5
    2 is less than 5
    3 is less than 5
    4 is less than 5
    5 is not less than 5

### `break` and `continue`
`break` makes Python stop whatever loop it is in, which works really well with infinite loops. `continue` let's us move on to the next step in the loop.

```python
while True
    if new_item == 'END':
        break
    shopping_list.append(new_item)
    print("Item added")
    continue
```

Opening files `open()`
---
`open()` - Opens a file in Python. This won't contain the content of the file, it just points to it in memory.

```python
open("name.txt")
```

You can also specify encoding

```python
open("name.txt" encoding="utf-8")
```

For ease of use, save the file in a varibale

```python
names_file = open("name.txt" encoding="utf-8")
```

By `open()` you don't get the actual contents of the file, you just get a pointer to the file. To get the contents, you would use `read()`

Reading files `read()`
---
`read()` gets the contents of a file for you. For ease of use, you can save the content in a variable.

```python    
data = names_file.read()
```

Closing files `close()`
---
Once you have opened the file and read it, you should close it.

```python    
names_file.close()
```

Closing the file prevents it from taking up memory.

Modules (aka Libraries) and Packages
---
There are loads of built-in modules available for Python. You can find a list [here](https://docs.python.org/2/library/). You use the keyword `import` to bring outside libraries into your code.


You load a library/module using `import`

```python    
import urllib2
import json
import re
```

You can specify multiple modules in one import statement

```python    
import urllib2, json, re
```

Functions 
---
Functions follow the same naming rules as variables. You can't start a function name with a number and you can't put any hyphens or special characters in the name. We use the keyword `def` for defining every function, like so

```python
>>> def say_hello():
...    print("Hello!")
...
>>> say_hello()
Hello!
```

Taking arguments is also easy

```python
>>> def say_hello(name):
...     print("Hello " + name + "!")
... 
>>> say_hello("Amna")
Hello Amna!
```

Getting back data using `return` for when you want to get data back from a function and not just print it.

```python
>>> def square(num):
...     return num*num
... 
>>> square(99)
9801    
```

Here is an example of a shopping list with a function to add list items, another function to show help, and a function to show list.

```python
shopping_list = []

def show_help():
    print("What should we pick up at the store? ")
    print("Enter DONE to stop. Enter HELP for this help. Enter SHOW to see your current list")

def add_to_list(item):
    shopping_list.append(item)
    print("Added! List has {} items".format(len(shopping_list)))

def show_list():
    print("Here is your list:")
    for item in shopping_list:
    print(item)

show_help()

while True:
    new_item = raw.input("> ")
    if new_item == 'DONE':
    break

    elif new_item == 'HELP':
    show_help()
    continue

    elif new_item == 'SHOW':
    show_list()
    continue

    add_to_list(new_item)
    continue

show_list()
```

Collections
---

Collections are variable types that collect different types of data together. They are also called `iterables` because you iterate or loop through them. 

References
---
[Treehouse](http://referrals.trhou.se/aamnah)
