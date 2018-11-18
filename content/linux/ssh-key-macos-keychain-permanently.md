---
title: Add SSH Key to MacOS Keychain permanently
slug: howto-add-ssh-key-macos-keychain-permanently
tags: 
- ssh
- macos
- keychain
date: 2017-02-20
---


Run `ssh-agent` if it's not already running

```bash
eval "$(ssh-agent -s)"
```

Add SSH key to ssh-agent

```bash
ssh-add -K ~/.ssh/id_rsa
```

where `id_rsa` is the actual filename of the key you're adding. This should do it for OSX before Sierra.

### MacOS Sierra

Create an SSH config file

```bash
nano ~/.ssh/config
```

Add the following to it

```bash
Host *
UseKeychain yes
AddKeysToAgent yes
IdentityFile ~/.ssh/id_rsa
```

- `UseKeychain yes` tells SSH to look in your OSX keychain for the key passphrase.
- `IdentityFile` specifies the key you want to load. If you want to load multiple keys just add more `IdentityFile` entries, one per line.

Now add your key(s)

```bash
ssh-add -K ~/.ssh/id_rsa
```

For multiple keys, the config file will look like this:

```bash
Host *
UseKeychain yes
AddKeysToAgent yes
IdentityFile ~/.ssh/id_rsa
IdentityFile ~/.ssh/foo
IdentityFile ~/.ssh/bar
```

### More about the `~/.ssh/config` file

The SSH config file lets you set defaults for all servers (host) as well as save settings like which key/port/user to use for specific ssh connections. Usually, i use [Shuttle](https://fitztrev.github.io/shuttle/) for one-click connections, and it picks up and lists all hosts from the ssh config file as well.

If you're using the config file to add shortcuts for different servers, your config file may look like this

```bash
Host server1
     HostName server1.cyberciti.biz
     User nixcraft
     Port 4242
     IdentityFile /nfs/shared/users/nixcraft/keys/server1/id_rsa

Host nas01
     HostName 192.168.1.100
     User root
     IdentityFile ~/.ssh/nas01.key
```

Once you have servers saved in your config file, you can connect to them by specifying their names, like so

```bash
ssh server1
```

<div class='Post-note'>
NOTE: You can not have `@` in the `Host` value. For example, i tried configuring `Host user@server` because i had multiple users, and it didn't work. Will give a `ssh: Could not resolve hostname titan: nodename nor servname provided, or not known` error.
</div>


Links
---
- [StackOverflow: How can I permanently add my SSH private key to Keychain so it is automatically available to ssh?](http://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically)
- [Github: Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
- [nixCraft: OpenSSH Config File Examples](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
- [Configure multiple SSH identities for GitBash, Mac OSX, & Linux](https://confluence.atlassian.com/bitbucket/configure-multiple-ssh-identities-for-gitbash-mac-osx-linux-271943168.html)
