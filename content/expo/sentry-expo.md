---
title: Integrating Sentry with Expo
date: 2019-04-04
---

```bash
npm i sentry-expo --save
```

Create an [API auth token](https://sentry.io/api/). Must have `project:write`

app.json

```json
"hooks": {
  "postPublish": [
    {
      "file": "sentry-expo/upload-sourcemaps",
      "config": {
        "organization": "your organization's short name here",
        "project": "your project name here",
        "authToken": "your auth token here"
      }
    }
  ]
}
```

App.js

```js
import Sentry from 'sentry-expo';

// Remove this once Sentry is correctly setup.
Sentry.enableInExpoDevelopment = true;

Sentry.config('your Public DSN goes here').install();
```



Links
---

- https://docs.expo.io/versions/latest/guides/using-sentry/