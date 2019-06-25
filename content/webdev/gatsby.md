---
title: Gatsby in a day
date: 2018-10-21
---

## tl;dr

```bash
yarn global add gatsby@latest gatsby-cli@latest
gatsby new mygatsby git@github.com:gatsbyjs/gatsby-starter-hello-world.git # MVC
#gatsby new mygatsby git@github.com:gatsbyjs/gatsby-starter-default.git # Starter
cd mygatsby
gatsby develop
```

### install

```bash
# npm install --global gatsby@next gatsby-cli@next
yarn global add gatsby@next gatsby-cli@next
gatsby -v
```

- This will install the latest (release candidate) of Gatsby. 
- The `next` in `@next` is a `dist-tag`. See all tags for a package with `npm view foo dist-tags` or `npm dist-tag ls`

```bash
npm view gatsby dist-tags
```

```js
{ latest: '2.0.28',
  next: '2.0.0-rc.28',
  canary: '2.0.0-alpha.80a21f04',
  'latest-v1': '1.9.279'}

```

### basic site

```bash
# install Gatsby demo site
# gatsby new mygatsby https://github.com/gatsbyjs/gatsby-starter-hello-world # HTTPS
gatsby new mygatsby git@github.com:gatsbyjs/gatsby-starter-hello-world.git # SSH

cd mygatsby
gatsby develop
```

- `mygatsby` is the name of the site
- You sould get a live server at `http://localhost:8000`

### plugins and config

```bash
# from within your gatsby site directory
yarn add gatsby-source-filesystem@next gatsby-transformer-remark@next
```

- `gatsby-config.js` must be at the root of your project (not in `src`)

```js
// ./gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `My Blog`, // notice the backticks
    description: `This is my blog yo!`
  },
  plugins: [
    `gatsby-transformer-remark`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}

// Values can be in commas too, works with both commas and backticks.
// Backticks is convention i guess
// If you're having errors, this might help: : https://rusl.io/blog/backticks/
```

- Values can be in commas too, works with both commas and backticks. Backticks is Gatsby convention i guess
- Restart your gastby server after creating a config file for the changes to take effect

### GraphQL

When you run `gatsby develop` it also runs a GraphiQL instance in the browser which you can use to build your queries

```
http://localhost:8000/___graphql
```

- Documentation explorer goes through your schema and can let you know what kind of stuff you cna access

```js
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
      } 
    }
  }
}
```

The above query will give you the title and date for all markdown posts.

## Creating pages

- Just create components in the `src/pages` folder and export them as default

```jsx
import React from 'react'

const PageOne = () => (
  <div>
    <h1>This is page 1</h1>
  </div>
)

export default PageOne
```


## Linking to pages

```js
import React from 'react'
import Link from 'gatsby-link'


const PageOne = () => (
  <div>
    <h1>This is page 1</h1>
    <Link to='/'>Go back to homepage</Link>
  </div>
)

export default PageOne
```


- You need to import `Link` from `gatsby-link` and then you can use the `<Link>` component to add your links.
- The value for `to` depends on page name


## Plugins


## Using Sass

- install Sass plugins and then restart the Gatsby server

```bash
# npm i node-sass gatsby-plugin-sass
yarn add node-sass gatsby-plugin-sass
```

- add and miport `.scss` files

```scss
// index.scss

$color_bg: salmon;

body {
  background: $color_bg;  
}
```

```jsx
// index.js
import './index.scss'
```

## Styled Components
https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/?=

```bash
# npm i gatsby-plugin-styled-components styled-components babel-plugin-styled-components
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

## Building a blog

We need a `source` plugin to get the data in (e.g. files in a folder), we need a `transform` plugin to convert the data (e.g. Markdown to HTML)

```bash
# npm i gatsby-source-filesystem gatsby-transformer-remark
yarn add gatsby-source-filesystem gatsby-transformer-remark
```


Links
---

- [Build a Blog with React and Markdown using Gatsby](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby)
- [LevelUpTuts: GatsbyJS Tutorials](https://www.youtube.com/watch?v=b2H7fWhQcdE&list=PLLnpHn493BHHfoINKLELxDch3uJlSapxg)