---
title: Using Gatsby with the WordPress API
date: 2019-09-20
---


### Install and setup

```bash
# install Gatsby
npm i -g gatsby-cli

# Disable sending usage stats to Gatsby, because i don't like sending stats even if anon
gatsby telemetry --disable

# Create new Gatsby project
gatsby new myProjectName && cd myProjectName

# install WordPress plugin
npm i gatsby-source-wordpress

# Open the project in VS Code
code .

# Start development server
gatsby develop
```


You can now view gatsby-starter-default in the browser.

```
http://localhost:8000/
```

View GraphiQL, an in-browser IDE, to explore your site's data and schema


```⠀
http://localhost:8000/___graphql
```

### Configure Gastby plugin

```js
module.exports = {
  // ...
  plugins: [
    // ...
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            // Your WordPress source.
            baseUrl: `demo.wp-api.org`,
            protocol: `https`,
            // Only fetches posts, tags and categories from the baseUrl.
            includedRoutes: ['**/posts', '**/tags', '**/categories'],
            // Not using ACF so putting it off.
            useACF: false
        }
    },
  ],
}
```

### Environment variables
`dotenv` is already a dependency of Gatsby so you don't need to install it. You can use it in `gatsby-config.js` or `gatsby-node.js` like so:

```js
// gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
```

```js
require("dotenv").config()

module.exports = {
	// ...
  auth: {
    jwt_user: process.env.JWT_USER,
    jwt_pass: process.env.JWT_PASSWORD,
  }
}
```


### Querying data with GraphQL

You need to use the `<StaticQuery>` component in order to use GraphQL inside a _component_ (as opposed to a _page_, for tyhat you use a page `query`). The main difference is that page queries can accept variables while StaticQuery does not.

The StaticQuery takes two 

```jsx
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Posts = ({ data }) => (
  /*
`query` from `graphql` only works at the page level
to use `graphql` inside components, you have to use the
<StaticQuery> component
*/
  <StaticQuery
    // The result of the query is automatically inserted into your React component on the data prop.
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
              content
              excerpt
              date
              modified
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Posts</h1>

        <ul>
          {data.allWordpressPost.edges.map(post => {
            return <li>{post.node.title}</li>
          })}
        </ul>
      </div>
    )}
  />
)

export default Posts

```


Links
---

- [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)
- [Blazing Fast WordPress Sites With Gatsby](https://scotch.io/tutorials/blazing-fast-wordpress-sites-with-gatsby)
- [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/)