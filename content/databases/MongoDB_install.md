---

title: Install MongoDB on MacOS
slug: install-mongodb-macos
date: 2017-03-05
status: publish
tags:
- how-to
- databases
---

## tl;dr

```bash
# install Homebrew if not installed already
# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install
brew install mongodb

# add MongoDB to startup processes
brew services start mongodb

# create the `/data/db` directory, where mongo data will live
mkdir -p /data/db

# Make sure the `/data/db` directory has the right permissions
sudo chown -R `id -un` /data/db

# Run the mongo daemon
mongod
# sudo mongod

# `quit()` to quit, `ctrl+c` to exit
```


### Using MongoDB Client CLI

```bash
# start mongo client
mongo 

mongo > help # see a list of commands available

mongo > show dbs # show all databases
mongo > use foo # use/switch to a database
mongo > show collections # show collections (like Tables in SQL dbs) in the database
mongo > db.foo.find() # show data inside a collection with `.find()`
```

Alternatively, you can use a free MongoDB management tool called [Robomongo](https://robomongo.org/)


Links
---
- [Treehouse: Installing MongoDB on a Mac](http://treehouse.github.io/installation-guides/mac/mongo-mac.html)
