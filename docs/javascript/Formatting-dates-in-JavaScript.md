# Formatting and validating dates in JavaScript

Dates come in multiple formats:

- a Unix timestamp (1481884441) 
- an ISO 8601 string (2016-11-04T17:39:59.910Z)
- a locale string (Thursday, December 20, 2012, GMT)

Let's get started by defining some variables to use in our examples

```javascript
const UNIX = 1481884441
const ISO8601 = '2016-11-04T17:39:59.910Z'
const invalidISO = '2016-31-31T17:39:59.910Z'
const invalidDate = '2016/31/31'

let date = Date.now() // Date.now() is faster than new Date()
```

## Check if value is a valid date

### Moment.js 
You can use `moment.js` and it's `isValid()` to see if the value is a valid date

```javascript
import moment from 'moment'

moment.unix(UNIX).isValid() // check unix timestamps
moment(ISO8601).isValid() // check date strings
```

Validating dates with vanilla JS is a bit tricky because of the multiple date fromats.

### Validate Date Strings

You can use `Date.parse()` to check if the value is a valid date _string_. It gives the Unix timestamp if valid date string and `NaN` if the string is unrecognized or contains illegal date values (e.g. February 31?)

To check is the output is Nan, you can use the `isNaN` function (`Date.prase(x) === NaN` doesn't work for some reason)

```javascript
function isDateString (x) {
  return isNaN(Date.parse(x)) ? false : true
}

isDateString(UNIX) ? console.info('hell yeah') : console.info('neh') // "neh"
isDateString(ISO8601) ? console.info('hell yeah') : console.info('neh') // "hell yeah"
```
`Date.parse()` is no good for validating Unix timestamps.

### Validate Unix Timestamps
The trick is to convert the timestamp to date object first and validate that. Since JS works in milliseconds, you need to convert the timestamp (seconds) to milliseconds first (by multiplying it with 1000)

```javascript
function isUnixTimestamp (x) {
  let timestamp = x * 1000
  let time = new Date(timestamp)

  return isNaN(Date.parse(time)) ? false : true
}

isUnixTimestamp(UNIX) ? console.info('timestamp') : console.info('neh') // "timestamp"
isUnixTimestamp(ISO8601) ? console.info('timestamp') : console.info('neh') // "neh"
isUnixTimestamp(invalidISO) ? console.info('timestamp') : console.info('neh') // "neh"
```

We can combine both of the above function to make a `isValidDate` function.

```javascript
function isValidDate (x) {
  return isDateString(x) || isUnixTimestamp(x) ? true : false
}

sValidDate(UNIX) ? console.info('valid date') : console.info('nope') // "valid date"
isValidDate(ISO8601) ? console.info('valid date') : console.info('nope') // "valid date"
isValidDate(invalidISO) ? console.info('valid date') : console.info('nope') // "nope"
isValidDate(invalidDate) ? console.info('valid date') : console.info('nope') // "nope"
isValidDate('abc') ? console.info('valid date') : console.info('nope') // "nope"
```

Note that there are going to be some edge cases with this:

```javascript
// 123 is a valid date
isValidDate('123') ? console.info('valid date') : console.info('nope') // "valid date" 123 is a valid timestamp!

// Checking for 31st of Feb (this will give different values based on locale date format)
isValidDate('2016/02/31') ? console.info('valid date') : console.info('nope') // "valid date"
isValidDate('2016/31/02') ? console.info('valid date') : console.info('nope') // "nope"
```

## Formatting dates with Locale strings
`toLocaleString()` let's you format a date using the locale settings. Locales let you specify the language whose formatting conventipons should be used. Different locales have different conventions for writing dates, for example `en-US` uses 12-hour time with AM/PM while `en-GB` uses 24-hour format. `en-US` has month first and then date, while `en-gb` has date first and then month. You can customize the format for the locale string.

```javascript
console.info('en-us', date.toLocaleString('en-us')) // "1/10/2017, 3:29:15 PM"
console.info('en-GB', date.toLocaleString('en-GB')) // "10/01/2017, 15:29:15"
console.info('ar-EG', date.toLocaleString('ar-EG')) // "١٠‏/١‏/٢٠١٧ ٣:٣٢:٣٣ م"
console.info('de-DE', date.toLocaleString('de-DE')) // "10.1.2017, 15:32:33"
```
You can further customize the locale string by passing it an options argument (object). 

```javascript
let localeStringOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}

console.info('en-us', date.toLocaleString('en-us', localeStringOptions)) // "Tuesday, January 10, 2017"
console.info('en-GB', date.toLocaleString('en-GB', localeStringOptions)) // "Tuesday, 10 January 2017"
console.info('ar-EG', date.toLocaleString('ar-EG', localeStringOptions)) // "الثلاثاء، ١٠ يناير، ٢٠١٧"
console.info('de-DE', date.toLocaleString('de-DE', localeStringOptions)) // "Dienstag, 10. Januar 2017"
```

Furthermore, you can detect the locale of the browser with `navigator.language` and `navigator.userLanguage`, like this:

```javascript
let locale = navigator.language || navigator.userLanguage

console.info('month', date.toLocaleString(locale, {month: 'long'})) // "January"
```

For example, get the month name (e.g. Jan) using `toLocaleString`

```javascript
let time = new Date('2016-11-04T17:39:59.910Z')

let localeString = time.toLocaleString('en-US', {month: 'short'})

console.info(localeString) // Nov
```

Notes
---
- `Date.now()` is faster than `new Date()` since you don't have to instantiate a new `Date` object. [stackoverflow][1] [jsperf][2]

Links
---
- [MDN: Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
- [MDN: toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [JS Bin: .toLocaleString() examples](https://jsbin.com/lihuzu/edit?js,console)
- [JS Bin: isValidDate()](https://jsbin.com/fomapu/15/edit?js,console)

[1]: http://stackoverflow.com/a/15401259/890814
[2]: http://jsperf.com/date-now-vs-new-date-gettime/8