---
title: Environment Variables in React Native
date: 2019-12-18

---

Install `react-native-dotenv`

```bash
npm i react-native-dotenv
```

Add the preset in `babel.config.js`

```js
// babel.config.js

module.exports = {
  presets: [
    'babel-preset-expo', 
    'module:react-native-dotenv'
  ]
}
```

Define your environment variables in `.env`

```
API_USERNAME=XXX
API_PASSWORD=XXX
API_URL_AUTH=XXX
```

And now you can import and use them in your code 

```js
// App.js

import { API_USERNAME, API_PASSWORD, API_URL_AUTH } from 'react-native-dotenv'

  useEffect(() => {
    async function getToken() {
      try {
        const response = await axios.post(API_URL_AUTH, {
          username: API_USERNAME,
          password: API_PASSWORD
        })
        setToken(response.data.token)

      } catch (error) {
        error => console.error(error)
      }
    }
    getToken()
  }, [])
```