---
layout: post
title: fileconveyer
permalink: fileconveyer
tags: 
- backups
- sync
---

### Install FileConveyer:	
Change to the directory you want to hold the fileconveyor files, then run:

```bash
sudo apt install git python-setuptools && sudo easy_install pip && sudo pip install -e git+https://github.com/wimleers/fileconveyor@master#egg=fileconveyor
```

```bash
sudo nano src/fileconveyor/fileconveyor/config.xml
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
	<!-- Sources -->
	<sources ignoredDirs="">
  	<source name="test" scanPath="/var/www/html/test" />
	</sources>

	<!-- Servers -->
	<servers>
  	<server name="Rackspace Cloud Files" transporter="cloudfiles">
    		<username>USERNAME</username>
    		<api_key>APIKEY</api_key>
    		<container>CONTAINER</container>
  	</server>
	</servers>
	<!-- Rules -->
	<rules>
  	<rule for="test" label="Test">
    	<destinations>
      	<destination server="Rackspace Cloud Files" path="test" />
    	</destinations>
  	</rule>
	</rules>
</config>
```

Add this to /etc/rc.local  

```
/usr/bin/python/db_backups/fileconveyor/fileconveyer/arbitrator.py
```