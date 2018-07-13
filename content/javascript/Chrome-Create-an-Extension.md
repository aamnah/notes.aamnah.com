---
title: Notes on creating a Chrome extension
slug: create-chrome-extension
date: 2017-04-18
---

Needed

- `manifest.json` is required. It's kinda like `package.json` in Node. `manifest.json` has info about your extension
- The icon needs to be 19x19 pixels

### Getting started

- Create a new folder, create a `manifest.json` file inside
- Load your extension in browser by going to _Chrome > Extension > Enable Developer Mode > Load unpacked extension.._ and point to the folder you created
- Once you have the folder loaded, you can make edits in your code, refresh Chrome (Cmd+R) and the changes will reflect

```json
{
  "manifest_version": 2,
  "name": "My Awesome Extension",
  "description": "This extension is an awesome extension",
  "version": "0.1",
}
```

#### add extension icons
The icon right to your address bar is called a browser action. It is set as `default_icon` under `browser_action`. The size needs to be 19x19 pixels

```json
"browser_action": {
  "default_icon": "icon_19.png"
}
```

The icon that shows on the Extensions listing page is specified with `128` under `icons`. The size needs to be 128x128 pixels

```json
"icons": { 
  "128": "icon_128.png" 
 }
```

Links
---

- https://robots.thoughtbot.com/how-to-make-a-chrome-extension
- https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/
