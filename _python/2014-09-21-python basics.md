---
layout: post
title: Intro to Python for newbie programmers
---

## video notes

these notes accompany this video: [A hands-on introduction to Python for beginning programmers](https://www.youtube.com/watch?v=nWoSEXHVl7c)

- You know it's a **string** because of the quotes `" "`.
- You know it's a **function** because of the parenthesis `( )`.
- You know it's a **list** because of the square brackets `[ ]`. 

## Data Types:
- Integers (1, 2, 9, 10)
- Floats (1.89, 2.75, 8.99)
- Boolean (True, False)


## Comparisons:
- `==`
- `!=`
- `>`
- `<`
- `<=`
- `>=`

## Containments:
- in
- not in

`"h" in "hello"` would return `True`. `"z" not in "hello"` would return `True`. `"z" in "Fantastic"` would return `False`. 
    

## Choices:
- if
- elif
- else
- and


	{% highlight python %}

	sister_age = 15
    brother_age = 12
    
    if sister_age > brother_age:
    	print "sister is older"
    elif sister_age == brother_age:
    	print "same age!"
    else:
    	print "brother is older"
    
    {% endhighlight %}

Another example

    {% highlight python %}
    
    temperature = 70
    if temperature > 60 and temperature < 75:
    	print "just Right!"
    else:
    	print "Too extreme"
    
    {% endhighlight %}
## Do nothing:
- The keyword for 'do nothing' is `pass` in Python. If you have an if statement and you want to do nothing you would use the keyword pass.

## Lists:
A list contains comma seperated elements in square brackets.

    {% highlight python %}
	my_list = ["a", "b", "c"]
    
    {% endhighlight %}

Lists are ordered and index starts from zero.

- To check the **length** of a list: `len(my_list)`
- To **append** a new item to the end of the list: `my_list.append("d")`
- To **replace** list items: `my_list[0] = "z"`
- To get the **index** (place) of an item: `my_list.index("c")`
- To check **containment** (whether an item exists in the list): `"a" in my_list`

#### Slicing and dicing lists

To get the **first item** in the list: `my_list[0]`
To get the **last item** in the list: `my_list[-1]`
To get the **second last item** in the list: `my_list[-2]`
To get a **range** of items: 
- `my_list[0:2]` Take 0th upto but not including the 2nd.
- `my_list[:3]` Take everything upto but not including 3rd.
- `my_list[3:]` Start at the 3rd and go till the end.
- `my_list[:]` makes a copy of the whole list. Start at the beginning, go till the end.

Strings are a lot like lists. You can do `len()` on a string as well as find index and splice and dice lists.

	my_string = "Bonjour la monde!"
    
`my_string[:3]` would output 'Bon'. `my_string[5:]` would output `ur la monde!`

Lists can have all kinds of data types. For example:

	{% highlight python%}
	list = ['Hola', 16, True, -.8 ]
    {% endhighlight %}
    
#### Sorting lists
`.sort()` will sort the list items from A-Z alphabetically and from Low to High numerically.

	{% highlight python%}
	names = ['Zelda', 'Ali', 'Ahmed', 'Zyad', 'Nina', 'Bob' ]
    names.sort()
    {% endhighlight %}

will change the order/sort of the list items like this:

    ['Ahmed', 'Ali', 'Bob', 'Nina', 'Zelda', 'Zyad']
    
Numbers can also be sorted:

	{% highlight python%}
	numbers = [3, -5, .6, 17000, 7]
	numbers.sort()
	numbers
	[-5, 0.6, 3, 7, 17000]
    {% endhighlight %}
    
- To find the maximum value in a list: `max(numbers)` will give you 17000.
- To find the minimum value in a list: `min(numbers)` will give you -5.

In general, if you think you can do something to a list of stuff, you probably can in Python. Google for it.

## Looping

For loops. For loops are when you loop over every element in the list, and do something for each element in the list.

The syntax is:

	{% highlight python%}
	for variable_name in list_name:
    	# do useful work
    {% endhighlight %}

You get to choose the variable name. It could be 'x' or 'name' or anything you want. For user friendlyness the variable_name is usually the singular form of the word when the list_name is the plural form of the word. 

For example, name in names:
	{% highlight python%}
	names = ['Ahmed', 'Ali', 'Bob', 'Nina', 'Zelda', 'Zyad']
	
    for name in names:
    	print name
    {% endhighlight %}
    
Another for loop with an if statement (condition):

	{% highlight python%}
	names = ['Ali', 'Bob', 'Ellen', 'Nina', 'Zelda', 'Zyad']
	
    for name in names:
    	# if the first letter of the name starts with a vowel
    	if name[0] in "AEIOU":
        	print name + " starts with a vowel."
    {% endhighlight %}
    
will output:

	Ali starts with a vowel.
	Ellen starts with a vowel.