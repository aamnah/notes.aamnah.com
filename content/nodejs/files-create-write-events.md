---
title: Creating and writing to files in Node.js
date: 2019-09-02
status: draft
---

objectives:

- have an input area
- create a file and write to it

what we need to know:

- file system api `fs` 
- events api `events`

Example code which is getting some data from a file, converting it, and then saving it to another file:

```js
const data = require('./data')
const fs = require('fs')
const EventEmitter = require('events').EventEmitter
const fileEvents = new EventEmitter()

// console.info('All data', data)

let mappedComments = []

data.map(object => {
  // only get objects where there are comments
  if (object['og_object'].hasOwnProperty('comments')) {
    let comments = object['og_object']['comments']['data'] // array of objects, should be ~70 results

    comments.map(item => {
      let commentEntry = {
        comment_author_email: 'info@forcespenpals.co.uk',
        comment_author: item.from.name,
        comment_author_url: 'https://facebook.com/' + item.from.id,
        comment_content: item.message,
        comment_date: item.created_time,
        comment_date_gmt: item.created_time,
        comment_approved: 1,
        comment_post_title: object.title,
        comment_post_id: object.og_object.id,
        user_id: 2
      }
      // console.info(commentEntry)
      mappedComments.push(commentEntry)
    })
  }
})
// console.info('Comments', mappedComments)

// Write the results (in JSON format) to a file
// you need to JSON.stringify() the data you save. otherwise the file will have everything saved as [object][object]
fs.writeFile('comments.json', JSON.stringify(mappedComments), err => {
  if (err) throw err
  console.info('File is created successsfully')
})
```