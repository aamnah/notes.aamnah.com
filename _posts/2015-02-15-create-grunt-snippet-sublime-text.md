---
layout: post
title: Create Grunt Snippets in Sublime Text
description: create Emmet like snippets for Grunt tasks and Gruntfile.js in Sublime Text
permalink: create-grunt-snippet-sublime-text
tags: grunt, snippet, workflow

---

First things first, read [How to create a Snippet in Sublime Text]({{site.url}}create-sublime-text-snippet/) for some basics.

To create a snippet in Sublime Text you save it with a file extension of **.sublime-snippet** in the Packages folder (`/Users/yourname/Library/Application Support/Sublime Text 3/Packages/User` on a Mac).

**Quick Tip:** You can use the shortcut Cmd+Shift+G and paste `~/Library/Application Support/Sublime Text 3/Packages/User` to open the folder.

For every snippet that you want to add, you create a new file.

Let's start!

Create a file called `grunt.sublime-snippet` in the packages folder. Add the following to it:

    {% highlight xml %}
    <snippet>
      <description>Gruntfile.js Skeleton</description>
      <tabTrigger>grunt</tabTrigger>
      <content><![CDATA[
    module.exports = function(grunt) {

      // Configure task(s)
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      });

      // Load the plugin(s)
      grunt.loadNpmTasks( );

      // Register task(s)
      grunt.registerTask('default', [ ]);
    };
    ]]></content>
    </snippet>
    {% endhighlight %}

Save the file and restart Sublime. Now whenever you type `grunt` and press `Tab`, it'll insert the initial Grunt config code for you. Let's add some more snippets for common plugins. You should of course edit the following template code with your own preferences. Add them in their respective `name.sublime-snippet` files in the Packages fodler.

uglify
---
    {% highlight xml %}
    <snippet>
      <description>Minify files with UglifyJS</description>
      <tabTrigger>uglify</tabTrigger>
      <content><![CDATA[
      uglify: {
        // Basic compression
        my_target: {
          files: {
            'dest/output.min.js': ['src/input1.js', 'src/input2.js']
          }
        }
      },
    ]]></content>
    </snippet>
    {% endhighlight %}

cssmin
---
    {% highlight xml %}
    <snippet>
      <description>Minify CSS</description>
      <tabTrigger>cssmin</tabTrigger>
      <content><![CDATA[
        cssmin: {
        // Combine two files into one output file
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'output.css': ['foo.css', 'bar.css']
            }
          }
        },

        cssmin: {
        // Minify all contents of a release directory and add a .min.css extension
          target: {
            files: [{
              expand: true,
              cwd: 'release/css',
              src: ['*.css', '!*.min.css'],
              dest: 'release/css',
              ext: '.min.css'
            }]
          }
        },
    ]]></content>
    </snippet>
    {% endhighlight %}

imagemin
---
    {% highlight xml %}
    <snippet>
      <description>Minify Images</description>
      <tabTrigger>imagemin</tabTrigger>
      <content><![CDATA[
        imagemin: {                          // Task
          static: {                          // Target
            options: {                       // Target options
              optimizationLevel: 3,
              svgoPlugins: [{ removeViewBox: false }],
              use: [mozjpeg()]
            },
            files: {                         // Dictionary of files
              'dist/img.png': 'src/img.png', // 'destination': 'source'
              'dist/img.jpg': 'src/img.jpg',
              'dist/img.gif': 'src/img.gif'
            }
          },
          dynamic: {                         // Another target
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: 'src/',                   // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'dist/'                  // Destination path prefix
            }]
          }
        },
    ]]></content>
    </snippet>
    {% endhighlight %}

watch
---
    {% highlight xml %}
    <snippet>
      <description>Run predefined tasks whenever watched file patterns are added, changed or deleted</description>
      <tabTrigger>watch</tabTrigger>
      <content><![CDATA[
        watch: {
          scripts: {
            files: ['**/*.js'],
            tasks: ['jshint'],
            options: {
              spawn: false,
            },
          },
        },
    ]]></content>
    </snippet>
    {% endhighlight %}

s3
---
    {% highlight xml %}
    <snippet>
      <description>https://github.com/jpillora/grunt-aws</description>
      <tabTrigger>s3</tabTrigger>
      <content><![CDATA[
        aws: grunt.file.readJSON("credentials.json"),
        s3: {
        // upload all files inside build/ into my-awesome-bucket:
          options: {
            accessKeyId: "<%= aws.accessKeyId %>",
            secretAccessKey: "<%= aws.secretAccessKey %>",
            bucket: "my-awesome-bucket"
          },
          build: {
            cwd: "build/",
            src: "**"
          }
        },
    ]]></content>
    </snippet>
    {% endhighlight %}

Here is a [bash script to add all grunt snippet files in one go](https://gist.github.com/aamnah/582eb66781b20d8534ee). Open a Terminal and go to the folder you downloaed the script in. For example: `cd ~/Downloads` to go to the downloads folder. Run the script by typing `bash grunt-snippets.sh`. It will add all the above snippets to the packages folder.






