## Set
https://teamtreehouse.com/library/set
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
A Set is not an Array but it can behave like one. It’s a collection of unique values.

> The Set object lets you store _unique_ values of any type, whether primitive values or object references.

```javascript
let showroom = new Set()

let Prius = {make: 'Toyota', model: 'Prius 2017'},
    Civic = {make: 'Honda', model: 'Civic 2016'},
    A6 = { make: 'Audi', model: 'A6 Sedan 2017'}

showroom.add(Prius)
showroom.add(Civic)

if (showroom.has(Prius)) console.log('Prius is in the showroom') // Prius is in the showroom
if (showroom.has(Civic)) console.log('Civic is in the showroom') // Civic is in the showroom

console.info('Showroom size:', showroom.size) // Showroom size: 2

showroom.delete(Prius)
console.info('Showroom size:', showroom.size) // Showroom size: 1

// Create an Array [] from Set {}
let arrayOfCars = Array.from(showroom)
console.log(arrayOfCars) // [ { make: 'Toyota', model: 'Prius 2017' },                                           
                         // { make: 'Audi', model: 'A6 Sedan 2017' } ]   

// Create a Set {} from an existing Array []
let newShowroom = new Set(arrayOfCars)
console.info('newShowroom size: ', newShowroom.size) // newShowroom size: 2
```
Use cases: 