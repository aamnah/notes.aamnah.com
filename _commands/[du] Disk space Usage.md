check space consumed and list by size:

    du --max-depth=1 | sort -n | awk 'BEGIN {OFMT = "%.0f"} {print $1/1024,"MB", $2}'
    
[explainshell][1]
    
Example:

    [root@server7 /]# du --max-depth=1 | sort -n | awk 'BEGIN {OFMT = "%.0f"} {print $1/1024,"MB", $2}'
    du: cannot access `./proc/18566/task/18566/fd/4': No such file or directory
    du: cannot access `./proc/18566/task/18566/fdinfo/4': No such file or directory
    du: cannot access `./proc/18566/fd/4': No such file or directory
    du: cannot access `./proc/18566/fdinfo/4': No such file or directory
    0 MB ./proc
    0 MB ./sys
    0 MB ./admin
    0 MB ./media
    0 MB ./mnt
    0 MB ./selinux
    0 MB ./srv
    0 MB ./backup
    0 MB ./dev
    0 MB ./lost+found
    0 MB ./tmp
    4 MB ./root
    8 MB ./bin
    14 MB ./sbin
    27 MB ./lib64
    28 MB ./etc
    38 MB ./opt
    125 MB ./boot
    557 MB ./lib
    5533 MB ./usr
    5929 MB ./home
    15520 MB ./var
    27784 MB .
    [root@server7 /]#
    
[1]: http://explainshell.com/explain?cmd=++++du+--max-depth%3D1+%7C+sort+-n+%7C+awk+%27BEGIN+%7BOFMT+%3D+%22%25.0f%22%7D+%7Bprint+%241%2F1024%2C%22MB%22%2C+%242%7D%27

## DISK USAGE
# List top ten largest files/directories in current directory
alias ducks='du -cks *|sort -rn|head -11'
# Find the biggest in a folder
alias ds='du -ks *|sort -n'

# WordPress Diff
If on wordpress, delete diff files. /wp-includes/Text/Diff/Engine/cache
Diff is what keeps page revisons.

# Trash
in cPanel, check trash folder: /home/username/.trash