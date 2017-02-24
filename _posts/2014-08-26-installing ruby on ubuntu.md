---
layout: post
title: Install Ruby on Ubuntu
---
    
```bash	
# update packages
sudo apt-get update
# install curl if not already there
sudo apt-get install curl -y
# install RVM
\curl -L https://get.rvm.io | bash -s stable
# load RVM
source ~/.rvm/scripts/rvm
# install RVM dependencies
rvm requirements

# install ruby
rvm install ruby
# use default ruby version (latest)
rvm use ruby --default
# install rubygems
rvm rubygems current
# install Rails
gem install rails
```

notes
---
- the setup seems to be user specific

issues
---
- `rvm requirements` needs to be run as root. may require a password.  sudo rvm rquiremenst for some unknown reason does not seem to work.

more on rvm requirements issue
---
- the error happens when there are broken sources in /etc/apt/sources.list or /etc/apt/sources.list.d/*.list [x](http://stackoverflow.com/questions/19373560/why-do-i-get-a-requirements-error-when-trying-to-install-ruby-with-rvm)
- the broken source list is because "Ubuntu 12.10 is not supported any more since May 2014. You either need to update to a more recent version of Ubuntu (i.e. 14.04), or find an alternative repository." [x](http://askubuntu.com/questions/499738/not-able-to-install-software-on-ubuntu-12-10) 
- **solution** `sudo apt-get update && sudo apt-get install update-manager-core && sudo do-release-upgrade` [x](http://www.cyberciti.biz/faq/howto-upgrade-to-ubuntu-14-04-from-ubuntu-13-10-or-12-04/)
- **the problem with the solution**: Ubuntu can only be updated to the next version. Direct upgrades to the latest version only works LTS to LTS. In my case, the server is still on 12.10 (12.04 was LTS, the latest at the moment is 14.04 has already arrived) the best strategy at this point is to [take backups](http://askubuntu.com/questions/298334/unable-to-locate-package-update-manager-core) and restore on a fresh install of latest version.

Links
---

- [How To Install Ruby on Rails on Ubuntu 12.04 LTS (Precise Pangolin) with RVM](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm)