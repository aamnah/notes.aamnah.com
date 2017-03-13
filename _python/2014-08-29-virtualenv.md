---
layout: post
title: virtualenv
---

### Why use virtualenv? ###
- it lets you use a newer version of python () instead of using the system default (2.7.5 on Mac), without effecting the default. It is recommeneded that you start using Python 3 but at the same time it is not really all that feasible yet for several project. For example, Django still is not Python 3 ready. Virtualenv lets you work in different version of python at the same time.
- it is a boxed environment. You can install different packages in different environments. They won't interfare with each other.

### install: ###
	
    sudo pip install virtualenv

see help:
	
    virtualenv -h
    
    
By default a new virtual environment is started with no packages installed. If you want to start with access to all system packages, start virtualenv with the `--system-site-packages` flag.

### starting a virtual environment: ###
cd to the folder you want to start a virtual environment in.

	virtualenv foo

where **foo** is the name of your environment. This will create a virtualenv, but not activate it.

In order to activate, source the activate script:

	source foo/bin/activate
    
To see the packages installed inside of our virtual environment:

	pip freeze

to stop a virtualenv:

	deactivate
    

### Specifying which Python version to use: ###
The `-p` flag is for the python interpreator to use. The default is the interpretor that python was installed with (/usr/bin/python)

start virtualenv with Python 3:

	virtualenv -p python3 foobar
    
You odn't really have to give it the full path, you can just say **python3**.

To check python version:

	python --version
    
    
### Configuring virtualenv: ###
There are two ways to do it. One is to pass attributes to export command and the other is to config the virtualenv.ini file.

1.
Take the attribute name, replaces all the dashes (-) with underscroes (_) and then prefixing that with `VIRTUALENV_`

For example, we are going to setup `distribute` to be the default package management library that we are installing with our virtualenv.

	export VIRTUALENV_DISTRIBUTE=TRUE
    
Now if you create a virtualenv it'll install distribute by default. If you want this to be permanent, you can save the export statement to your ~/.bashrc or ~/.bash_profile or any of your startup scripts that you have.

2.
The config file is supposed to in the `~/.virtualenv` folder which may not exist. To create and edit a 

	sudo mkdir ~/.virtualenv && touch ~/.virtualenv/virtualenv.ini && nano ~/.virtualenv/virtualenv.ini
    
    
Format:

	[virtualenv]
    python = python3
    [/virtualenv]