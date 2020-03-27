---
title: Show a country selection popup and save choice in Cookie
date: 2020-03-26
---

### Show popup on page load

jQuery 

```js
<script>
  $(document).ready(function(){
    $("#myModal").modal('show');
  });
</script>
```

- Save choice in cookie

```html
<img src="uk.png" alt="Continue to our UK site" onclick="setCountryCookie('UK')" />
```

```js
function setCountryCookie(country) {
  document.cookie = `fppCountry=${country}`
  countrySelector.hide();
}
```

### Redirect to the site they selected

```js
window.location.href = 'https://www.yoursite.com';
```

### Set the cookie on the redirected site

pass a value in header to the new site,
check for it on the other site and if present add a cookie

`window.location.search`

### Check if cookie exists on next visit

```js
"myCountry=UK; myName=Amna; myAge=31"
```

becomes

```js
["fppCountry=UK", " myName=Amna", " myAge=31"]
```

```js
matchString('myName is Amna', 'myName') // true
matchString('myName is Amna', 'thyName') // false
```

### Show the popup again if no cookie


Links
---

- [Quick Tip: Get URL Parameters with JavaScript](https://www.sitepoint.com/get-url-parameters-with-javascript/)

