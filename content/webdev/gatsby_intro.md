---
title: Getting started with Gatsby
date: 2018-05-09
lastmod: 2018-07-06
---
 
```bash
npm install --global gatsby-cli
# or
yarn global add gatsby-cli 
```

```bash
gatsby new . # create a new gatsby site in the current folder
# or
gatsby new gatsby-site # create a new site in a folder called `gatsby-site`
cd gatsby-site # move to the project directory to run gatsby commands like develop, serve and build
```

```bash
gatsby develop # run a hot-reloading server on http://localhost:8000
gatsby serve # serve the site on a local HTML server
gatsby build # build the site
```

```bash
# get help
gatsby --help
gatsby COMMAND_NAME --help
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