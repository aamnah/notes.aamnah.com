---
title: Getting started with SSH on Windows Subsystem for Linux (WSL)
date: 2019-02-25
tags:
	- wsl
	- ssh
---

```bash
# create file and folder structure for SSH
cd
mkdir ~/.ssh
touch ~/.ssh/authorized_keys

# set appropriate permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

# generate SSH key
ssh-keygen -t rsa ~/.ssh/ninja

# make sure SSH is running
# eval `ssh-agent -s`
eval $(ssh-agent)

# load SSH key
ssh-add ~/.ssh/ninja
```

### save your config

```bash
# save SSH host configs
touch ~/.ssh/config
chmod 600 ~/.ssh/config
nano ~/.ssh/config
```

add your config settings

```
# ~/.ssh/config

# server on Amazon LightSail
Host lightsail
  HostName tornado.mycooldomain.com
  User kunami
  IdentityFile ~/.ssh/id_rsa
  Port 4234
```

Now you can just do `ssh lightsail` everytime you need to connect and it'll pickup the key, host and port etc. from the saved config.

[read more on configs](https://tldrdevnotes.com/sysadmin/ssh_config_hosts/)

### load your SSH key

```bash
ssh-add ~/.ssh/ninja
```

```
Enter passphrase for /home/aamnah/.ssh/ninja:
Identity added: /home/aamnah/.ssh/ninja (/home/aamnah/.ssh/ninja)
```


### Troubleshooting

- Gettings `Could not open a connection to your authentication agent.` when trying to `ssh-add`. Make sure that ssh agent is running by running the `eval $(ssh-agent)` command