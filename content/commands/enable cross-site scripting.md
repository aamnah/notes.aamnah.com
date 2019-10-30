---
title: Enable cross-site scripting in Chrome
date: 2018-07-01
---

Quit Chrome and all of it's processes. Open the browser via the Terminal using the following command.

# Mac

```bash
open -a Google\ Chrome --args --disable-web-security
```

# Linux

```bash
google-chrome --disable-web-security
```

Also if you're trying to access local files for dev purposes like AJAX or JSON, you can use this flag too.

```
-–allow-file-access-from-files
```

# Windows

For Windows go into the command prompt and go into the folder where Chrome.exe is and type

```cmd
chrome.exe --disable-web-security
```

OR 

```cmd
chromium-browser --disable-web-security
```

It's going to allow us to use any of the apps that don't use device hardware right in your browser.


[source](http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome)