---
title: Timezone Notes
date: 2019-05-15
---

Timezone (zone): UTC
IANA timezone format (zone names): Asia/Karachi

- You can create a date in another timezzone

```js
london = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
// "5/15/2019, 8:02:27 AM"

var date1 = new Date('August 19, 1975 23:15:30 GMT+07:00'); // GMT+07
var date2 = new Date('August 19, 1975 23:15:30 GMT-02:00'); // GMT-02
```

- You can convert a UTC date to another timeZone

```js
// convert current datetime (PKT GMT+5 in my case)
london = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});

// convert a specific datetime 
london = new Date('2019-05-08 11:43:39 UTC').toLocaleString("en-GB", {timeZone: "Europe/London", timeZoneName: "long"})
// "08/05/2019, 12:43:39 British Summer Time"
```

- You can get the offset of a date (in minutes) with `.getTimezoneOffset()`

```js
lahore = new Date();
// Wed May 15 2019 12:19:54 GMT+0500 (Pakistan Standard Time)

lahore.getTimezoneOffset();
// -300
```



Links
---

https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone

- [MDN: Date​.prototype​.get​Timezone​Offset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)