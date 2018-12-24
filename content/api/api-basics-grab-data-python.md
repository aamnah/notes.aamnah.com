---

title: API Basics - Grabbing Data with Python
slug: api-basics-grab-data-python
date: 2014-08-29
tags: 
- python
---

- This is the accompanying code file for the video [Coding With Python :: Learn API Basics to Grab Data with Python](https://www.youtube.com/watch?v=pxofwuWTs7c).

- Check [this Google Books Developer link](https://developers.google.com/books/examples/linkIndivBooks) for some code samples.


- This whole article uses ISBNdb for URL searches. Open Library is also mentioned as an API source but not used in any of the code.

### APIs:
- [ISBNdb](http://isbndb.com/api/v2/docs/books)
- [Open Library](https://openlibrary.org/dev/docs/api/books)
- [Google Books API](https://developers.google.com/books/docs/v1/using)

Getting data in Terminal
---
ISBNdb: 

```bash
curl http://isbndb.com/api/v2/json/RK8FPFZU/book/0765350386
```

Open Library: 

```bash
curl 'http://openlibrary.org/api/books?bibkeys=ISBN:0201558025&jscmd=data&format=json'
```

### Output

For

```bash
curl http://isbndb.com/api/v2/json/RK8FPFZU/book/0765350386
```

```json
{
   "data" : [
      {
         "isbn10" : "0765350386",
         "title_long" : "",
         "notes" : "",
         "awards_text" : "",
         "subject_ids" : [],
         "isbn13" : "9780765350381",
         "urls_text" : "",
         "book_id" : "mistborn",
         "physical_description_text" : "672 pages",
         "summary" : "Brandon Sanderson, fantasy�s newest master tale spinner, author of the acclaimed debut Elantris, dares to turn a genre on its head by asking a simple question: What if the hero of prophecy fails? What kind of world results when the Dark Lord is in charge? The answer will be found in the Mistborn Trilogy, a saga of surprises and magical martial-arts action that begins in Mistborn.For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the �Sliver of Infinity,� reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler�s most hellish prison. Kelsier �snapped� and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark. Kelsier recruited the underworld�s elite, the smartest and most trustworthy allomancers, each of whom shares one of his many powers, and all of whom relish a high-stakes challenge. Only then does he reveal his ultimate dream, not just the greatest heist in history, but the downfall of the divine despot.But even with the best criminal crew ever assembled, Kel�s plan looks more like the ultimate long shot, until luck brings a ragged girl named Vin into his life. Like him, she�s a half-Skaa orphan, but she�s lived a much harsher life. Vin has learned to expect betrayal from everyone she meets, and gotten it. She will have to learn to trust, if Kel is to help her master powers of which she never dreamed.Readers of Elantris thought they'd discovered someone special in Brandon Sanderson. Mistborn proves they were right.",
         "dewey_normal" : "813",
         "publisher_name" : "Tor Fantasy",
         "edition_info" : "Mass Market Paperback; 2007-07-31",
         "language" : "",
         "lcc_number" : "",
         "publisher_text" : "Tor Fantasy",
         "publisher_id" : "tor_fantasy",
         "title" : "Mistborn",
         "title_latin" : "Mistborn",
         "marc_enc_level" : "~",
         "dewey_decimal" : "813",
         "author_data" : [
            {
               "name" : "Brandon Sanderson",
               "id" : "brandon_sanderson"
            }
         ]
      }
   ],
   "index_searched" : "isbn"
}
```


A very basic example code in Python
---

```python
#!/usr/bin/env python

import urllib2
import json

url = 'http://isbndb.com/api/v2/json/RK8FPFZU/book/0765350386'
obj = urllib2.urlopen(url)
response = json.load(obj)

for book in response['data']:
    print book['title']
    for author in response['data'][0]['author_data']: 
        print author['name']
    print book['physical_description_text']

```

#### Output

```
Mistborn
Brandon Sanderson
672 pages
```
    
Getting Data in Python
---
We will use `urllib2` to open the URL and `json` to parse the json data the URL provides.

```python
#!/usr/bin/env python

import urllib2
import json

# URL Structure for ISBNDB JSON API
# http://isbndb.com/api/v2/json/api_key/book/isbn

# ISBNDB_key = 'RK8FPFZU'
# isbn = '0743277465'

url = 'http://isbndb.com/api/v2/json/RK8FPFZU/book/0743277465'

obj = urllib2.urlopen(url)

response = json.load(obj)

print response
```

### Output

```json
{
   "index_searched" : "isbn",
   "data" : [
      {
         "lcc_number" : "GV1439",
         "marc_enc_level" : "7",
         "publisher_text" : "New York : Free Press, 2008.",
         "urls_text" : "",
         "book_id" : "the_art_of_learning_a04",
         "publisher_name" : "Free Press",
         "language" : "eng",
         "title_latin" : "art of learning",
         "awards_text" : "",
         "subject_ids" : [
            "entertainment_puzzles_games_board_games_chess",
            "health_mind_body_self_help_motivational",
            "health_mind_body_personal_health",
            "health_mind_body_psychology_counseling_by_topic_learning",
            "biographies_memoirs_memoirs",
            "waitzkin_josh",
            "chess_players_united_states_biography",
            "tai_chi",
            "learning",
            "meditation"
         ],
         "dewey_normal" : "613.7148",
         "author_data" : [
            {
               "id" : "josh_waitzkin",
               "name" : "Josh Waitzkin"
            }
         ],
         "title_long" : "The art of learning: an inner journey to optimal performance",
         "dewey_decimal" : "613.7/148",
         "summary" : "",
         "isbn10" : "0743277465",
         "isbn13" : "9780743277464",
         "physical_description_text" : "xxi, 265 p. : ill. ; 22 cm.",
         "notes" : "The foundation -- My second art -- Bringing it all together.",
         "edition_info" : "",
         "publisher_id" : "free_press",
         "title" : "The art of learning"
      }
   ]
}
```

Getting specific details
---

printing items from lists (iterating through lists)

```python
for book in response['data']:
    print book['title']
    for author in response['data'][0]['author_data']: 
        print author['name']
    print book['physical_description_text']
```

Be sure to read [this](http://stackoverflow.com/questions/10855827/how-to-loop-through-json-in-python) and [this](http://stackoverflow.com/questions/14089238/iterating-and-printing-json-objects-in-python) for iterating over 'lists in an object' like we have the 'author_data' list in the 'data' object.

For the purpose of this article i'm only getting the **title**, **author** and **number of pages**. You can edit the code to output as many details as you want from the data object.


Turning the whole thing into a function (search by ISBN)
---

````python
#!/usr/bin/env python

import urllib2
import json

isbndb_key = 'RK8FPFZU'

def isbn_search(query):
    api_key = isbndb_key
    url = 'http://isbndb.com/api/v2/json/' + api_key + '/book/'
    isbn = query
    # isbn = query.replace(' ', '%20') will replace any spaces with %20.
    # not needed in this url design/structure though so commented out
    final_url = url + query

    obj = urllib2.urlopen(final_url)
    response = json.load(obj)

    for book in response['data']:
        print book['title']
        for author in response['data'][0]['author_data']:
            print author['name']
        print book['physical_description_text']

````

### Output
For `isbn_search('0765350386')`

```
Mistborn
Brandon Sanderson
672 pages
```

For `isbn_search('0743277465')`

```
The art of learning
Josh Waitzkin
xxi, 265 p. : ill. ; 22 cm.
```

The pages are actually taken from the **physical_description_text** item, so it is okay for it to sometimes show other physical attributes in addition to the pages. If this bothers you, use the Open Library API that gives out **number_of_pages** insated of physical_description_text. The code is just an example.


Turning the whole thing into a function (search by Name)
---

```python
import urllib2
import json

ISBNDB_key = 'RK8FPFZU'

def name_search(query):
    api_key = ISBNDB_key
    url = 'http://isbndb.com/api/v2/json/' + api_key + '/book/'
    name = query.replace(' ', '_') #replace any spaces with _
    final_url = url + name
    obj = urllib2.urlopen(final_url)
    response = json.load(obj)

    for book in response['data']:
        print book['title']
        for author in response['data'][0]['author_data']:
            print author['name']
        print book['physical_description_text']

```

### Output

For `name_search('mistborn')`

```
Mistborn
Brandon Sanderson
672 pages
```

For `name_search('the girl who kicked the hornets nest')`

```
The Girl Who Kicked the Hornets' Nest
Stieg Larsson
576 pages
```


