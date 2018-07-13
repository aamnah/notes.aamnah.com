---

title: CASE Statement
slug: case-statements
date: 2015-12-07
lastmod: 2017-03-13
---

CASE statements are similir to ELIF statements, use `case` if `elif` statements are more than 3.

```bash
case expression in
  pattern1 )
    statements ;;
  pattern2 ) 
    statements 
    ;;
esac
```

Exactly how you use `fi` to end `if` statements, you close a `case` statement with `esac` (which is the alphabetic opposite of case, case spelled backwards). 

`;;` marks the end of a statement.

Example:

```bash
echo -n "give me a domain: "
read domain

case $domain in
  "google.com" )
    echo "Google, wow!" ;;
  "twitter.com" )
    echo "Twitter -_-" ;;
  "udemy.com" ) 
    echo "Udemy, YES!" ;;
  "aamnah.com" )
    echo "Aamnah.com, brilliant. Let's PING!"
    ping -c3 aamnah.com ;;
esac
```

---

```bash
case "$1" in
  start) 
    /usr/sbin/sshd
    ;;
  stop)
    kill $(cat /var/run/sshd.pid)
    ;;
esac
```

In the example above if $1 is equal to `start` then `/usr/sbin/sshd` is executed. If $1 is equal to `stop` then the `kill` command is executed. If $1 matches neither _start_ nor _stop_ then nothing happens and the script continues after the statement.

Note: case statements (_start_ and _stop_ in the example above) are case-sensitive.

```bash
case "$1" in
  start) 
    /usr/sbin/sshd
    ;;
  stop)
    kill $(cat /var/run/sshd.pid)
    ;;
  *)
    echo "Usage start|stop" 
    exit 1
    ;;
esac
```

In this example, anything other than start or stop will show usage instructions.

### wildcards `*`

```bash
*)
  echo "Usage start|stop" 
  exit 1
  ;;
```

is the same as

```bash
*)
  echo "Usage start|stop" ; exit 1
  ;;
```

### check multiple conditions `|`
You can use pipe `|` to seperate multiple case statement conditions/options. `|` servers as `OR`

```bash
case "$1" in
  start|START) 
    /usr/sbin/sshd
    ;;
  stop|STOP)
    kill $(cat /var/run/sshd.pid)
    ;;
  *)
    echo "Usage start|stop" 
    exit 1
    ;;
esac
```

### Character classes `[]`
Character classes are simply a list of characters between brackets `[]`. Like so:

```bash
[yY][nN]
```

A character class matches exactly one character, and a match occurs for any of the including characters in the brackets.

```bash
[yY][eE][sS]
```

will check for all case-sensitive possibilities of yes. yes, Yes, yEs, yeS, YEs, yES, YeS, and so on.. Here's a code example:

```bash
read -p "Enter y or n: " ANSWER

case "$ANSWER" in
  [yY]|[yY][eE][sS] )
    echo "You answered yes." ;;
  [nN]|[nN][oO] )
    echo "You answered no." ;;
  * )
    echo "Invalid answer." ;;
esac
```

Links
---
- https://www.udemy.com/shell-scripting-linux/learn/#/lecture/3351956
