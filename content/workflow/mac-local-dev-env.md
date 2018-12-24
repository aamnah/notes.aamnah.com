---

title: Set up Apache, PHP, MySQL, PHPMyAdmin on macOS Sierra
subtitle: Set up a local web development environment on your Mac machine
status: draft
slug: macos-local-development-environment
date: 2017-07-16

---

**See this [bash script to install a local AMP setup on macOS](https://github.com/aamnah/bash-scripts/blob/master/install_amp_macos.sh)**

---

#### Why not just MAMP?
Becaus i was running low on space. MAMP takes about 1.8GB+ on my current MacBook Air with 128GB of base storage.. I am assuming this local setup takes much less space. XAMPP also takes about 2GB+, which is too much when i just want a simple local server with PHP.

<div class="Post-note">
You will need to run some commands as the root (super) user. You can switch to root with <code>sudo -s</code> or <code>sudo su -</code>
</div>

### Apache
Apache is already installed on macOS Sierra 

```bash
httpd -v # check version (Apache/2.4.23 on Sierra) 
sudo apachectl start # start Apache
sudo apachectl stop # stop Apache
sudo apachectl restart # restart Apache
sudo apachectl -k restart # -k will force a restart immediately
sudo apachectl configtest # test Apache setup (good for troubleshooting)
sudo apachectl -S # verify Virtual Hosts
tail -f /usr/local/var/log/httpd/error_log # error log
```

You should see the **It Works!** text on **http://localhost**.

Install and auto-start with Homebrew (and disable built-in)

```bash
sudo apachectl stop # stop built-in Apache
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist 2>/dev/null # stop any auto-loading scripts
brew install httpd # install Apache with Homebrew
sudo brew services start httpd  # Auto-start Apache on boot
```



TO BE CONTINUED...

Links
---

- https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-macos-sierra/
- https://medium.com/@JohnFoderaro/how-to-set-up-apache-in-macos-sierra-10-12-bca5a5dfffba
- https://jason.pureconcepts.net/2016/09/install-apache-php-mysql-mac-os-x-sierra/
- https://jason.pureconcepts.net/2016/09/upgrade-php-mac-os-x/
