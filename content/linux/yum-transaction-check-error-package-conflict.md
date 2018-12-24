---
title: "Yum Transaction Check Errors & Dependencies/Package Conflicts"
slug: yum-transaction-check-error-package-conflict
date: 2015-01-19
---

```
Transaction Check Error:
  file /etc/pki/tls/certs/ca-bundle.crt from install of openssl-0.9.8e-32.el5_11.x86_64 conflicts with file from package openssl-0.9.8e-26.el5_9.1.i686
  file /usr/share/man/man1/ca.1ssl.gz from install of openssl-0.9.8e-32.el5_11.x86_64 conflicts with file from package openssl-0.9.8e-26.el5_9.1.i686
  file /usr/share/man/man1/req.1ssl.gz from install of openssl-0.9.8e-32.el5_11.x86_64 conflicts with file from package openssl-0.9.8e-26.el5_9.1.i686
  file /usr/share/man/man1/x509.1ssl.gz from install of openssl-0.9.8e-32.el5_11.x86_64 conflicts with file from package openssl-0.9.8e-26.el5_9.1.i686
```

This can happen if:

- package architecture is different (32-bit vs 64-bit)
- package source/repo is different
- you have a newer package installed while the repo you are trying to 'update' from has an older version
- package already installed is 32-bit but 32-bit packages are excluded in /etc/yum.conf so it won't update

This issue was resolved by adding `multilib_policy=best` to `/etc/yum.conf`.

Troubleshooting
---

### 1. Check if it's a conflict btween 32bit and 64bit architecture
Packages ending in **.i686** are 32-bit and packages ending in **.x86_64** are 64-bit.

You can configure the yum client to update only a package of the exact architecture installed on the system. 

(**Tip**: If you are unsure of what system architecture your server has, run: `uname -m`. If it shows i?86, you have a 32-bit system. i386/i486/i586/i686 are all 32-bit. If it shows x86_64, you have a 64-bit system).

Perform the following steps to remove duplicate packages (i.e. 32-bit and 64-bit packages installed on server which is causing the dependency issues).

Install the `yum-utils` package:

```bash
yum install yum-utils
```

The `package-cleanup --dupes` lists all duplicate packages:

```bash
package-cleanup --dupes
```

The `package-cleanup --cleandupes` removes the duplicates (it asks for a confirmation to remove all duplicates unless the -y switch is given):

```bash
package-cleanup --cleandupes
```

Edit `/etc/yum.conf`, set the following line:

```bash
exactarch=1
```

Run `yum` command:

```bash
yum clean all
yum update
```
    
If the conflict is only due to the fact that yum isn't trying to update the 32 bit packages along with the 64 bit ones, this will solve the conflict.

**Note**: If all above procedure fail, you can also check your *exclude* content in `/etc/yum.conf` file. Sometimes 32Bits Packages are in the yum blacklist and system will prevent it to install and you will see the Transaction Check Error.

```bash
# grep -i exclude /etc/yum.conf
exclude=kernel*,*.i?86
```

**Note 2**: In case the systems cannot be connected to the internet for security reasons, one could replace the files with the **rpm** command as follow:

```bash
rpm -Uvh --replacefiles openssl-*.rpm
```

---
On CentOS 5 yum defaults to
	
```bash
multilib_policy=all
```

which means ‘install all available architectures of packages’. This was changed in CentOS 6 to default to

```bash
multilib_policy=best
```

which means ‘install the best packages for my architecture’ which on x86_64 means it will install x86_64 packages unless the packages is only available in a 32 bit format.

To fix this problem on CentOS 5, you need to add `multilib_policy=best` to your `/etc/yum.conf`. 

You can optionally remove all the i386, i686, and other 32 bit friends with

```bash
yum remove *.i386 *.i486 *.i586 *.i686
```

but be careful since you might actually need one of those 32 bit pacakges.

CentOS has an entry in [their FAQ](http://wiki.centos.org/FAQ/General#head-357346ff0bf7c14b0849c3bcce39677aaca528e9) about how to deal with this although I don’t like their solution since it will exclude all 32 bit RPMs, including ones that you might end up needing some day. It will also cause problems with your updates if you add it on a server that already has a bunch of 32 bit RPMs installed since yum will no longer be able to update them.

### 2. Sync/Update Repo Lists

The issue can happen if you have a newer package installed than the one you are trying to install from the repo. <a href="http://unix.stackexchange.com/questions/113442/centos-yum-errors-dependencies-conflict"><i class="fa fa-link"></i></a> 

In this case **openssl-0.9.8e-32.el5_11.x86_64** is the newer version, released seven days ago, that you have already installed. The repo you are using to update has the older version **openssl-0.9.8e-26.el5_9.1.i686**, and so it creates a conflict.

To fix this in future, make sure not to install packages from other repositories (or outside of YUM) that replace other core OS packages with their own versions (if that is what actually happened).

This could happen because of a repo sync issue. Should just be a matter of waiting for the mirrors to get in sync; however, don't forget to try `yum clean all`, or at least `yum clean metadata`  if bandwidth limited and you want to avoid cleaning the package cache, and then `yum update`.


### 3. Resolve Package Conflicts

#### Figure out where the package came from
To fix this, first figure out where your package came from. Do an `rpm -qi package-name` to get some more information on its source. 

#### If no dependencies, delete and re-install
What I would to, assuming you **don't have another package that depends on that specific version**, is to temporary delete it: `rpm -e package-name`, then re-install it with yum. 

You can try this `yum list | grep package-name`. It will list package-name in different packages, then you can make a decision to remove one of them and install package again.

(Tip: Do `rpm -q --whatrequires openssl` to see the packages that use openssl).

#### Force downgrade
Or, grab the version of *package-name* from your YUM repo that matches the package you are trying to install, and use `rpm --force` to force a downgrade of it.

#### Replace Files
Replacing files from another RPM package is bad idea in most cases and I strongly advice against what you're trying to do. That said, apply following at your own risk.

Yum does not provide an option to install conflicting files, I think. However, that does not prevent you from installing a RPM package with rpm(1) which does provide an option to override existing files from another package, namely `--replacefiles`.

So, first get the RPM of the package you want to install on a local filesystem (`/usr/local/xenco...` makes me suspect that is the case already). Next install the RPM with `rpm -i --replacefiles <your_rpm_file>`.

### 4. Misc. Fixes

#### Enable Repos
If getting **No package *package-name* available.**, Check repo lists by running `yum repolist all`.

To enable a repo, edit the file **/etc/yum.repos.d/CentOS-Base.repo** and change `enabled=0` to **1** and try again.

#### --skip-broken
If you are desperate, skip broken packages/updates by running yum update with `--skip-broken`.

Links
---

- [yum update or yum install fails with package conflict between 64 bit and 32 bit package architectures ?](https://access.redhat.com/solutions/158883)
- [What is a yum package conflict?](http://stackoverflow.com/questions/16243209/what-is-a-yum-package-conflict)
- [Centos : yum errors : dependencies conflict](http://unix.stackexchange.com/questions/113442/centos-yum-errors-dependencies-conflict)
- [Disable yum transaction check for file conflict](http://stackoverflow.com/questions/21246680/disable-yum-transaction-check-for-file-conflict)
- [yum - package conflicts](http://www.linuxquestions.org/questions/fedora-35/yum-package-conflicts-548028/)
- [Repo sync issues](https://www.centos.org/forums/viewtopic.php?t=18032)
- [64 Bit CentOS Installing 32 Bit Packages](http://blog.nexcess.net/2012/07/19/64-bit-centos-installing-32-bit-packages/)
