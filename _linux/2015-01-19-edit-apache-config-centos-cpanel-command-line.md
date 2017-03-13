---
layout: post
title: Editing Apache Configuration on a cPanel/CentOS Server
permalink: edit-apache-config-centos-cpanel-command-line
---

According to cPanel docs, it's easier to use EasyApache for configuring and regenerating Apache. If you want the recommended way, skip this article. I'm more of a command line gal, so i'll go ahead and detail the process of editing **httpd.conf** from the command line, enabling some modules, adding configurations, retaining the configuration and checking if your configuration has been preserved.

On Debian/Ubuntu it's easier to enable a module. You run the command `a2enmod` followed by the name of the module and it gets enabled. Then you restart Apache by running another command `sudo /etc/init.d/apache2 restart` so your configurations take effect.

On a CentOS (cPanel runs on CentOS) server however, you have to edit the **httpd.conf** file and add the modules we want loaded (or use EasyApache). Then you run a few commands to make sure your configuration changes aren't lost upon subsequent regeneration of the configuration file.

	nano /etc/httpd/conf/httpd.conf
    
To have modifications retained, all modifications must be checked into the configuration system by running: 
	
    /usr/local/cpanel/bin/apache_conf_distiller --update
    
To see if your changes will be conserved, regenerate the Apache configuration file by running: 

	/usr/local/cpanel/bin/build_apache_conf

Running EasyApache via Command Line
---

	/scripts/easyapache

Create a new profile, save it and then build from that profile.

Further info
---

### httpd.conf vs .htaccess
Simply put, **httpd.conf** is what applies to the whole server and **.htaccess** is what applies to individual accounts. There is only one httpd.conf for the whole server. Every individual website/account has it's own .htaccess. In most cases when you are on shared hosting, you will not have access to httpd.conf but you are free to create/modify your .htaccess file.

Using `.htaccess` files slows down Apache, therefore, if you have access to the main server configuration file (which is usually called `httpd.conf`), you should add your configuration there.

*.htaccess* is in `/home/username/public_html` while *http.conf* is in `/etc/httpd/conf/http.conf`


Sources
---
- [How do I enable apache modules from the command line in RedHat?](http://serverfault.com/questions/56394/how-do-i-enable-apache-modules-from-the-command-line-in-redhat)
- [cPanel Docs - Easy Apache](https://documentation.cpanel.net/display/EA/EasyApache)
- [cPanel Docs - Easy Apache - Custom Templates](https://documentation.cpanel.net/display/EA/Custom+Templates)
