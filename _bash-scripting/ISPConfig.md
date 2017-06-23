---
layout: post
title: Bash script for installing ISPConfig 3.1 on Ubuntu 17.04
status: draft
ctime: 2017-05-21

---

[source](https://www.howtoforge.com/tutorial/ubuntu-perfect-server-with-apache-php-myqsl-pureftpd-bind-postfix-doveot-and-ispconfig/)

```bash
### SYSTEM SETTINGS
####################

# Check your hostname
# cat /etc/hostname
# cat /etc/hosts
# reboot

# Change the default shell
dpkg-reconfigure dash # change to NO

# Update repos
apt update && apt upgrade -y

# Disable AppArmor
sudo service apparmor stop
sudo service apparmor teardown
sudo update-rc.d -f apparmor remove
sudo remove apparmor apparmor-utils -y

# Update system time zone
dpkg-reconfigure tzdata

# Synchronize the System Clock
apt install ntp -y

### COMPONENTS
#######################

# Disable and remove Sendmail
service sendmail stop; update-rc.d -f sendmail remove
# `Failed to stop sendmail.service: Unit sendmail.service not loaded.` 
# means Sendmail wasn't installed, carry on..

# Postfix
apt -y install postfix postfix-mysql postfix-doc openssl getmail4

# Dovecot
apt -y install dovecot-imapd dovecot-pop3d dovecot-mysql dovecot-sieve dovecot-lmtpd

# MySQL
apt -y install mysql-server mysql-client

# PureFTP
apt -y install pure-ftpd-common pure-ftpd-mysql

# rkhunter & binutils
apt -y install rkhunter binutils
## General type of mail configuration: <-- Internet Site
## System mail name: <-- server1.example.com

# 7. Install Amavisd-new, SpamAssassin, and Clamav
##################################################
apt-get -y install amavisd-new spamassassin clamav clamav-daemon zoo unzip bzip2 arj nomarch lzop cabextract apt-listchanges libnet-ldap-perl libauthen-sasl-perl clamav-docs daemon libio-string-perl libio-socket-ssl-perl libnet-ident-perl zip libnet-dns-perl postgrey

# The ISPConfig 3 setup uses amavisd which loads the SpamAssassin filter library internally, so we can stop SpamAssassin to free up some RAM
service spamassassin stop
update-rc.d -f spamassassin remove

# To start ClamAV use
freshclam
service clamav-daemon start

# The following error can be ignored on the first run of freshclam.
# ERROR: /var/log/clamav/freshclam.log is locked by another process
# ERROR: Problem with internal logger (UpdateLogFile = /var/log/clamav/freshclam.log).

# 7.1 Install Metronome XMPP Server (optional)
##############################################
# The Metronome XMPP Server provides an XMPP chat server. This step is optional, if you do not need a chat server, then you can skip this step. No other ISPConfig functions depend on this software.
apt-get -y install git lua5.1 liblua5.1-0-dev lua-filesystem libidn11-dev libssl-dev lua-zlib lua-expat lua-event lua-bitop lua-socket lua-sec luarocks luarocks

luarocks install lpc

# Add a shell user for Metronome.
adduser --no-create-home --disabled-login --gecos 'Metronome' metronome

# Download Metronome to the /opt directory and compile it.
cd /opt; git clone https://github.com/maranda/metronome.git metronome
cd ./metronome; ./configure --ostype=debian --prefix=/usr
make
make install

# Metronome has now be installed to /opt/metronome.

# 8. Install Apache, PHP, phpMyAdmin, FCGI, SuExec, Pear, and mcrypt
####################################################################

# Apache2, PHP 7, phpMyAdmin, FCGI, suExec, Pear, and mcrypt can be installed as follows:
apt-get -y install apache2 apache2-doc apache2-utils libapache2-mod-php php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-imap phpmyadmin php7.0-cli php7.0-cgi libapache2-mod-fcgid apache2-suexec-pristine php-pear php7.0-mcrypt mcrypt  imagemagick libruby libapache2-mod-python php7.0-curl php7.0-intl php7.0-pspell php7.0-recode php7.0-sqlite3 php7.0-tidy php7.0-xmlrpc php7.0-xsl memcached php-memcache php-imagick php-gettext php7.0-zip php7.0-mbstring

# You will see the following question:
# Web server to reconfigure automatically: <-- apache2 
# Configure database for phpmyadmin with dbconfig-common? <-- Yes
# MySQL application password for phpmyadmin: <-- Press enter

# Then run the following command to enable the Apache modules suexec, rewrite, ssl, actions, and include (plus dav, dav_fs, and auth_digest if you want to use WebDAV):
a2enmod suexec rewrite ssl actions include cgi
a2enmod dav_fs dav auth_digest headers

# To ensure that the server can not be attacked trough the HTTPOXY vulnerability, I will disable the HTTP_PROXY header in apache globally. 

# Create a new httpoxy.conf file
touch /etc/apache2/conf-available/httpoxy.conf

# Paste this content to the file
echo -e "<IfModule mod_headers.c>
    RequestHeader unset Proxy early
</IfModule>" > /etc/apache2/conf-available/httpoxy.conf

# Enable the config file by running:
a2enconf httpoxy

# Restart Apache afterward:
service apache2 restart


# 8.1 PHP Opcode cache (optional)
##############################################

# Opcache is a free PHP opcode cacher for caching and optimizing PHP intermediate code. APCu is a compatibility module which provides APC compatible functions for Opcache which is used by many CMS caching systems.  It is recommended to have these PHP extensions installed to speed up your PHP page.

# APCu can be installed as follows:
apt-get -y install php7.0-opcache php-apcu

# Now restart Apache:
service apache2 restart

### CONFIGURATION
#######################
nano /etc/postfix/master.cf
```

Links
---
- [DigitalOcean: How To Install ISPConfig3 on an Ubuntu 14.04 Server](https://www.digitalocean.com/community/tutorials/how-to-install-ispconfig3-on-an-ubuntu-14-04-server)
- [The Perfect Server - Ubuntu 17.04 (Zesty Zapus) with Apache, PHP, MySQL, PureFTPD, BIND, Postfix, Dovecot and ISPConfig 3.1](https://www.howtoforge.com/tutorial/ubuntu-perfect-server-with-apache-php-myqsl-pureftpd-bind-postfix-doveot-and-ispconfig/)