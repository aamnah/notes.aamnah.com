---
layout: post
title: Formatting dates in JavaScript
permalink: howto-format-dates-in-javascript
tags: 
- date
- format
ctime: 2017-03-28
---

```
dateObj.toLocaleTimeString([locales[, options]])
```

- Locales (string/array of strings, optional) `en-US`, `en-GB`, `ar-EG` etc.
- Options (object, optional) where you can specify properties and their values, e.g. `timeZone: 'Asia/Karachi'`

#### Formatting locale strings

```javascript
// Locale Strings
let date = new Date()
console.info('en-us', date.toLocaleString('en-us')) // "1/10/2017, 3:29:15 PM"
console.info('en-GB', date.toLocaleString('en-GB')) // "10/01/2017, 15:29:15"
console.info('ar-EG', date.toLocaleString('ar-EG')) // "١٠‏/١‏/٢٠١٧ ٣:٣٢:٣٣ م"
console.info('de-DE', date.toLocaleString('de-DE')) // "10.1.2017, 15:32:33"

const locale = navigator.language || navigator.userLangauge // find out the browser's locale

let localeStringFormat = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}
console.info('month', date.toLocaleString(locale, {month: 'long'})) // "January"
console.info('en-us', date.toLocaleString('en-us', localeStringFormat)) // "Tuesday, January 10, 2017"
console.info('en-GB', date.toLocaleString('en-GB', localeStringFormat)) // "Tuesday, 10 January 2017"
console.info('ar-EG', date.toLocaleString('ar-EG', localeStringFormat)) // "الثلاثاء، ١٠ يناير، ٢٠١٧"
console.info('de-DE', date.toLocaleString('de-DE', localeStringFormat)) // "Dienstag, 10. Januar 2017"

```

#### Validating and formatting dates

```javascript
const UNIX = '1481884441'
const ISO8601 = '2016-11-04T17:39:59.910Z'
const time = new Date(ISO8601)
const locale = 'en-US'
/* Locales
* en-US: November 4, 2016, 22:39
* en-GB: 4 November 2016, 10:39 PM
*/


// Format using Moment.js
const formattedUnix = moment.unix(UNIX).format('MMM D, YYYY, HH:mm')
const formattedISO = moment(ISO8601).format('MMM D, YYYY, HH:mm')
console.info('formatted Unix:', formattedUnix) // "Dec 16, 2016, 15:34"
console.info('formatted ISO:', formattedISO) // "Nov 4, 2016, 22:39"


// Format using Date methods
let date = time.getDate()
let month = time.toLocaleString(locale, {month: 'short'})
let year = time.getFullYear()
let hours = time.getHours()
let mins = time.getMinutes()

console.info(`${month} ${date}, ${year}, ${hours}:${mins}`) // "Nov 4, 2016, 22:39"


// Format using Locale string
const dateStringFormat = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}
console.info('locale string', time.toLocaleString(locale, dateStringFormat)) // "Nov 4, 2016, 10:39 PM"
```


Links
---
- [JSBin: Formatting Locale Strings](https://jsbin.com/lihuzu/3/edit?js,console)
- [JSBin: Validating and Formatting dates in JavaScript](https://jsbin.com/giwudo/12/edit?js,console)
- [MDN: .toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)