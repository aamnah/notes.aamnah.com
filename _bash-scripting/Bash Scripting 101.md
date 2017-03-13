---
layout: post
title: Bash Scripting 101
subtitle: Bash Scripting Basics for Linux, Unix and MacOS
permalink: bash-scripting-getting-started
ctime: 2015-12-07
mtime: 2017-03-13
---

Basics

- variables
- functions
- Loops
- Conditionals (If statements)
- taking user input
- check if a user is root
- check if a file or directory already exists
- colouring the output
- writing and redirecting data
- find your IP address
- find your hostname
- [check if a package is already installed](http://www.linuxquestions.org/questions/programming-9/shell-script-to-check-apache-installed-or-not-262115/)
- check if package dependencies are met
- how to make a link clickable
- exit if unmet dependencies/deps can’t be installed
- exit statuses (0-255, `$?`)
- `$?` exit status of last command
- logging
- wildcards
- [looping over multiple arguments](http://stackoverflow.com/questions/255898/how-to-iterate-over-arguments-in-a-bash-script)

### echo
- When using `echo -e` use double quotation marks `”` or it won’t work.
- When using variables inside a string, you need to encapsulate the string in double quotation marks `”`
- When using If statements, always wrap your variables in [double quotation marks](http://stackoverflow.com/a/67458/890814) `“”` to account for spaces in file/dir names 
- Use `\n` in the beginning to give a line break between your response text and the command output
- http://stackoverflow.com/questions/13617843/unary-operator-expected
- you can check for exit statuses of multiple commands with `||`. This can be used where you are unsure of which OS will be running the command

#### Find external IP

```bash
SERVER_IP=`dig +short myip.opendns.com @resolver1.opendns.com` # External IP of the server
```

#### Multiple commands on the same line
You can put multiple commands on the same line by separating them with a semicolon `;`

For example

```bash
if [ “$?” -eq “0” ]; then
  # do something
fi
```


#### Make script executable

    chmod +x foo.sh