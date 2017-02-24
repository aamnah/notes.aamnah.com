---
layout: post
title: Troubleshooting MongoDB on Mac
permalink: howto-troubleshoot-mongodb-mac
date: 2014-05-21 16:29:19.000000000 +05:00
type: post
published: true
status: publish
categories: []
tags:
- mongodb
---

- Create /data/db
- chmod -R 777 /data/db
- ulimit -n 1000

Links
---
- [source1](http://stackoverflow.com/questions/12612977/mongod-runs-but-only-outputs-all-output-going-to-path-and-thats-it)
- [source2](http://stackoverflow.com/questions/13420073/mongod-runs-but-mongo-returns-an-error)