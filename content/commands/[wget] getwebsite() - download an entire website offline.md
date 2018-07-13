---

title: '[wget] How to store an entire website offline'
date: 2014-08-26
lastmod: 2017-03-16
---

```bash
wget --random-wait -r -p -e robots=off -U mozilla http://yoursite.com
```

OR, as a bash function added to `~/.bash_profile` (MacOS) or `~/.bashrc` (Linux)

```bash
# Download an entire website
# -p --page-requisites: get all the elements that compose the page (images, CSS and so on)
# -e robots=off you don't want wget to obey by the robots.txt file
# -U mozilla as your browsers identity.
# --random-wait to let wget chose a random number of seconds to wait, avoid get into black list.
# Other Useful wget Parameters:
# -k --convert-links: convert links so that they work locally, off-line.
# --limit-rate=20k limits the rate at which it downloads files.
# -b continues wget after logging out.
# -o $HOME/wget_log.txt logs the output

getwebsite() {
    wget --random-wait -r -p -e robots=off -U mozilla $1
}
```

To use the bash function

```bash
getwebsite http://websitelink.com
```    
    
## wget options

- `--random-wait` This option causes the time between requests to vary between 0.5 and 1.5 * wait seconds

- `-r` recursive retreiving

- `-p` for `--page-requisites`, download all the files that are necessary to properly display a given HTML page. This includes such things as inlined images, sounds, and referenced stylesheets.

- `-e` for executing commands. `-e robots=off` is the command being sent in this instance.

- `-U` for `--user-agent` equal to `--user-agent=mozilla`. Identify as Mozilla to the HTTP server.


Links
---
- [Mastering wget](http://lifehacker.com/161202/geek-to-live--mastering-wget)
- [How to download all files from a website using wget](http://stackoverflow.com/questions/8755229/how-to-download-all-files-from-a-website-using-wget)
- [Downloading an Entire Web Site with wget (advanced)](http://www.linuxjournal.com/content/downloading-entire-web-site-wget)
- [explainshell](http://explainshell.com/explain?cmd=wget+--random-wait+-r+-p+-e+robots%3Doff+-U+mozilla)
