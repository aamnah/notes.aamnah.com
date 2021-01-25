---

title: Generating an SSH Key and Copying it to Remote Server
slug: generate_ssh_keys_copy_remote_server
date: 2014-08-26
lastmod: 2021-01-25
tags: 
- ssh
---


```bash
mkdir ~/.ssh && chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys
# copy key.pub to authorized_keys
# nano /etc/ssh/sshd_config
service ssh reload
```

### Generate the Key (on local server)

```bash
cd ~/.ssh && ssh-keygen -t ed25519
```

`Ed25519` is a newer algorithm which is faster than `RSA`. Ed25519 is supported by OpenSSH so you should be good in almost all cases. Github recommends passing it your email with `-C` which is then uses as a label.

```bash
cd ~/.ssh && ssh-keygen -t ed25519 -C "hello@example.com"
```

### Making Sure the Remote Server Accepts SSH Keys
view the server's sshd_config file

```bash
cat /etc/ssh/sshd_config
```

Check the following:

```bash
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile	~/.ssh/authorized_keys
```

### Making sure the .ssh folder and authorized_keys file exists on Remote server

```bash
sudo mkdir ~/.ssh && sudo touch ~/.sh/authorized_keys
```

### Setting Permission on Remote Server 

```bash
sudo chmod go-w ~/ && sudo chmod 700 ~/.ssh && sudo chmod 600 ~/.ssh/authorized_keys
```

### Copying SSH Public Key from Local to Remote Server

```bash
cat ~/.ssh/id_rsa.pub | ssh username@example.com "cat >> ~/.ssh/authorized_keys"
```

replace `id_rsa.pub` with your generated key.


Troubleshooting
---

- make sure the authorized_keys file isn't empty. 
- make sure you copied the correct authorized_keys file (.pub file that is)
- make sure the user you are connecting to owns the .ssh folder and the authorized_keys file
- make sure the permissions for the .ssh (700) folder and the authorized_keys (600) file are correct on the remote server
- make sure the path given in 'sshd_config' is correct. `/home/.ssh/authorized_keys` and `~/.ssh/authorized_keys` are different if the user you are connecting to isn't root. `~/.ssh/authorized_keys` is preferred since it is relative to the user.


Links
---

- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
