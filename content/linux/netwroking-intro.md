---
title: Networking Intro
slug: linux-networking-basics
date: "2017-08-31"
---

https://www.youtube.com/watch?v=hfUtHodJdWs

- `cat /etc/services`

#### TCP and UDP
- TCP is reliable, resends the message if it fails
- UDP is unreliable

#### Ports and Permissions

- Systems can only listen to ports below **1024** as root (i.e. they require `sudo`)



#### Servers
- Often time servers are described as systems that listen to incoming connections
- Any computer can be a server


#### netcat
- netcat `nc` allows you to setup tcp and udp connections and servers
- with netcat you can speak tcp directly
- the communication is bi-directional (the messages flow both ways)

```bash
# sudo apt install netcat
nc -l 5000 # listen on port 5000
nc -lp 5000 # listen on port 5000
```

from another session, you can now send messages to port 5000

```bash
nc localhost 5000
```

You can now type messages in each session and see them from the other session

#### http
- plain-text protocol
- all that you need is a program that speaks tcp

#### http verbs

HTTP requests begin with a VERB. Some things each VERB is used for:

- GET - fetch a document
- POST - submit a form
- HEAD - fetch metadata about a document
- PUT upload a file

There are more (DELETE, OPTIONS etc.)

#### http headers
Headers have a key followed by a colon `:` followed by a value. (Like JS objects, minus the comma at the end)

```
key: value
```


```bash
$ nc google.com 80
GET / HTTP/1.0
Host: google.com
```

Make sure to hit `return` twice after `Host: google.com`. 

You'll get an http response back (header and HTML payload)
