# Async/Await Functions
declare an async function that will allow us to wait for other functions. we can only await inside an async function, and we can only await a promise.

Async/await is an ES2016 (ES7) feature, so you'll need a transpiler. See http://babeljs.io/docs/plugins/preset-latest/

```bash
npm i -g babel-cli
```
add a minimal `.babelrc` inside your project dir

```json
{
  "presets": [
    "latest"
  ]
}
```

and install packages (locally, inside your project folder)

```bash
npm install --save-dev babel-preset-latest
```

Once setup, you can run from CLI 

```bash
babel-node script.js
```

We are going to use the JS builtin `.fetch` API for our example, but others like axios can also be used, any lib that returns a promise.

```bash
npm i -D node-fetch
```

```javascript
import fetch form 'node-fetch'
// Async/Await Example

const service = {
	getUsers: () => fetch('https://jsonplaceholder.typicode.com/users'),
	getPosts: () => fetch('https://jsonplaceholder.typicode.com/posts')
}

// Await a promise to fulfill and do something
async function Fetchy() {
	try {
		const users = await service.getUsers()
		const posts = await service.getPosts()

		console.log('Example: Fetchy', {
			Users: users.data,
			Posts: posts.data
		})

	} catch(err) {
		console.warn('ERROR', err)
	}
}

Fetchy()

// Await all promises to fulfill
async function FetchyAll() {
	try	{
		const values = await Promise.all([ service.getUsers(), service.getPosts() ])
		console.info('Example: FetchyAll', values.map(v => v.data))

	} catch(err) {
		console.warn(err)
	}
}

FetchyAll()
```

You can only await on async functions from within other async functions.

Links
---
- [YouTube: Javascript ES7 - Async / Await in under 3 minutes](https://www.youtube.com/watch?v=COKdtOgopWQ)
- [YouTube: TempleCoding: Async await with JavaScript](https://www.youtube.com/watch?v=hKXf04ENvLM)
- [YouTube: tagtree: ES2016 - async await](https://www.youtube.com/watch?v=D0fn9sW93ko)
- [Pluralsight: Wes Higbee: Modern Asynchronous JavaScript](https://www.pluralsight.com/courses/javascript-asynchronous-modern)