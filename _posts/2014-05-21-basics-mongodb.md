---
layout: post
title: MongoDB Basics
date: 2014-05-21 16:24:07.000000000 +05:00
type: post
published: true
status: publish
categories:
- Cheatsheet
tags:
- commands
- mongodb

---
<h2>Basic Commands</h2>
<p><code>show dbs</code> Show databases<br />
<code>use dbName</code> Connect/Select database<br />
<code>use dbName</code> Create database (MongoDB doesn't actually create a db until we start storing documents, so although you now have the db bookmarks, it's not actually saved anywhere until we put some data in it. Same goes for collectons )<br />
<code>db</code> show the db you are using<br />
<code>doc</code> show the document content</p>
<h2>NoSQL Database  Terms</h2>
<table>
<thead>
<tr>
<th>MongoDB</th>
<th>MySQL</th>
</tr>
</thead>
<tbody>
<tr>
<td>Collections</td>
<td>Tables</td>
</tr>
<tr>
<td>Documents</td>
<td>Rows</td>
</tr>
<tr>
<td>Fields (key:value pairs)</td>
<td>Columns</td>
</tr>
</tbody>
</table>
<h2>Adding Data</h2>
<p>There are two methods. One uses <code>.insert()</code></p>
<pre><code>db.links.insert({ title: "Courses", url: "http://tutsplus.com", comment: "advanced programming video courses", tag: ["tutorials", "dev "], saved_on: new Date() });
</code></pre>
<p>and the other us saving an empty document and then adding data to it. e.g:</p>
<pre><code>var doc = {};
doc.title = '';
doc.url = '';
doc.comment = '';
doc.tags = '';
doc.saved_on: new Date; 
</code></pre>
<p>adding sub-objects inside of objects</p>
<pre><code>doc.meta = {}
doc.meta.browser = 'Google Chrome 31'
doc.meta.OS = 'Mac OS 10.9.2'
</code></pre>
<h2>Saving and Updating data</h2>
<p><code>db.links.save(doc)</code> save all data in the doc <em>collection</em> to the links <em>database</em><br />
<code>db.links.update()</code></p>
<h2>Methods</h2>
<p><code>.insert()</code> add data<br />
<code>.count()</code> show the number of collections/documents<br />
<code>.date()</code> shows the date the data was entered<br />
<code>.find()</code> find with no parameters given will just output all data, e.g: <code>db.links.find()</code></p>
<p><code>.save()</code><br />
<code>.update()</code><br />
<code>.forEach(printjson);</code>  print documents nicely formatted e.g: <code>db.links.find().forEach(printjson);</code><br />
<code>.getTimestap()</code> use this method on an _id to get the time the object was created.</p>
<h2>Object IDs</h2>
<p>This ** _id** or <strong>ObjectId</strong> object field is immutable and unique. You can't have two documents with the same _id</p>
<ul>
<li>12 byte value</li>
<li>BSON data type</li>
<li>based on the hostname of the machine, the prcess id of the server process, the time the record was saved and a random incrementing number.</li>
<li>since they are based on the time they are created, we can get the time an object was created by its ID. We don't need the created_at or saved_at fields in MongoDB because the ID already has that info.</li>
</ul>
