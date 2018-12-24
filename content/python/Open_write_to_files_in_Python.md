---
title: Opening and Writing to Files in Python
slug: opening_and_writing_to_files_in_python
tags: ['python', 'how-to', 'basics']
date: 2015-04-10
---

Our `bio.txt` contains

    Name: Aamnah
    Age: 26
    Location: Dubai
    Gender: Female

To open it in Python: 

```python
file = open('bio.txt')
```
    
The function `open()` can take two parameters, one is the path of the file    
`bio.txt` (required). The other is mode (optional) which specifies the mode in which the file is opened, for example `w+b`. The default mode is `r` which means open for reading in text mode. 

The `w` flag opens a file for writing only. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.

You can use `open()` with the `w` flag to create a new file or overwrite an existing one.

The file path could also be a URL.

Get it to read it line by line

```python
for line in file:
    print line    
```

This will output:

    Name: Aamnah

    Age: 26
    
    Location: Dubai

    Gender: Female

To remove the extra space at the end of the line, use the following code:
    
```python
for line in file:
    print(line, end = '')
```

The output now will be 
    
    Name: Aamnah
    Age: 26
    Location: Dubai
    Gender: Female

Writing to the open file
---

Once you have the file open, you can use any of the following commands to write to the file

- `write('stuff')` -- Writes "stuff" to the file.
- `close` -- Closes the file. Like File->Save.. in your editor.
- `read` -- Reads the contents of the file. You can assign the result to a variable.
- `readline` -- Reads just one line of a text file.
- `truncate` -- Empties the file. Watch out if you care about the file.

For example

```python
print "Opening the file..."
target = open('bio2.txt', 'w')

print "Emptying the file!"
target.truncate()

print "Writing to the file.."
target.write('URL: http://aamnah.com')
target.write('\n')
target.write('Skills: Web Developer')
target.write('\n')
target.write('Learning: Python')
target.write('\n')

print "Closing and saving the file."
target.close()  
```

You will now have a file called `bio2.txt` with your written data. Remember, the `w` flag in `open()` creates or overwrites a file.

[Example of writing to file with system input <i class="fa fa-link"></i>](http://learnpythonthehardway.org/book/ex16.html)

Getting file details
---
The open function creates a file _object_. You can get various information related to that object using the following attributes:

| Attribute   | Description                                       |
|-------------|---------------------------------------------------|
| `closed`    | Returns true if file is closed, false otherwise.  |
| `mode`      | Returns access mode with which file was opened.   |
| `name`      | Returns name of the file.                         |
| `softspace` | Returns false if space explicitly required with print, true otherwise. |

For example: 

```python
#!/usr/bin/python

# Open a file
file = open("bio.txt", "wb")
print "File name: ", file.name
print "Is the file open? : ", file.closed
print "Opening mode : ", file.mode
print "Softspace flag : ", file.softspace    
```

This would produce the following result:

    File name:  bio.txt
    Is the file open? :  False
    Opening mode :  wb
    Softspace flag :  0


Writing CSV files
---

```python
file = open("registrants.csv", "a") # create/open a file and append to it
writer = csv.writer(file)
writer.writerow((request.form["name"], request.form["dorm"])) # values here are coming from a Flask template
file.close()
```

- `w` writes and overwrites. it clobbers, meaning it'll keep creating new files over the last one.
- `a` appends to the file. meaning it'll add stuff to the end of the file you mention.
- `csv` module comes built-in with Python
- `writerow()` takes care of sanitizing input (eliminating commas and apostrophes and such)

Links
---

- [Learn Python the Hard Way - Exercise 16: Reading and Writing Files](http://learnpythonthehardway.org/book/ex16.html)
- [Python Files I/O](http://www.tutorialspoint.com/python/python_files_io.htm)
- [CS50 2016 - Week 9 - SQL](https://youtu.be/hporRfjFISo?t=10m22s) at 10:22 he takes 5 minutes explaining creating and writing CSV files in Python
