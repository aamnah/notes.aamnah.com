cuts prints selected parts of a file.


## -d, delimiter

## -f, field

## Example
grab all the usernames in /etc/passwd

    cut -f1 -d: /etc/passwd
where field `f1` is the first occurance before delimiter `:`. Since the first occurance is the username, the command above will grab all the usernames.

    cut -f7 -d: /etc/passwd
Field 7 is the last part in /etc/passwd, i.e, the shell associated with each account. 