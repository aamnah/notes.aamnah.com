---
title: Regex in Python
slug: regex_in_python
date: 2015-02-22
---
    
Here is a sample file **names.txt** that we'll be using regex on.

    Love, Kenneth   kenneth@teamtreehouse.com   (555) 555-5555  Teacher, Treehouse  @kennethlove
    McFarland, Dave dave@teamtreehouse.com  (555) 555-5554  Teacher, Treehouse
    Arthur, King    king_arthur@camelot.co.uk       King, Camelot
    Österberg, Sven-Erik    governor@norrbotten.co.se       Governor, Norrbotten    @sverik
    , Tim   tim@killerrabbit.com        Enchanter, Killer Rabbit Cave
    Carson, Ryan    ryan@teamtreehouse.com  (555) 555-5543  CEO, Treehouse  @ryancarson
    Doctor, The doctor+companion@tardis.co.uk       Time Lord, Gallifrey
    Exampleson, Example me@example.com  555-555-5552    Example, Example Co.    @example
    Obama, Barack   president.44@us.gov 555 555-5551    President, United States of America @potus44
    Chalkley, Andrew    andrew@teamtreehouse.com    (555) 555-5553  Teacher, Treehouse  @chalkers
    Vader, Darth    darth-vader@empire.gov  (555) 555-4444  Sith Lord, Galactic Empire  @darthvader
    Fernández de la Vega Sanz, María Teresa mtfvs@spain.gov     First Deputy Prime Minister, Spanish Govt.

Let's create our python script file called **regex.py**. First things first, you need to import the **r**egex **e**xpressions module.

    import re

Then we'll open the names.txt file, read it and close it.

    names_file = open("names.txt")
    data = names_file.read()
    names_file.close()

Now we have all the content of the names.txt file in a variable called `data` which we can now use to run regex on.

Let's try searching for a name

    print(re.match(r'Love', data))
    print(re.search(r'Kenneth', data))


`r'string'` - A raw string that makes writing regular expressions easier.

`re.match(pattern, text, flags)` - Tries to match a pattern against the beginning of the text.

`re.search(pattern, text, flags)` - Tries to match a pattern anywhere in the text. Returns the first match.

`.match` searches for a pattern in the beginning of $data and `.search` searches for a pattern anywhere in $data.

The result we would get would be something like this:

    <_sre.SRE_Match object; span=(0, 4), match='Love'>
    <_sre.SRE_Match object; span=(6, 13), match='Kenneth'> 

You can make the script easier to read by defining your search patterns as variables.

    first_name = r'Love'
    last_name = r'Kenneth'
    print(re.match(first_name, data))
    print(re.search(last_name, data)) 

Escape Characters
---

| Character | Meaning                                           |
|-----------|---------------------------------------------------|
| \w        | any Unicode word character                        |
| \W        | anything that isn't a Unicode character           |
| \s        | matches whitespace (spaces, tabs, newlines etc.)  |
| \S        | anything that isn't whitespace                    |
| \d        | matches any number 0-9                            |
| \D        | matches anything that isn't a number              |
| \b        | matches word boundries (edges of the word)        | 
| \B        | matches anything that isn't the edge of a word    | 

`\w` means any Unicode character including numbers, letters both uppercase and lowercase, special characters etc.

Let's try searching for a phone number now, say (555) 555-5555

    number_pattern = r'\(\d\d\d\) \d\d\d-\d\d\d\d'
    print(re.search(number_pattern, data))

notice that we have escaped the parantheses `( )`. By default, parantheses mean a regex group. To use parantheses in a match pattern, you need to escape them. The output would be:

    <_sre.SRE_Match object; span=(40, 54), match='(555) 555-5555'>    


Counts
---
Instead of doing `\d\d\d\d\d` for 5 numbers, we can specify counts like `{3}` for somethnig that occurs 3 times and `{,3}` for something that occurs 0 to 3 times.

| Counts | Meaning                                    |
|--------|--------------------------------------------|
| {3}    | something that occurs **exactly 3** times  |
| {,3}   | something that occurs **0 to 3** times     |
| {3,}   | something that occurs **3 or more** times  |
| {3,5}  | something that occurs **3, 4 or 5** times  |
| ?      | something that occurs **0 or 1** times     |
| *      | something that occurs **at least 0** times (there is no upper bound) |
| +      | something that occurs **at least once** (there is no upper bound)    |
