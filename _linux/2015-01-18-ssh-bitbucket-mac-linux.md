---
layout: post
title: Setup SSH Keys for Bitbucket on Mac/Linux
permalink: ssh-bitbucket-mac-linux
category: how-to
---

### Generate an SSH Key Pair

	cd ~/.ssh && ssh-keygen -t rsa
    
### Copy the Public key

	cat ~/.ssh/keyname.pub
    
Copy the output given as a result of the command above. It is the content of your *keyname.pub* file. 

If you are on a Mac, you can directly copy the contents of *keyname.pub* by running

	cat ~/.ssh/keyname.pub | pbcopy


### Start the SSH Agent and Load your keys

See if **ssh-agent** is running

	ps -e | grep [s]sh-agent
    
If no output is given then it means it is not running. Start the agent by running:

	ssh-agent /bin/bash
    
Load your SSH Key with the **ssh-add** command

	ssh-add ~/.ssh/keyname
    
List the loaded keys to make sure it has been added.

	ssh-add -l
    
### Add it to Bitbucket

Go to **Manage Account** > Security > **SSH Keys** > **[Add Key](https://bitbucket.org/account/user/USERNAME/ssh-keys/)**
    
    

[Source](https://confluence.atlassian.com/pages/viewpage.action?pageId=270827678)