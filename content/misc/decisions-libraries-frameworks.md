---
title: Decisions on libraries and framework
date: 2019-07-04
---

## Sass vs. styled-components
- [bundle size and load time](https://bundlephobia.com/result?p=styled-components@4.3.2)
- redux is **44.3kb** minified and **16.2kb** minified and gzipped. It'll take **0.54ms** to load on 2G EDGE connection and **324ms** to load on emerging 3G.

- Sass is supported out of the box with `create-react-app`
- Sass is mostly known, no learning curves
- Moving back to plain old CSS is easy
- If you use CSS variables in the app-wide CSS file, you don't have to import the variables file in all the other files
- Importing partials seems to be an issue to me at the moment. Do we import partials inside the component stylesheets? In every component?

- styled-components can take props
- styled-components are contained in the same file. No more opening the styles file to the side. No more creating separate files for every component
- will result in simpler folder structure as i won't have to create a folder for every component just so i could keep the files together. And i wouldn't have to name the component files inside the folder as `index.js` either, which makes differentiating between the tabs in code editor a nightmare, i have to hover on every file to see the path and know which component file is that particular `index.js` is. At any time i have 3-12 `index.js` files open

```bash
# folder structure with Sass files

components
├── Icon
│   ├── Icon.scss
│   └── index.js
├── List
│   ├── index.js
│   └── List.scss
├── ListItem
│   ├── index.js
│   └── ListItem.scss
├── NewsItem
│   ├── index.js
│   └── NewsItem.scss
└── Sidebar
    ├── index.js
    └── Sidebar.scss
```

```bash
# folder structure with styled-compnents

components
├── Icon.js
├── List.js
├── ListItem.js
├── NewsItem.js
└── Sidebar.js
```

UPDATE: See folder structure below, saving all components in one folder gets rid of the need to name every compnent fiel as `index.js`

## axios vs Fetch API
- [bundle size and load time](https://bundlephobia.com/result?p=redux@4.0.1)
- axios is **12.6kb** minified and **4.3kb** minified and gzipped. It'll take **144ms** to load on 2G EDGE connection and **86ms** to load on emerging 3G.
- The size and load time is minimal enough to warrant using it.

## redux vs. Context API and Hooks
- [bundle size and load time](https://bundlephobia.com/result?p=axios@0.19.0)
- redux is **7.1kb** minified and **2.6kb** minified and gzipped. It'll take **86ms** to load on 2G EDGE connection and **52ms** to load on emerging 3G.
- The size and load time is minimal enough to warrant using it.

- Redux separates the state stuff from the components and you end up with multiple files and folders. React Hooks will let you do that in one place

- with the `useState()` hook you can not see the state in the React Developer tools _in a way that you wnat_. 
- `useState()` does not do a shallow merge like `setState()` does, it wipes out the state that we had before. React recommends saving your state as separate variables so that updating one does not wipe the other. (Or you could write your own `mergeState` function)

```jsx
const mergeState = partialState => 
setState(prevState => ({
	...prevState, // takes new state being sent and merges with previous state
	...partialState
}))

<input onChange={e => mergeState({ text: e.target.value })}
```

## Folder structure

This is the folder structure we're following at the moment. Instead of creating separate folders for every component, we're saving both `.js` and `.scss` files with the folder component name as file name in one `components/` folder.

```bash
components/
├── Icon.js
├── Icon.scss
├── ListItem.js
├── ListItem.scss
├── List.js
├── List.scss
├── NewsItem.js
├── NewsItem.scss
├── Sidebar.js
└── Sidebar.scss
```

Read this for the a general recommendation on [folder structure](https://reactjs.org/docs/faq-structure.html) 