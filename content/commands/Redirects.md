---

title: "Redirects (>, >>, 2>, 2>&1)"
date: 2015-12-15
lastmod: 2017-03-16
---


## `>` write/overwrite
Write (will overwrite existing file if any, otherwise will create a new one)

```bash
echo "Bonjour la monde!" > helloworld.txt

# write the output of ls in /etc/ to file.txt
ls /etc/ > file.txt
```

`>` will write the _stdout_. 

## `>>` append
Append (will _append_ at the end of existing file content, will create file if file doesn't exist)

```bash
echo "Bonjour la monde!" >> helloworld.txt
echo "alias dl='cd /Users/aamnah/Downloads'" >> .aliases
```

## `2>` write stderr
Write stderr. By default `>` does not write _stderr_, it only writes _stdout_. For stderr, you use `2>`.

```bash
ls avdkaeudvaev 2> error.txt
```

![Redirect stderr]({{ site.baseurl }}/assets/img/redirect-stderr.png)

## `2>>` append stderr
Append stderr. Same as `2>` but appends instead of writing/overwriting.

```bash
ls avdkaeudvaev 2>> /dev/null
```

## `2>&1` write stdin + stdout
Write stderr as well as stdin in the same file.

```bash
cat file1 file2 nofile > mystdoutput 2>&1
```

This will come in handy more often than you think, specially when you are writing scripts, automating things and such.

## prevent overwriting specific files
**noclobber** prevents you from overwiting existing files.

    set -o noclobber

Don't _clobber_ the existing file.

This is when you want to create a new file if the file doesn't exist, but you don't want to append to a file that already exists and you don't want to remove files that already exists.

## Uses:
- Storing information
- Creating new log files
- Writing data
- Concatenating files
