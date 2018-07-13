---
title: Getting started with OpenCart API
date: 2017-11-01
---

OpenCart has a REST API that you (or third parties) can use to communicate with the system. You make calls to routes, it sends you back JSON. 

#### Some use cases
There are many things you can do with an API

- Build an iOS/Android app for your store
- Use a frontend framework like React 

#### Basics
- The location for files is: `catalog/controller/api`
- The URL route is: `api/controller/method`. For example, to add a product to cart, you'd call `api/cart/add`. If you don't specify the method, it means you're calling the `index()` function of the controller
- You need to be authenticated of course to be able to talk to the API. For that you go and create the account in _System > Users > API_, then use the account details to login (at `api/login`)


### Endpoints

As of OpenCart 3, you have the following API endpoints available

```
api
├── cart
├── coupon
├── currency
├── customer
├── login
├── order
├── payment
├── reward
├── shipping
└── voucher
```

```
api
├── cart
│   ├── add
│   ├── edit
│   ├── remove
│   └── products
├── coupon
├── currency
├── customer
├── login
├── order
│   ├── add
│   ├── edit
│   ├── delete
│   ├── info
│   └── history
├── payment
│   ├── address
│   ├── methods
│   └── method
├── reward
│   ├── maximum
│   └── available
├── shipping
│   ├── address
│   ├── methods
│   └── method
└── voucher
    └── add
```


Links
---
- [Using the New API Methods of OpenCart 2.x](https://isenselabs.com/posts/using-the-new-api-methods-of-opencart-2x)