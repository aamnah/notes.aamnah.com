---
title: Cookies and Mobile Apps (React Native)
date: 2019-05-29
---

tl;dr

- it's unstable and advised against

> When using HTML5 frameworks to build native/hybrid mobile apps, HTTP authentication with cookies doesn’t work because your .html files are usually sitting on the mobile device itself (so the local domain for the file won’t match the domain where your HTTP REST API is hosted; this would cause a CORS issue and so cookies will not be sent).

> With WebSockets, you don’t need to rely on cookies for authenticating each action independently. You only need to authenticate once for each connection. If you use a WebSocket framework like SocketCluster, then this happens automatically as part of the handshake (it will pick up the JWT from localStorage). This mitigates the risk of CSRF attacks because individual actions do not need to carry authentication information. Not having to send auth/session info with every request loosens your reliance on cookies—and getting the session ID or JWT from localStorage instead of cookies works better with mobile HTML5 frameworks like React Native, Ionic and Cordova.

## Links

- https://hackernoon.com/rest-over-websockets-instead-of-http-81b0f0632295
- [React Native Docs: Known Issues with `fetch` and cookie based authentication](https://stackoverflow.com/a/44192714)
- [github: react-native issues](https://github.com/facebook/react-native/issues/23185)
