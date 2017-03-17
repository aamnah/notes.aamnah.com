# .filter()

Here is an animals array:

```javascript
const animals = [
	{ name: "Fluffykins", species: "rabbit"},
	{ name: "Caro", species: "dog"},
	{ name: "Hamilton", species: "dog"},
	{ name: "Harold", species: "fish"},
	{ name: "Ursula", species: "cat"},
	{ name: "Jimmy", species: "fish"}
]
```

Here's how you'd traditionally get all the _dogs_ from the array:

```javascript
const dogs = []
for (let i = 0; i < animals.length; i++) {
	if (animals.species === 'dog') {
		dogs.push(animals[i])
	}
}
```

Here's how you'd do it using `.filter()`:

```javascript
let dogs = animals.filter(function(animal) {
	return animal.species === 'dog'
})
```

`.filter()` will loop through every item in the array and pass it through the callback function. It expects the callback* function to send back a true or false, to tell `.filter()` whether or not the item should be in the new array. Then it'll return the new filtered array.

You can write the same filter method by defining the callback function separately and then passing that to filter, like this:

```javascript
let isDog = function(animal) {
	return animal.species === 'dog'
}
let dogs = animals.filter(isDog)
```

Links
---
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [YouTube: FunFunFunction - Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=1)