---
title: SSH Keys
slug: ssh-keys
date: 2015-11-15
lastmod: 2017-03-13
tags: 
- ssh
---

- Generate a key pair locally
- Give the public key to the remote server
- Keep the private key yourself

## Generate key

```bash
ssh-keygen -t rsa
```

## Copy .pub file to remote

```bash
scp id_rsa.pub user@remoteserver:location
```

On linux you can do 

```bash
ssh-copy-id user@123.456.789.123
```

## Permissions
The remote server doesn't like the authorizated_keys file having too many permissions. For better security, change the authorizated_keys file to `600` and the _ssh_ folder to `700`. The permissions on `.ssh` can not be any higher than 755. 

```bash
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

You might even have to change permissions for the `/home` directory

```bash
chmod go-w ~/
```

## sshd_config
The config file for the ssh daemon is at:

```
/etc/ssh/sshd_config
```

You can also use the `find` command to find the file location:

```bash
find / -name sshd_config
```

Make a copy of the config file if you are afraid of messing it up

```bash
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```

## Restart SSH

```bash
service sshd restart
```

If you don't know what the service name for ssh is, you can list all of the services to find out:

```bash
service --status-all
```

## aliases
To avoid having to type the ssh command everytime, you can create an alias

```bash
alias se3='ssh root@remoteServer'
```

The alias goes in you `~/.bash_profile` file.

## Start the `ssh-agent` and load your keys
See if ssh-agent is running:

```bash
ps -e | grep [s]sh-agent
```
 
Run ssh-agent:

```bash
ssh-agent /bin/bash
```

OR

```bash
ssh-agent bash
```

Load ssh key:

```bash
ssh-add ~/.ssh/id_rsa 
```

List loaded ssh keys:

```bash
ssh-add -l
```

## Copy key to clipboard
Copy your key to your clipboard with (Linux only): 

```bash
cat ~/.ssh/id_rsa.pub | pbcopy
```

## Troubleshhoting
Simple as that. Though troubleshooting might be needed.

- make sure the .pub key has been copied to the `authorized_keys` file, on remote server, in the `~/.ssh` folder. If it doesn't exist, create one.
- make sure that the path you copied to is the path specifies in the ssh config file. The ssh config file is at: `sshd_config
- if the error doesn't make sense try ssh with verbose mode `-v`.
- make sure you have no extra white space at the end when you copy the key, because that can throw it in a loop.

![Screenshot 2015-11-15 23.45.12.png](/assets/img/resources/546FF4444B868B75D6ECAE93C373AD92.png)

![Screenshot 2015-11-15 23.46.48.png](/assets/img/resources/E362BDAD8F8B586E6631A7382DB2DBC4.png)

Resources
---
[YouTube: Setting Up an SSH Key](https://www.youtube.com/watch?v=-J9wUW5NhOQ)
