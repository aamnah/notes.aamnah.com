---
layout: post
title: Bash script to create a new Jekyll post
permalink: bash_script_to_create_new_jekyll_post
tags: ['bash', 'script', 'jekyll']

---

Getting Date
---

    {% highlight bash %}
    # Date
    DATE=`date +%Y-%m-%d`
    {% endhighlight %}

This will get today's date in YYYY-MM-DD format.

Stripping spaces and replacing with underscores
---
    {% highlight bash %}
    $ str="This is just a test"
    $ echo ${str// /_}
    This_is_just_a_test
    {% endhighlight %}


Taking it Further
---

### Make it a function
What's cooler than a bash script? A bash function! With a function, we don't have to specify script name/location every time. A bash function added to your `.bash_profile` will work globally anywhere in the Terminal. The command to run would then become like this:
    
    {% highlight bash %}
    jpost "My new post"
    {% endhighlight %}

To make the script a function, all you have to do is wrap the code in `functionname() { }` like so:

    {% highlight bash %}
    jpost() {
        // code goes here
    }
    {% endhighlight %}

### Take options
It's be nice if you could define options for your script and specify them at runtime. Like `-t` for **Type** and `-l` for **Layout**. Maybe a `-o` for **Opening** file in Sublime Text after it has been created.

So the command would become something like this:

    {% highlight bash %}
    jpost -t=markdown -l=post -o "My new post" 
    {% endhighlight %}

We can do this with the bash builtin `getopts`. Define our options like so:

    {% highlight bash %}
    while getopts "o" opt; do
        case $opt in
          o) open=1 ;;
        esac
    done
    {% endhighlight %}

And then modify our if statements accordingly. For example, if `-o` is provided, open the file in Sublime Text
    
    {% highlight bash %}
    # check for -o (open) argument
    if [ ! -z $open ]; then
        createPost
        # Open file in Sublime Text
        open -a "Sublime Text" $FILEPATH
    fi
    {% endhighlight %}

### Check if File already exists
A simple `if` statement can make sure that you are not overwriting existing files.

    {% highlight bash %}
    if (-e $FILENAME ); then
        echo "File already exists!"
    else
        // Run our code
    fi
    {% endhighlight %}

`-e` is the operator that checks if a file exists. `-s` is the operator that checks if file exists and is not empty.

### Color coded responses
A simple success or error message about the results of our command would be nice. What would be even nicer if they were red or green based on their run status.

I want it to say "File has been successfully created" (green text) when a file has been cerated without any errors. If a file already exists, it should say "File already exists!" (red text).

Let'd define some colors and use them in our script.

    {% highlight bash %}
    # COLORS
    Color_Off='\033[0m'       # Text Reset
    Red='\033[0;31m'          # Red
    Green='\033[0;32m'        # Green
    Yellow='\033[0;33m'       # Yellow

    echo -e "${Green}File was succesfully CREATED${Color_Off}""
    echo -e "${Red}File already EXISTS and is NOT EMPTY${Color_Off}"
    echo -e "${Yellow}File already EXISTS${Color_Off}"
    {% endhighlight %}

### Open the newly created file in editor
If you'd like to open all new files in your favorite editor after they are created, you can add that too. The following is what i have to open all post files in Sublime Text:

    {% highlight bash %}
    open -a "Sublime Text" $FILEPATH
    {% endhighlight %}

You should add this right after the file is created in your code.

<script src="https://gist.github.com/aamnah/f89fca7906f66f6f6a12.js"></script>

Resources
---
- Getting date in Bash: [YYYY-MM-DD format date in shell script](http://stackoverflow.com/questions/1401482/yyyy-mm-dd-format-date-in-shell-script)
- How to pass options to a Bash script: [getopts - How to pass command line options to shell script?](http://www.theunixschool.com/2012/08/getopts-how-to-pass-command-line-options-shell-script-Linux.html)
- Replace spaces ` ` with underscores `_` : [The easiest way to replace white spaces with (underscores) _ in bash](http://stackoverflow.com/questions/1706431/the-easiest-way-to-replace-white-spaces-with-underscores-in-bash)
- How to convert text to lower case in Bash [Converting string to lower case in Bash shell scripting](http://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting)
- [Getting the last argument passed to a shell script](http://stackoverflow.com/questions/1853946/getting-the-last-argument-passed-to-a-shell-script)