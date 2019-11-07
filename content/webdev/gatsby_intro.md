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
gatsby build # create a production build
gatsby serve # serve the production build on a local HTML server
```

```bash
# get help
gatsby --help
gatsby COMMAND_NAME --help
```


### Directory Structure

```
src/
    - pages
```

All your pages are in the `src/pages` directory

### Linking between pages
There's a builtin `Link` component

```js
import Link from 'gatsby-link'
```

```js
<Link to="/page-3/">Go to page 3</Link>
```

The link is going to the page located at `src/pages/page-3.js`. The slashes in `/page-3/` are not necessary, the link will still work without them

### Adding Markdown content

```bash
# to read markdown files from a directory
npm install --save gatsby-source-filesystem

# to transform Markdown content to HTML and convert frontmatter
npm install --save gatsby-transformer-remark
```

add the conifg

```js
plugins: [
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`, // where would this be used? is this significant? does this need to match the name of the path dir?
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-transformer-remark`,
]

```

Links
--
- [Gatsby Docs](https://www.gatsbyjs.org/docs/)
- [egghead: Build a Blog with React and Markdown using Gatsby](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby)
- [Gatsby Docs: Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)