---
title: Basic intro to GraphQL
date: 2018-11-29
---

### Why GraphQL?

#### Single Endpoint
GraphQL saves bandwidth by decreasing the amount of HTTP rquests that need to be made. For example, to build a user's profile, you'd have to hit the `/user/<id>` endpoint to get the user's name, the `/user/<id>/posts` endpoint to get the user's posts and the `/user/<id>/followers` endpoint to get a list of his followers. 3 HTTP requests to 3 different endpoints to build 1 profile.

With GraphQL you only have a *single endpoint*, and you can specify whatever information you need in that request. 

```json
// single endpoint

query {
  User(id: "45a87dgi") {
    name
    posts {
      title
    }
    followers(last: 3) {
      name
    }
  }
}
```

#### No over- and underfetching
You get only what you specified in your requests, nothing more, nothing less. With traditional REST requests, you get unnecessary stuff. For example, if you only want the user's name, hitting the `/user/<id>/` endpoint will send email address, phone number, date of birth and other details as well, which you didn't ask for and yu don't need. It's just extra work for the server and extra bandwidth consuming data.

#### Schema & Types
GraphQL has a strong type system to define capabilities of an API. All the Types that are exposed in the API are written down in a schema. It gives you a definite structure of data that is sent over the network. 



