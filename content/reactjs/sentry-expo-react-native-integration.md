---
title: Integrating Sentry with a React Native app built using Expo
date: 2019-10-21
---

Install the package

```bash
npm i sentry-expo
```

Initialize Sentry as soon as possible before loading your React Native app

```js
/*
App.jsx or App.tsx
*/
import * as Sentry from 'sentry-expo'
import Constants from 'expo-constants'

Sentry.init({
  dsn: 'DSN link goes here',
  enableInExpoDevelopment: true, // disabled by default. if false, all your dev/local errors will be ignored and only app releases will report errors to Sentry, Sentry.captureException() will be no-op
  debug: true
})

if (!__DEV__) {
  // revisionId is not available in the manifest when running in development mode (using Expo CLI), defaulting to undefined.
  Sentry.setRelease(Constants.manifest.revisionId)
}
```

Now you can use Sentry anywhere in your app. Example usage: 

```js
Sentry.setTag('sampleTag', 'tag-value')
Sentry.setExtra('sampleExtra', 'extra-value')
Sentry.addBreadcrumb({ message: 'breadcrumb-message' })
Sentry.captureMessage('Salam Sentry!')
Sentry.captureException(new Error('Test Error from React Native'))
```

In order to be able to use source maps and get improved error tracking and monitoring, upload your source maps to Sentry. This can be easily done by adding a `postPublish` hook in `app.json`. 

```js
/*
app.json
*/

{
  "expo": {
    // ... your existing configuration

    "hooks": {
      "postPublish": [
        {
          "file": "sentry-expo/upload-sourcemaps",
          "config": {
            "organization": "my-organization",
            "project": "my-awesome-project",
            "authToken": "your auth token here",
            "url": "your sentry url here" // OPTIONAL- only necessary when self-hosting Sentry
          }
        }
      ]
    }
  }
}
```


Links
---

- [Expo Docs: Using Sentry](https://docs.expo.io/versions/v35.0.0/guides/using-sentry/)
- [Sentry Docs](https://docs.sentry.io/)
- [Sentry Docs: Source Maps](https://docs.sentry.io/platforms/javascript/#source-maps)