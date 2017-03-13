## `>` 
Write (will overwrite existing file if any, otherwise will create a new one)

    echo "Bonjour la monde!" > helloworld.txt
    ls /etc/ > file.txt

`>` will write the _stdout_. 

## `>>` 
Append (will _append_ at the end of existing file content, will create file if file doesn't exist)

    echo "Bonjour la monde!" > helloworld.txt
    echo "alias dl='cd /Users/aamnah/Downloads'" >> .aliases

## `2>` 
Write stderr. By default `>` does not write _stderr_, it only writes _stdout_. For stderr, you use `2>`.

    ls avdkaeudvaev 2> error.txt

![Screenshot 2015-12-15 22.07.56.png](resources/D11261DE282EC0335443C20D8389B267.png)

## `2>>` 
Append stderr. Same as `2>` but appends instead of writing/overwriting.

    ls avdkaeudvaev 2>> /dev/null

## `2>&1` 
Write stderr as well as stdin in the same file.

    cat file1 file2 nofile > mystdoutput 2>&1

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