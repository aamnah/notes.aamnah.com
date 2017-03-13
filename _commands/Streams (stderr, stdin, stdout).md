## stdin
Standard In. Whatever is entered into the bash terminal

## stdout
Standard Out. Whatever output was given back by the terminal.

## stderr
Standard Error. Whatever error was given back by the terminal

## Redirect stderr to /dev/null
You can redirect the `stderr` to `/dev/null` to get rid of it. You don't care if there are errors, you don't want to see those errors, you don't want to log those errors, you just want them gone.

    ls avdkaeudvaev 2>> /dev/null

## Save both stderr and stdout 

    ls fileThatExists fileThatDoesNotExist > mystdoutput 2> mystderror

will save the stdout in a file called _mystdoutput_ and save the stderr in a file called _mystderror_. We will get both stdout and stderr because we are listing a file that exists (stdout) and a file that doesn't exist which will result in an error (stderr). One command, one entry, two separate files.

## Uses:
- in bash scripts, you can supress outputting errors and log them to an error log instead.


## /dev/null 
/dev/null is _nothing_. It's a black hole. When you are redirecting something to /dev/null, you are basically telling it to get lost. And it will, get lost, in the nothnigness.