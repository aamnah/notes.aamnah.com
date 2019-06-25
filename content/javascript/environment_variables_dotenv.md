---
title: Using environment variables with .env
date: 2019-04-04

---

tl;dr

```bash
npm i -D dotenv
```

define vars in `.env` file

```bash
ACCESS_TOKEN=j1v7qstp59eodbn79tsp
CLEINT_KEY=wp2aksuvduasepd2edre2rd
CLIENT_SECRET=227tasgvdvqid2tedt2e
```

use vars in your code `app.js` file

add a `.env-sample` and commit that, `.gitignore` the actual `.env` file

```js
const connection = new API({
	api_token: process.env.ACCESS_TOKEN,
	client_key: process.env.CLEINT_KEY,
	client_secret: process.env.CLIENT_SECRET
})
```

```js
// .env
SECRET_KEY=SuperSecretKey90965443241
```

```js
require('dotenv').config() // require config
require('./../server/index') // entry point

console.info(process.env.SECRET_KEY);
```


Set env variables by passing them as an argument

```bash
# *nix
NODE_ENV=development node app.js
```

For Windows you need to use the `set` keyword

```bash
# windows
set NODE_ENV=development&& node app.js 
```

`cross-env` can be used for cross-platform env variables

```bash
npm insall cross-env --save-dev

npx cross-env NODE_ENV=development node app.js
npx cross-env NODE_ENV=development PORT=3000 node app.js
```

package.json

```json
"scripts": {
	"dev": "NODE_ENV=development PORT=3000 node app"
}
```

- `.js` is optional in `app.js`
- `"cross-env NODE_ENV=development PORT=3000 node app"` will run on any operating system

Sample `.env`

```bash
NODE_ENV=development
PORT=3000
HOST
```

```js
const {
	NODE_ENV, PORT, HOST
} = process.env

console.info(
	NODE_ENV, PORT, HOST
);
```

```bash
# Load env variables and pass them along as cofig vars in terminal
eval $(cat .env) node app.js

# make values available to current Shell
export $(cat .env) && node app.js
```


```js
require('dotenv').config() // by adding this one line you can now do `node app.js` and it'll have your vars

const {
	NODE_ENV, PORT, HOST
} = process.env

console.info(
	NODE_ENV, PORT, HOST
);
```

```bash
node app.js
```

Links
---

- https://www.youtube.com/watch?v=14zY-u9EBCU
- https://www.npmjs.com/package/dotenv