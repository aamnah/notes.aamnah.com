---
title: Axios with asyn await in React
date: 2019-12-17
---

Normally, you can do an async/await axios request like so:

```js
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

In React, Promises or asnyc functions are not supported inside `useEffect`, you can only return a cleanup function. There will be a related error in the Console. The recommened approach is to define your async function inside the Effect and then call it immediately

So, this: 

```js
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setData(result.data);
  };
  fetchData();
}, []);
```

instead of this:

```js
useEffect(async () => {
  const result = await axios(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  setData(result.data);
})
```

In the following examples, the promise resolving happens with async/await.

GET

```js
let getUsers = async () => {
    let response = await axios.get("https://reqres.in/api/users?page=1");
    let { data } = response.data;
    this.setState({ users: data });
}
```

POST

```js
let getUsers = async () => {
    let response = await axios.post("https://reqres.in/api/users?page=1", { username: 'Aamnah'});
    let { data } = response.data;
    this.setState({ users: data });
}
```
