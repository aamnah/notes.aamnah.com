---
layout: post
title: Get raw file data from Github API
permalink: github-raw-data-api
status: publish
tags:
- api
---

You can use the send an `Accept` hedaer with the conent-type you want with your http requests. Many APIs allow you to request the same resource in different content-types.

```javascript
// Content-Type: application/vnd.github.v3.raw
http -v get https://api.github.com/gitignore/Node Accept:application/vnd.github.v3.raw
```

Notes
---
- If you ask for an unsupported media/content type, you'll get a `415: Unsupported Media Type` error
- Response code 200s: success
- Response code 300s: location is elsewhere (or already in cache i.e. 307)


Links
---
- [Egghead.io: Examine HTTP Message Bodies](https://egghead.io/lessons/tools-examine-http-message-bodies)