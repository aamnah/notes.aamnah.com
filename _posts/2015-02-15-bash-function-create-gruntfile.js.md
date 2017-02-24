---
layout: post
title: Write a Bash Function to Create a gruntfile.js for your project
description: "Create a **Gruntfile.js** with starter code everytime you type **gruntfile** in the Terminal"
permalink: bash-function-create-gruntfile.js
tags: how-to, bash, script, workflow

---

### Here is how it works
Everyt time i type `gruntfile` in the Terminal, it creates a **gruntfile.js** for me in the folder i am in. The resulting **gruntfile.js** has the following template code:

    {% highlight javascript %}
    module.exports = function(grunt) {
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // CONFIG

        });

        // PLUGINS
        grunt.loadNpmTasks('');

        // TASKS
        grunt.registerTask('default', ['', '']);
    };
    {% endhighlight %}

I can now add my Grunt config to it.

What i have done is create a function `gruntfile` for me and saved in my `.bash_profile` so it is available to me anywhere in the Terminal.


### Here is the code

    {% highlight bash linenos %}
    color_green='\033[92m' 
    color_red='\033[91m' 
    color_off='\033[0m'

    gruntfile() {
      if [ -e "gruntfile.js" ] ; then
        echo -e "${color_red}gruntfile.js already exists${color_off}"

        if [ -e "Gruntfile.js" ] ; then
          echo -e "${color_red}Gruntfile.js already exists${color_off}"
        fi

      else
      echo -e "
        module.exports = function(grunt) {
          grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            // CONFIG

            });

            // PLUGINS
            grunt.loadNpmTasks('');

            // TASKS
            grunt.registerTask('default', ['', '']);
        };
      " >> gruntfile.js

      echo -e "${color_green}Gruntfile has been created${color_off}"
      fi
    }
    {% endhighlight %}

Copy this code to the bottom of your `.bash_profile`.

Quit and re-open the Terminal after you are done editing. Alternatively, you can also run `source .bash_profile` to load the changes you just made.

Notes
---
- The `echo` command must be run with the `-e` flag to execute it as a command instead of just printing it out to the terminal.
- Also, `echo` only seems to work if you wrap the statement in double quotes `" "`. It will not work with single quotes `' '`
- Since there is no simple way of checking case-insensitively if a file exists, i have added an if statement twice to check for both `gruntfile.js` and `Gruntfile.js`
- I have added color coding so that it'll show a red response if the file already exists and a green one if a file was succesfully created after running the function.

If this all seems too technical, you can just [create a sublime text snippet for Grunt]({{site.url}}create-grunt-snippet-sublime-text).

The purpose of writing this is to show the possibilities of what you can do with bash scripts and **.bash_profile**. For example, you can set up [project templates](#) and create your whole directory structure by typing `new project`. You can add a license to your project [license files](#) by typing `license`. And much more.
