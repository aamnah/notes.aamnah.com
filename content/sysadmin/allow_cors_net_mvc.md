---
title: Add CORS Header to an ASP.NET MVC project
date: 2020-02-17
---


Add the following to `Web.config` for the ASP.NET MVC app (inside the `<configuration>` block)

```xml
<!-- START: Add CORS header for WordPress site so we can dynamically fetch popular users there -->
<configuration>
  <system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="Access-Control-Allow-Origin" value="https://other.mydomain.net" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
<!-- END: Add CORS header for WordPress site so we can dynamically fetch popular users there -->
```

Make sure a `<configuration>`, `<system.webServer>`, `<httpProtocol>`, or `<customHeaders>` block doesn't exist already. Better to search for these first and then add the code accordingly.

Save the Web.config file and restart the site from IIS. You can now make a call from `https://other.mydomain.net` to `https://main.mydomain.net/` using JavaScript `fetch`. For example:

```js
let endpoint = 'https://main.mydomain.net/Snapshot/landing-grid-mobile?count=12'

async function getPopularUsers(url) {
  const response = await fetch(url)
  return await response.json()
}

getPopularUsers(endpoint).then(data => console.info(data))
```