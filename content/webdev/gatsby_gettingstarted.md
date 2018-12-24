---
title: Getting Started with Gatsby
date: 2018-07-06
---

install Gatsby

```bash
npm install --global gatsby-cli

# OR

yarn global add gatsby-cli
```

create a site

```bash
gatsby new gatsby-site
```

start a live server

```bash
gatsby develop
```

### Directory Structure

- pages

### Linking between pages
There's a builtin `Link` component

```js
import Link from 'gatsby-link'
```

```js
<Link to="/page-3/">Go to page 3</Link>
```

The link is going to the page located at `src/pages/page-3.js`. The slashes in `/page-3/` are not necessary, the link will still work without them

Links
--
- [Gatsby Docs](https://www.gatsbyjs.org/docs/)