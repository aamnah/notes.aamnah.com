---
title: Intro to Templating with Pug (previously known as Jade)
permalink: templating-with-jade-pug-nodejs
ctime: 2017-09-02
mtime: 2017-09-03
---

- Pug is a templating engine for Node.js
- Hierarchy is defined with indentation
- Pug let's you use JS inside the templates. You can loop and use logic. You can also do mixins and advanced templating
- Pug is white-space sensitive. The pipe `|` character is used for [whitespace control](https://pugjs.org/language/plain-text.html#whitespace-control) For example, if you want to start your content on a new line, it'll treat the first word as a tag. So you use `|` at the beginning to avoid that.  A dot `.` is also used

```jade
doctype html
html(lang="en")
	head
		title= pageTitle
		script(type='text/javascript').
			if (foo) bar(1 + 5)
	
	//- This comment will only show inside the template, will NOt be rendered with HTML
	// This comment will be rendered in HTML

	body
		h1.title you just rendered a Pug template!
		#container.col
			- const youAreUsingPug = true //- Locally defined varaible

			if youAreUsingPug
				p You are amazing!
			else
				p Looks like you don't used Pug. Get on it!
			p.
				Pug is a terse and simple templating language with a 
				strong focus on performance and powerful features. Here is some #[strong bold text] and here's some #[em italic text].

			- const name = "Jake". toUpperCase(); //- Locally defined variable with some more JS

			p
			| You can have local variables as well as have data passed down via the render function. For example, my name is: #{name}

			p #{name} has a cat named #[strong #{cat}]
```

#### Getting started

```bash
npm i -S pug pug-cli
```

Usage in Express

```javascript
/*
Set Pug as your view engine
*/
const app = require('express')
// app.set('views', location_for_your_views_dir)
app.set('views', path.join(__dirname, 'views')) // define views dir
app.set('view engine', 'pug') // define view engine for .render()
```

```javascript
/*
Rendering a Pug template
*/
const router = express.Router()
router.get('/', (request, response) => {
  response.render('hello') // a template file in views dir, no need for file extension
})
```

```javascript
/*
Sample Pug template
*/ 
div.container
  h1.title You just rendered a Pug template!
```

- For divs, you don't need to explicitly say it's a div, just mentioning the divs and classes will do since it'll assume by default that the block is a div (i.e. `div.container` and `.container` are the same)

#### classes and IDs

```jade
.container
  h1.title This is an H1 heading with a class of `.title` inside a `div.container`
  span#attention This is a span with the ID `#attention`
    p.copy.class.anotherclass This is a p tag inside the span tag with multiple classes
```

#### attributes and values

- attributes go in parantheses `()`

Here's a div.container containing an image

```jade
.container
  img(src="dog.jpeg" alt="Dog")
```

You can of course assign both classes and attributes like so

```jade
img.dog(src="dog.jpeg" alt="Dog")
```

Here is an input field with attributes specified on multiple lines, works just fine

```jade
input(
  type='checkbox'
  name='agreement'
  checked
)
```

#### comments

- `//` will output in markup
- `//-` will be hidden in HTML markup, is for use within Pug templates only
 
#### strong and em text

- You'll use what's called _Tag Interpolation_
- `#[strong word]` and `#[em word]` is the syntax

```jade
p #{name} has a cat named #[strong #{cat}]
```

```jade
p.
  This is a very long and boring paragraph that spans multiple lines.
  Suddenly there is a #[strong strongly worded phrase] that cannot be
  #[em ignored].
p.
  And here's an example of an interpolated tag with an attribute:
  #[q(lang="es") ¡Hola Mundo!]
```


### Passing data to your templates

- Data is passed as the second argument when you're rendering your template with the `render()` function (the first argument is the template file name).
- `#{}` is used to _interpolate_ variables inside templates

```javascript
router.get('/', (request, response) => {
  response.render('hello', {
    name: 'Aamnah',
    cat: 'whiskers'
  })
})
```

```javascript
router.get('/', (request, response) => {
  response.render('hello', {
    name: 'Aamnah',
    cat: request.query.cat // make it dynamic, pass the cat's name as a URL query
  })
})
```

```jade
p #{name} has a cat named #{cat}
```

### Declaring variables inside templates

- start the line with a `-`

```jade
- const city = "Lahore".toUpperCase();

p I live in #{city} //- I live in LAHORE
```

### Putting variables inside attributes

- You use a JS template literal, ES6 style

```jade
img.dog(src="dog.jpg" alt="Dog `${dog}`")
```

### Blocks
- Blocks are sections that can be filled in by other templates
- You both define and overwrite a block with the `block` keyword


```jade
body
	block header
	  header.top
	    nav.main

	.content
	  block content
```

### extending layout

```jade
extends layout

block content
  p This is some content
```


Links
---

- [Github: Pug](https://github.com/pugjs/pug)
- [Pug Docs: Getting Started](https://pugjs.org/api/getting-started.html)