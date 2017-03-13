grep
---
grep matches patterns. it uses regex to match patterns

    grep expression file

Example

    grep hello helloworld.txt

will searhc for _hello_ in the file helloworld.txt

## ^
`^` matches all the lines that begin with hello. `^` goes at the beginning of the search expression.

    grep ^hello helloworld.txt

## $
`$` will give you all the lines that end with your search expression. `$` goes at the end of the search expression.

    grep hello$ helloworld.txt 

will give you all the lines that end with hello in your helloworld.txt file.

## -c, --count
`-c` gives you count. For example:

    grep -c ^hello helloworld.txt
    grep -c hello$ helloworld.txt
will give you the amount of lines that start with hello and the amount of lines that end with hello.

## -i, --ignore-case
By default, `grep` is case-sensitive. `-i` gives you case-insensitive results.

## -v, --invert-case
select non-mathcing lines

    egrep -vi 'hello|world' file.txt

will find all lines that do not contain hello or world.

## Chracters
## [ ] search for a character
`[]` let you search for a character. For example:

    grep [h] in helloworld.txt

will output all the _h_ instances in helloworld.txt. You can also search for multiple characters, like so:

    grep [hpokj] hellowolrd.txt
will return all the lines that have our given characters.

## ^[ ] & [ ]$
will output lines that begin `^` or end `$` with our specified characters. For example:

    grep ^[hpokj] hellowolrd.txt
    grep [hpokj]$ hellowolrd.txt

## [a-z] search for a character range

    grep [a-g] file.txt
    grep [1-9] file.txt

## -f, --file=FILE take pattern input from a file

    grep -f grepinput file.txt
OR

    grep -f inputFile.txt fileToSearch.txt

## -l, --files-with-matches
list files that match our pattern in the file name or somewhere within in the files.

    grep -lr cron /etc/

By default, grep outputs _lines_ that have your pattern. `-l` is so it output _file names_ of files that have that pattern, whether in the file name or in the file content.
## -R, -r, --recursive

grep is great for parsing websites. For example, you can download a website and get only image links from it.


egrep (grep -E)
---
allows use of extended regex.

## .* = AND

    egrep -i 'hello.*world' file.txt
will search for _hello world_ case-insesitively

## | = OR

    egrep -i 'hello|world' file.txt
will search for _hello_ or _world_ case-insesitively

You can pipe multiple grep commands to get selective results

    egrep 'hello|world' file.txt | grep -v jeff
will find all the lines that contain either hello or world but do not contain jeff

fgrep (grep -F)
---
special characters don't have any meaning. `hello$` will search for **lines with hello$** and not _every line that ends with hello_. The results are literally what you asked for.

Good in cases where you have to search a lot of files. since youre not using regex, there's less cpu usage. fgrep finishes much faster.