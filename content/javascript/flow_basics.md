---
title: Flow basics
date: 2019-04-02

---

```bash
yarn flow -- init

yarn global add flow-typed
# npm install --global flow-typed

# garb all the types for the things we have installed
flow-typed install

# run Flow on your project (opted-in files)
yarn flow
```

creates `.flowconfig`

```
/**
.flowconfig
*/

[ignore]

[include]

[libs]

[options]

```

- Having a `.flowconfig` is enough to acknowledge you're using Flow, even if it is empty
- Flow allows you to slowly include files in a mature project
- `flow-typed` is going to grab type definitions and add them o your project in an automated fashion
- Better errors, you get better errors!
- Flow can also be used as a replacement for `propTypes`

If you get Flow errors with `styled-components`

```
[ignore]
<PROJECT_ROOT>/node_modules/styled-components/*
```

- Upfront you have to spend a lot of time putting the types in place

- You add files to Flow by adding `// @flow` at the beginning of the file

```js
// @flow

import React, { Component } from 'react';
```

- Adding type annotations to your code is not valid javascript, so you'll need a Babel plugin to transform your annotated code to regular JS.
- the `react` preset for Babel includes flow annotation.


Links
---

- [FEM: Introducing Flow in a React project](https://frontendmasters.com/courses/react/introducing-flow/)
- [How to efficiently type your styled-components with Flow](https://medium.com/maxime-heckel/https-medium-com-maximeheckel-how-to-efficiently-type-your-styled-components-with-flow-f43930a0dd2b)