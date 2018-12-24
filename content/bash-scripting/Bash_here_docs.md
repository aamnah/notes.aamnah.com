---
date: 2018-04-19
title: Here Documents in Bash
---

### tl;dr
a here document is special-purpose _code block_ that you can use to feed commands

```bash
ssh otherhost << EOF
  ls some_folder; 
  ./someaction.sh 'some params'
  pwd
  ./some_other_action 'other params'
EOF
```

- a **limit string** (usually `EOF`) indicates the start and finish of a here document. It doesn't have to called `EOF`, you can call it whatever, e.g. `JumanjiXYZ` is a valid limit string
- Variables inside a Here document need to be quoted or else they won't be substituted, like so: `"${VAR}"`
- The ending limit string needs to be at the beginning of the line

---

Here is an example where a here doc has been used to run multiple commands to the remote server. The script logs in to a remote server, takes a back up of all it's databases and restores those databases directly on your current server, i.e. the server you ran the commands from

```bash
# the limit string here is: SSHCOMMANDS
# The variables inside the here doc are quoted
ssh -i ${REMOTE_SSH_KEY} -p ${REMOTE_SSH_PORT} ${REMOTE_SSH_USER}@${REMOTE_SSH_HOST} /bin/bash << SSHCOMMANDS
  mysqldump --user="${REMOTE_DB_USER}" --password="${REMOTE_DB_PASS}" --add-drop-database --all-databases | gzip -9 > "${DB_DUMP_FILENAME}".sql.gz
  gunzip < "${DB_DUMP_FILENAME}".sql.gz | mysql --user="${DB_USER}" --password="${DB_PASS}" --host="${DB_HOST}"
SSHCOMMANDS
```

Links
--
- [Advanced Bash Scripting Guide: Chapter 19. Here Documents](http://www.tldp.org/LDP/abs/html/here-docs.html)
- [What is the cleanest way to ssh and run multiple commands in Bash?](https://stackoverflow.com/questions/4412238/what-is-the-cleanest-way-to-ssh-and-run-multiple-commands-in-bash)