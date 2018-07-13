---
title: Web scraping in Python to look up stock prices
date: 2014-08-26
---

Objective
---
We are going to scrape the FT.com website for current stock prices for selected stocks. You'll learn:

- scraping web page
- fetching price/quote (with regex)
- presenting results
- error handling
- coloring the output


Step 1: Taking input, Opening URL and Grabbing data
---

```python
# import 'urllib2' to open the url and 'sys' so we could take input from console
import urllib2, sys

# take input from the console and save it as 'symbol'
symbol = sys.argv[1]

# we are using FT.com for the stock pricing
url = 'http://markets.ft.com/research/markets/Tearsheets/Summary?s='

# open the URL, and save the output in a variable called 'content'
content = urllib2.urlopen(url+symbol)
# read the 'content' and save it in a variable called 'data'
data = content.read()

print(data)
```

We are going to import **urllib2** and **sys** so we could a) open a url and b) take input from console.
Next, we'll take input (i.e the stock symbol we want to look up) from console and save it in a variable called **symbol**. *sys.argv[1]* basically means the first argument that was given to the system. 
The URL we are going to scrape is from the Financial Times website. We'll save that url in a variable aptly names **url**.
Then, we are going to open that URL and save it's content in a variable called **content**. We'll then read that content and save whatever it read in a variable called **data**.

Lastly, we'll print that data to make sure everything is working. At this point it'll output a whole lot of jumbled up code in your terminal (which is basically what you'll get if you 'View Page Source' in the browser)


Step 2: Making sense of the data, extracting what we want and presenting the results
---
So you have ALL the data on the page now.. What we really want is just the latest stock price. Say hello to Regex! Regex (aka Regular Expressions) let's you define an expression and look up that expression in a whole lot of data to get what you want. For a layman, it is the equivalent of doing Ctrl+F in the browser but way more powerful and complex.

But first, we need to know what we are looking for. To do that, i'm going to save the data in a text file, do a search for the price and check for something unique that represents that price so i can look for it every time with the regex i write.

#### save the data to a file
Use the `>>` redirection operator in the shell to redirect the results (output) of whatever we get after running *stock_portfolio.py* and save that in a text file called *output.txt* You need to run the following commadn in the Terminal (console).

	python stock_portfolio.py >> output.txt


#### searching for a unique identifier
Now open that output in your favorite code editor. The reason for opening it in a code editor is so that i can view it with syntax highlighting, makes it easier to make sense of the file and look for what we want. Start with searching (ctrl+F) for the exact stock price. Then look for code before and after that stock price that makes it unique.

For example, i looked up the stock APL, i know the stock price was 593.76 at the time i extracted the data so i searched for '593.76' in the output. That gave me the position in the file where the latest stock price is mentioned. Then i looked for unique identifiers before and after the price and found that `_last_lastPrice" data-stream-feed="rmds_streamer">` was always mentioned exactly before the latest price and it was only used for the price and nothing else. So, i used that to base my regular expression on.

#### adding regex  and getting the price

To be able to use regular expressions in our script, we'll import the **re** library.

```python
import urllib2, sys, re

symbol = sys.argv[1]

url = 'http://markets.ft.com/research/markets/Tearsheets/Summary?s='
content = urllib2.urlopen(url+symbol)
data = content.read()

# Regex
# 'm' is for match, it is frequently used to represent return of a match
m = re.search('_last_lastPrice" data-stream-feed="rmds_streamer">(\d*[.]\d*)', data)
# we are searching for the latest stock price (\d*[.]\d*) placed after a specific span tag, in whatever is stored in 'data'.

# if we have a match, then quote is equal to the first group we looked up. the () represent a group in regex.
quote = m.group(1)

print(quote)
```


We are running the **search** method on the **re** module to search for `_last_lastPrice" data-stream-feed="rmds_streamer">(\d*[.]\d*)` where `(\d*[.]\d*)` represents the format of the price 593.76 ( **\d** is for digits and ***** means all ). Look for this price, it comes immidiately after `_last_lastPrice" data-stream-feed="rmds_streamer">` and look for it in the **data** variable. Save the result of the search in a variable called **m**.

Use [RegExr](http://www.regexr.com/) to find exact match in text and learn about writing regex queries. Getting it right may take you a few tries if you are new to regex. It took me three to get the expression right. This might be the most difficult part of this whole tutorial if you have never used regex before.

At this point the result of `print(m)` would be `<_sre.SRE_Match object at 0x1086c1990>` which basically means that it searched and a match exists. Now we save the result of the match in a variable called **quote**.


And finally, print that quote. `print(quote)`

```
593.76
```    

Error handling
---
What if the symbol given has a typo, or is incorrect or doesn't exist? Python by defualt will stop running the script after the error and if you had any other symbols after the error they won't show since the script stopped running.

To counter that, we are going to add an if/else statement so that if the value exists, it is shown and if not, it shows an error message. In case of an error, the script will show an error message and keep running.

```python
if m:
    # if we have a match, then quote is equal to the first group we looked up.
    quote = m.group(1)
else:
    quote = symbol + ' is not a correct symbol or it does not exist'

print(quote)
```

Getting prices for multiple stocks in one go (Looping)
---

instead of taking input from the system, i'm going to save the multiple symbols i want to look up in a list. that way i won't have to type the symbols every time i want to look up the prices.

```python
# SYMBOLS TO LOOK FOR:
symbol_list = ['APL', 'PPL', 'HUBC', 'FFC']

# for every Symbol in the list, look it up and print the result
for symbol in symbol_list:
    url = 'http://markets.ft.com/research/markets/Tearsheets/Summary?s='+symbol+':KAR'
    # (FT.com adds :KAR at the end of symbols in KSE)
    # i'm permanently adding it to the URL because i'm only going to be looking up KSE stocks
    # and i am too lazy to add :KAR with every symbol manually
    content = urllib2.urlopen(url).read()

    m = re.search('_last_lastPrice" data-stream-feed="rmds_streamer">(\d*[.]\d*)', content)
    if m:
        quote = m.group(1)
        print(symbol + ' ' + quote)
    else:
        quote = symbol + " is not a correct symbol or it doesn't exist"
        print(quote)
    ```


Final script
---

```python
import urllib2, re
# urllib2 is required to open the url
# re is required for regular expression (regex)

# SYMBOLS TO LOOK FOR:
symbol_list = ['APL', 'PPL', 'HUBCO', 'EFERT']

# for every Symbol in the list, look it up and print the result
for symbol in symbol_list:
    url = 'http://markets.ft.com/research/markets/Tearsheets/Summary?s='+symbol+':KAR'
    # (FT.com adds :KAR at the end of symbols in KSE)
    content = urllib2.urlopen(url).read()

    m = re.search('_last_lastPrice" data-stream-feed="rmds_streamer">(\d*[.]\d*)', content)
    if m:
        quote = m.group(1)
        print(symbol + ' ' + quote)
    else:
        quote = symbol + ' is not a correct symbol or it doesn't exist'
        print(quote)
```


Error handling
---

- when provided symbol isn't correct or it doesn't exist 


Links
---
[RegExr](http://www.regexr.com/)
[Print in terminal with colors using Python?](http://stackoverflow.com/questions/287871/print-in-terminal-with-colors-using-python)
