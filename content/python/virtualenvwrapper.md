---
title: virtualenvwrapper
category: Python
date: 2014-08-29
---

[Docs](http://virtualenvwrapper.readthedocs.org/en/latest/)

### Features

1. Organizes all of your virtual environments in one place.
2. Wrappers for managing your virtual environments (create, delete, copy).
3. Use a single command to switch between environments.
4. Tab completion for commands that take a virtual environment as argument.
5. User-configurable hooks for all operations (see [Per-User Customization](http://virtualenvwrapper.readthedocs.org/en/latest/scripts.html#scripts)).
6.Plugin system for more creating sharable extensions (see [Extending Virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/plugins.html#plugins)).

install:

```bash
pip install virtualenvwrapper
```

### setting up
We need to specify the directory that'll be the home of all of our virtual environments. To do that we need to set an environment variable `WORKON_HOME` and set it's value to our virtualenv home directory. We also need to source the actual virtualenvwrapper shell script that'll allow us to run virtualenvwrapper commands.

```bash
# Set the WORKON_HOME variable for virtualenvwrapper
export WORKON_HOME="~/.virtualenvs"

# Source the virtualenvwrapper shell script to be able to run commands
source /usr/local/bin/virtualenvwrapper.sh
```

All in one command:

```bash
echo -e '\n# Set the WORKON_HOME variable for virtualenvwrapper \nexport WORKON_HOME="~/.virtualenvs"' >> ~/.bash_profile && echo -e '\n# Source the virtualenvwrapper shell script to be able to run commands \nsource /usr/local/bin/virtualenvwrapper.sh' >> ~/.bash_profile && source ~/.bash_profile
```

### creating environments

	mkvirtualenv foo
    
Use `tab` for command auto-completion (or make an alias for the command).

Creating a virtual environment also automatically activates it (contrary to virtualenv).

to deactivate environment:

	deactivate

### change your current dir to virtualenv dir

	cdvirtualenv
    
    
### changing environments

get a list of all the virtual environments:
	
    workon

switch environnment:

	workon foobar
    
### packages
list packages for the environment:

	lssitepackages
    
go to site packages directory:

	cdsitepackages
    
    
### associating a project (code) foler with a virtual environment

Activate/switch to the virtual environment and cd to the project folder and run the command `setvirtualenvproject` while you have the **virtualenv activated**. For example:

	(foo)[~] $ cd ~/Sandbox/foo
    (foo)[~/Sandbox/foo] $ setvirtualenvproject

The `setvirtualenvproject` creates a `.project` file in the virtualenv directory and adds the path of the project to it. To remove the project connection all you have to do is delete this file.


### [hooks](http://virtualenvwrapper.readthedocs.org/en/latest/scripts.html#scripts)

Hooks basically let you run commands at certain intervals/places in the setup.
For example, `postmkvirtualenv` lets you run commands after an env is created, `postactivate` lets you automatically run commands right after an env is activated. `predeactivate` lets you run a command before an env is deactivated. These hook files are located in `$VIRTUAL_ENV/bin`
