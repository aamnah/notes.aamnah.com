    wget --random-wait -r -p -e robots=off -U mozilla

OR, as a bash function

    getwebsite() {
      wget --random-wait -r -p -e robots=off -U mozilla $1
    }

# To use the bash function:

    getwebsite http://websitelink.com
    
    
# Explanation:

`--random-wait` This option causes the time between requests to vary between 0.5 and 1.5 * wait seconds

`-r` recursive retreiving

`-p` for `--page-requisites`, download all the files that are necessary to properly display a given HTML page. This includes such things as inlined images, sounds, and referenced stylesheets.

`-e` for executing commands. `-e robots=off` is the command being sent in this instance.

`-U` for `--user-agent` equal to `--user-agent=mozilla`. Identify as Mozilla to the HTTP server.

[explainshell](http://explainshell.com/explain?cmd=wget+--random-wait+-r+-p+-e+robots%3Doff+-U+mozilla)