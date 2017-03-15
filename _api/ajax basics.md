--- 
layout: post
title: AJAX Basics
permalink: ajax-basics
description: how to make AJAX requests and receive response data
ctime: 2014-09-03
--- 

1. AJAX Concepts
2. Programming AJAX
3. jQuery and AJAX
4. AJAX and APIs


AJAX Concepts
---

## Intro
AJAX = **A**synchronous **J**avaScript **A**nd **X**ML

It lets you request info from web server, post data to a web server and update content on a web page with loading a new web page. It works with pretty much all major server side languages (PHP, JavaScript, Ruby, Python etc.). 

The whole process of sending data back and forth involves the client (browser) sending a **request** and the server sending back a **response**.

**JavaScript** is the language that makes all the AJAX stuff happen. You use JavaScript to send a request, JavaScript to process the response that comes back and again JavaScript to update your website based on that response.

**Asynchronous** refers to how the request is sent to the server. Asynchorous means that you don't stop doing everything when you send a request and wait for a response. If the server ever did send a response that is, sometimes they don't. Instead you keep mousing around the web page, your JavaScript program will keep running and only do something when the response comes back. You can send multiple AJAX requests without waiting for a response for every individual request.

X stands for **XML**. Originally, XML is the format the response should be sent in, but it is not the only format you can receive data in. As a matter of fact, it is not even the most common or preferred format any longer.

## How AJAX works
AJAX has been around a long time. Microsoft first introduced with IE5 in 1999. AJAX isn't really its official name. Technically it's called an **XMLHttpRequest object** or shortened to just **XHR object**.

Put simply, AJAX is the process of sending a request to a web server, receive a response back and then do something with that response.

What you send to the web server can be a simple request for a web page, a text file, a search sent to a database or a complete form full of information.

There are four major steps in

1. Create an XMLHTTP Request object
2. Define a callback function
3. Open a request
4. Send the request

AJAX requests only work through a web server. You can not just locally preview a file on your computer and expect your AJAX to work.

### A Simple AJAX Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>AJAX Example</title>
    <script>
    // STEP 1. Create an XMLHttpRequest object
    // the name of the variable could be anything you want
    // in our case we are calling it 'xhr'
    var xhr = new XMLHttpRequest();

    // STEP 2. Define a callback function
    xhr.onreadystatechange = function () {
      // check for readystate, 4 means done
      // if readyState is equal to 4 then
      if (xhr.readyState === 4) {
        // get <div id="ajax"></div> from the html page 
        // and place the data we receive (responseText) inside it
        document.getElementById('ajax').innerHTML = xhr.responseText;
      }
    };

    // STEP 3. Open a request
    // method = get, url = sidebar.html
    xhr.open('GET', 'sidebar.html');

    // STEP 4. Send the request
    // put the send request in a function called 'sendAJAX'
    // to use with the button #load
    function sendAJAX() {
      xhr.send();
      // make the button disappear after it's clicked
      document.getElementById('load').style.display = "none";
    }
    </script>
  </head>

  <body>
    <h1>Bring on the AJAX!</h1>
    <button id="load" onclick="sendAJAX()">Bring it!</button>
    <div id="ajax"></div>
  </body>

</html>
```

##### XMLHttpRequest
The `new XMLHttpRequest();` tells the browser to get ready to work with AJAX. You should create a new XMLHttpRequest object for every AJAX request that you want to send.

##### Callback Functiom
The callback function is the heart of your AJAX request. All the fun things you intednd on doing with AJAX, you define them in the callback function.

If you send multiple AJAX requests, you'll never know which request will be handled first. You can never tell in which order your AJAX callback will run.

To trigger the callback we use a special browser event. If you have programmed in javascript before, you should know all about events. An event is something that happens in the web bowser, an action that the user takes like clicking a button or  submitting a form. There are eventa for mouse clicking, key pressing, scrolling and even closing a window. AJAX has its own set of events.

`onreadystatechange` is trigerred whenever there is a chnage in the AJAX request, like opeing a new request, sending it or receiving a response. We are creating our callback to respond to that request. The XMLHttpRequest object keeps track of the state using a special property called `readyState`. This property contains a number to represent the current state of the request. When that number is `4`, it means that the request is done and the server has sent back a response.

#### GET vs. POST (HTTP Methods)
**GET** is for requesting resources (web page, image, css files etc.) Use GET when you want to "get" something from the server. With the GET method, all of the data is sent in the URL (query string). 

The GET method is not good for sensitive information like SSNs or passowrd etc. It'll show up in the browser history and show up in the server's log files. Also, there is only so much information you can out in a URL. For example, IE can only handle URLs that are a max of 2080 characters long. When you need to send lots of information, like a blog post, the GET method isn't good.

**POST** is for sending data (form data). Use POST when sending data that will store, delete or update information from a database.

POST method sends data separate from the URL in what is called the _body_ of the request.

#### Query Strings


#### AJAX Response Formats (XML and JSON)
**XML**

```xml
<music>
  <song>
    <title>Le Vie En Rose</title>
    <singer>Edith Piaf</singer>
    <language>French</language>
    <year>1947</year>
  </song>
</music>
```

Using XML with JavaScript is kinda cumbersome. You have to analyze/parse the XML then go through each of its _nodes_ to extract data from the tags. JSON on the other hand is easier to work with.

**JSON**

```json
{
  "music" : {
    "song" : {
      "title": "Le Vie En Rose",
      "singer": "Edith Piaf",
      "language": "French",
      "year": "1947"
    } 
  }  
}
```

### AJAX Limitations
- Same origin policy
    - Web proxy
    - JSONP (JSON with Padding)
    - CORS (Cross-Origin Resource Sharing)


#### JSON Objects vs. JavaScript Objects
JSON formatted data has extra requirements. In regular JavaScript objects, keys don't have to be quoted. However, valid JSON not only requires quotes around the property name, it requires **double quotes** around both keys and values. Single quotes won't work. Strings also require double quotes.

#### Parsing JSON
We use the `JSON.parse()` function.

```javascript
var employees = JSON.parse(xhr.responseText);
```

#### Looping through data

JavaScript:

```javascript
for (i = 0, i < employees.length, i++) {
  // do seomthing
}
```

`i++` is the same as `i += 1`. This loop will run once for each item in the array. Start with the first item (index of zero.)

jQuery:

```javascript
$.each()
```