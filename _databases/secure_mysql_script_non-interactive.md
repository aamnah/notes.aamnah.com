---
title: Secure MySQL installation non-interactively with a bash script
permalink: secure-mysql-install-non-interactive-bash-script
ctime: 2017-08-16
---

There are two ways you can write the script. One is running the script with a [here-document](http://tldp.org/LDP/abs/html/here-docs.html).

> A _here document_ (aka heredoc) is a special-purpose code block. It uses a form of I/O redirection to feed a command list to an interactive program or a command

Basically, you provide only the answers to the question the script is going to ask you, and then redirect them as input to the interactive program.


Like so:

```bash
PASS_MYSQL_ROOT='whateverPassword'
1Rc3DG2PV6KBLF1h

# Enter password for user root (${PASS_MYSQL_ROOT})
# Would you like to setup VALIDATE PASSWORD plugin? (y)
## Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 1 (1) -- will only see this if answered y to the previous one
# Change the password for root ? (n)
# Remove anonymous users? (y)
# Disallow root login remotely? (y)
# Remove test database and access to it? (y)
# Reload privilege tables now? (y)

# mysql_secure_installation
mysql_secure_installation << EOF
${PASS_MYSQL_ROOT} 
y
1
n
y
y
y
y
EOF
```

- The `EOF` is a **limit string**. It doesn't have to be called `EOF`, it can be `abracadabra` for all that matters, just make sure that it doesn't occur anywhere in the command list that you're providing (meaning it should only come twice in your here document, at the beginning of command list and at the end).
- Note that heredoc **commands can not be indented** with the rest of the code. The code has to be at the beginning of the line. 
- You **can not enter passwords** with heredocs. Programs that read passwords often specifically open /dev/tty to defeat redirection. In which case, the tool you need is 'expect', which will run one behind a pseudo-tty.
- Also, you **can't add comments** with the command list. It has to be the exact answer to whatever the program asked. (Makes sense when you realize that you have never answered with #comments when a program asks you something, you answer only what the program asked. Since I have a habit of commenting my code heavily, this was a point to note for me). So i have added comments about the questions the `mysql_secure_installation` script asks before the code block starts.

The other way of securing the installation is running individual MySQL commands that achieve the same thing. Like following:

```bash
# mysql_secure_installation
mysqladmin -u root -p ${PASS_MYSQL_ROOT}
# mysql -u root -p ${PASS_MYSQL_ROOT} -e "UPDATE mysql.user SET Password=PASSWORD('${PASS_MYSQL_ROOT}') WHERE User='root'" # update root password
mysql -u root -p ${PASS_MYSQL_ROOT} -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1')" # Disable remote login
mysql -u root -p ${PASS_MYSQL_ROOT} -e "DELETE FROM mysql.user WHERE User=''" # Remove anonymous users
mysql -u root -p ${PASS_MYSQL_ROOT} -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'" # Remove test database
mysql -u root -p ${PASS_MYSQL_ROOT} -e "FLUSH PRIVILEGES" # Reload privileges
```

The disadvantage of the code above is that it'll store the MySQL password in bash history. You can alter the code above and combine it with a here document code block, like so:

```bash
mysql --user=root --password=${PASS_MYSQL_ROOT} << EOF
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');
DELETE FROM mysql.user WHERE User='';
DELETE FROM mysql.db WHERE Db='test' OR Db='test_%';
FLUSH PRIVILEGES;
EOF
```

But since heredocs usually can't provide passwords for progarms, you'll end up leaving your MySQL password in bash history anyway.

Links
---
- [Advanced Bash-Scripting Guide: Chapter 19. Here Documents](http://tldp.org/LDP/abs/html/here-docs.html)
- [StackOverflow: Can I use a heredoc to enter a password in bash?](https://stackoverflow.com/questions/3796345/can-i-use-a-heredoc-to-enter-a-password-in-bash)