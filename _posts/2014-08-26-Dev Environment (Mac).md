---
layout: post
---
#Dev Environment (Mac)
How to Check the Version of a Script/Tool `toolName --version`


[homebrew](http://brew.sh)
---

[Install](https://github.com/Homebrew/homebrew/wiki/installation) 

	ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Once you’ve installed Homebrew, insert the Homebrew directory at the top of your PATH environment variable. You can do this by adding the following line at the bottom of your **~/.bashrc** file

	export PATH=/usr/local/bin:/usr/local/sbin:$PATH


update: `brew update`
check outdated: `brew outdated`
upgrade: `brew upgrade`
upgrade specific package: `brew upgrade package`
troubleshoot: `brew doctor`

mongodb
---
[install](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
	
    brew update && brew install mongodb --with-openssl

Create the data directory

	mkdir -p /data/db

`-p` is for creating intermediate directories as required.

#####Set permissions for the data directory.
Before running **mongod** for the first time, ensure that the user account running **mongod** has read and write permissions for the directory.


...
To have launchd start mongodb at login:

    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents

Then to load mongodb now:

	launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist

Or, if you don't want/need launchctl, you can just run:
    
    mongod --config /usr/local/etc/mongod.conf

#Python

[Installing Python on Mac OS X (Python 2.7, Homebrew, Pip, Setuptools & Virtualenv)](http://docs.python-guide.org/en/latest/starting/install/osx/)
[Upgrading Python to v3.x](http://wolfpaulus.com/jounal/mac/installing_python_osx/)

pip
---

[Install](http://pip.readthedocs.org/en/latest/installing.html) 

	wget https://bootstrap.pypa.io/get-pip.py && python get-pip.py

Upgrade 

	sudo pip install -U pip

If setuptools (or distribute) is not already installed, **get-pip.py will install setuptools** for you.

**Pip is worth using over easy_install for its uninstall capabilities alone, but I should mention that pip is actively maintained while setuptools is mostly dead.**

[setuptools](https://pypi.python.org/pypi/setuptools)
---

[Install](https://pypi.python.org/pypi/setuptools#unix-including-mac-os-x-curl) 

	curl https://bootstrap.pypa.io/ez_setup.py -o - | python

Upgrade 

	pip install -U setuptools
    
virtualenv
---

Install

	sudo pip install virtualenv
    
    
Installing MySQL
---
- `brew doctor` and fix any errors
- `brew update` update packages 
- (optional) run upgarde `brew upgrade` afterwards. upgrade might take some time
- `brew install mysql` install mysql
- `unset TMPDIR`
- `mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp`
- `mysql.server start`
- run the commands Brew suggests, add MySQL to `launchctl` so it automatically launches at startup

mysql should now work and be running all the time as expected

####Info

To connect:
	
    mysql -uroot

To have launchd start mysql at login:
    
    ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
Then to load mysql now:
    
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
Or, if you don't want/need launchctl, you can just run:
    
    mysql.server start


---
To start mysqld at boot time you have to copy `support-files/mysql.server` to the right place for your system

Set password:
	
    /usr/local/opt/mysql/bin/mysqladmin -u root password 'new-password'
    /usr/local/opt/mysql/bin/mysqladmin -u root -h Serenity.local password 'new-password'

Alternatively you can run:

	/usr/local/opt/mysql/bin/mysql_secure_installation

which will also give you the option of removing the test databases and anonymous user created by default.  This is strongly recommended for production servers.


Start/Stop/Restart MySQL: `mysql.server start`, `mysql.server stop` and `mysql.server restart`
    
    
See option: `brew info mysql`



#Other Tools


**[wget](http://www.gnu.org/software/wget/)** `brew install wget`
**[nano](http://en.wikipedia.org/wiki/GNU_nano)** `brew install nano`
**[tree](http://www.computerhope.com/unix/tree.htm)** `brew install tree`
**[GRC](http://kassiopeia.juls.savba.sk/~garabik/software/grc.html)** `brew install grc` and then 

	echo 'source "`brew --prefix grc`/etc/grc.bashrc"' >> ~/.bash_profile
so new shell sessions start using GRC.

install all tools in one go with the following command:

	brew doctor && brew update && brew upgrade && brew install wget && brew install nano && brew install tree && brew install grc && echo 'source "`brew --prefix grc`/etc/grc.bashrc"' >> ~/.bash_profile


Resource links:
---
[why you should be using pip and virtualenv](http://www.davidfischer.name/2010/04/why-you-should-be-using-pip-and-virtualenv/)
MySQL install: [Uninstall all those broken versions of MySQL and re-install it with Brew on Mac Mavericks](https://coderwall.com/p/os6woq)
Installing multiple brew packages in one go: [Is it safe to run multiple brew install commands at the same time?](http://superuser.com/questions/428713/is-it-safe-to-run-multiple-brew-install-commands-at-the-same-time)

LAMP on Mac
---
[Installing Apache, PHP, and MySQL on Mac OS X](http://jason.pureconcepts.net/2012/10/install-apache-php-mysql-mac-os-x/)
[Native LAMP stack](http://www.astonishdesign.com/blog/native-lamp-stack-mac-os-x)
[How to install Apache and PHP on a Mac with OSX 10.8](http://machiine.com/2013/how-to-install-apache-and-php-on-a-mac-with-osx-10-8-mamp-part-1/)
[Install MySQL on Mac OSX using Homebrew](http://blog.joefallon.net/2013/10/install-mysql-on-mac-osx-using-homebrew/)
[Reset MySQL root password on Mac OS](http://gistpages.com/2013/07/15/reset_mysql_root_password_on_mac_os)
[How to Change the MySQL root Password in Linux or OSX via Command Line](http://coolestguidesontheplanet.com/how-to-change-the-mysql-root-password/)