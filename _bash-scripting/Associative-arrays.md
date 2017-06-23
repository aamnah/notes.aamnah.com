---
layout: post
title: Associative Arrays in Bash
permalink: bash-associative-arrays-iterate-loop
ctime: 2017-05-21

---

Associative arrays are key/value pairs, like Objects in JavaScript. You can iterate/loop over them.

### create (declare) an associative array
This is done with the `declare -A`

```bash
declare -A foo # declare an array
declare -A foo bar baz # declare multiple arrays
declare -A myArray=( [key1]=value1 [key2]=value2 [key3]=value3 ) # Initialise all at once
```

### add values to the array

```bash
foo[key]=value
```

Note the lack of spaces before and after the equal `=` sign

### iterate over key/value pairs
The keys are accessed using an exclamation point: `${!array[@]}`, the values are accessed using `${array[@]}`

You can iterate over the key/value pairs like this:

```bash
for i in "${!array[@]}"
do
  echo "key  : $i"
  echo "value: ${array[$i]}"
done
```
Note the use of quotes around the variable in the `for` statement (plus the use of `@` instead of `*`). This is necessary in case any keys include spaces.

### Troubleshooting
- `declare: -A: invalid option` On macOS, the Bash version is 3.2.57. Bash 3 has no associative arrays, they are supported in Bash 4. You can install Bash 4 with Homebrew `brew update && brew install bash`
- `extensions_modules[key]: command not found` make sure there are no space before and after the equal sign when assign values


Links
---
- [Bash Associative Arrays](http://www.linuxjournal.com/content/bash-associative-arrays)
- [Bash associative array examples](http://www.artificialworlds.net/blog/2012/10/17/bash-associative-array-examples/)
- [Bash Hackers Wiki: Arrays Syntax](http://wiki.bash-hackers.org/syntax/arrays)
- [StackOverflow: How to iterate over associative arrays in Bash](http://stackoverflow.com/questions/3112687/how-to-iterate-over-associative-arrays-in-bash)