---
layout: post
title: MongoDB Basics
permalink: basics-mongodb
date: 2014-05-21 16:24:07.000000000 +05:00
type: post
published: true
status: publish
categories:
- Databases
tags:
- commands
- mongodb
- cheatsheet

---

### Basic Commands

- `show dbs` Show databases  
- `use dbName` Connect/Select database  
- `use dbName` Create database (MongoDB doesn't actually create a db until we start storing documents, so although you now have the db bookmarks, it's not actually saved anywhere until we put some data in it. Same goes for collectons )  
- `db` show the db you are using  
- `doc` show the document content

### NoSQL Database  Terms

| MongoDB                  | MySQL   |
|--------------------------|---------|
| Collections              | Tables  |
| Documents                | Rows    |
| Fields (key:value pairs) | Columns |

### Adding Data

There are two methods. One uses `.insert()`

```javascript
db.links.insert({ title: "Courses", url: "http://tutsplus.com", comment: "advanced programming video courses", tag: ["tutorials", "dev "], saved_on: new Date() });
```

and the other us saving an empty document and then adding data to it. e.g:

```javascript
var doc = {};
doc.title = '';
doc.url = '';
doc.comment = '';
doc.tags = '';
doc.saved_on = new Date; 
```

adding sub-objects inside of objects 

```javascript
doc.meta = {}
doc.meta.browser = 'Google Chrome 31'
doc.meta.OS = 'Mac OS 10.9.2'
```

### Saving and Updating data

- `db.links.save(doc)` save all data in the doc *collection* to the links *database*  
- `db.links.update()`  

### Methods

- `.insert()` add data  
- `.count()` show the number of collections/documents  
- `.date()` shows the date the data was entered  
- `.find()` find with no parameters given will just output all data, e.g: - `db.links.find()`
- `.save()`  
- `.update()`  
- `.forEach(printjson);`  print documents nicely formatted e.g: `db.links.find()- .forEach(printjson);`  
- `.getTimestap()` use this method on an _id to get the time the object was created.


### Object IDs

This `_id` or **ObjectId** object field is immutable and unique. You can't have two documents with the same `_id`

- 12 byte value
- BSON data type
- based on the hostname of the machine, the prcess id of the server process, the time the record was saved and a random incrementing number.
- since they are based on the time they are created, we can get the time an object was created by its ID. We don't need the created_at or saved_at fields in MongoDB because the ID already has that info.