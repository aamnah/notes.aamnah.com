---
title: Add SSH Key to MacOS Keychain permanently
permalink: /howto-add-ssh-key-macos-keychain-permanently
tags: 
- ssh
- macos
- keychain
status: publish
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

Links
---
- [StackOverflow: How can I permanently add my SSH private key to Keychain so it is automatically available to ssh?](http://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically)
- [Github: Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
