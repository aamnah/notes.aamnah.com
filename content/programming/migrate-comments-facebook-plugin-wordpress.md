---
title: Migrating Facebook plugin comments to WordPress
date: 2019-09-02
---

- I already have extracted all the facebook plugin data and have them in a JavaScript file. 
- The site had about 4000 news pages where the Facebook comments plugin was used. Not all of them had comments
- The scraped file lists all pages regardless of whether it had comments or not. I only need the 70 or so entries where we have comments, i.e. the `comments` property is there.

### Extracting the comments and getting them in WordPress ready format

Following is the JavaScript code used to extract only the comments and get them in the right format to be exported in WordPress database, i.e. change their properties to have the column names in the `wp_comments` table.

FYI: You can import JSON data in a MySQL table. That's what we're gonna do.

You'll need `node` to run this code and it'll create a file called `comments.json` with the results

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
    let comments = object['og_object']['comments']['data'] // array of objects

    comments.map(item => {
      let commentEntry = {
        comment_author_email: 'info@mydomain.com', // required
        comment_author: item.from.name, // reuired
        comment_author_url: 'https://facebook.com/' + item.from.id, // create the URL so that it's the Facebook user's profile link
        comment_content: item.message, 
        comment_date: item.created_time,
        comment_date_gmt: item.created_time,
        comment_approved: 1, // default is 1
        comment_post_id: object.og_object.id // this you need to figure out, using the comment object's ID as placeholder for now
      }
      // console.info(commentEntry)
      mappedComments.push(commentEntry)
    })
  }
})
// console.info('Comments', mappedComments)

// Write the results (in JSON format) to a file
fs.writeFile('comments.json', JSON.stringify(mappedComments), err => {
  if (err) throw err
  console.info('File is created successsfully')
})
```

### Figuring out the Post IDs
The comments that you extract need to be associated with a post ID in order

If the ID was previously in the URL, you can use regex to get it from that. 

I had to figure out what the post ID (`comment_post_id`) was by looking up the post title in the WordPress database