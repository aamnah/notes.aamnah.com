---
layout: post
title: Running system commands from within Python scripts
permalink: running_system_commands_python_scripts

---
    {% highlight python %}
	import os
    os.system('your command goes here')
    {% endhighlight %}
    
The commands you can pass are operating system specific. For example, to clear the console screen in Windows, it'll be 

    {% highlight python %}
    os.system('cls')
    {% endhighlight %} and to clear the console screen in Mac it'll be 

    {% highlight python %}
    os.system('clear')
    {% endhighlight %}. Both are OS specific commands for the same purpose.

You can read more about the **os** library in the Python documentation for os [v15.1](https://docs.python.org/2/library/os.html) in Python 2 and [v16.1](https://docs.python.org/3/library/os.html) in Python 3.

Basic Examples
---

#### Clear the screen
Win 
    
    {% highlight python %}
    os.system('cls')
    {% endhighlight %}

Mac 

    {% highlight python %}
    os.system('clear')
    {% endhighlight %}

#### Create a Directory
Win 

    {% highlight python %}
    os.system('mkdir dirNmae')
    {% endhighlight %}
Mac 

    {% highlight python %}
    os.system('mkdir dirName')
    {% endhighlight %}

#### Open a file (for example: config file after install)
Win 

    {% highlight python %}
    os.system('edit fileName')
    {% endhighlight %}
Mac 

    {% highlight python %}
    os.system('nano config.php')
    {% endhighlight %}

#### Deleting files (for example: temporary install files)
Win 

    {% highlight python %}
    os.system('del fileName')
    {% endhighlight %}
Mac 

    {% highlight python %}
    os.system('rm fileName')
    {% endhighlight %}

#### Download and Extract a tarball in a new folder and then move to the extracted folder (for exaple: download and install a software/script)
Mac 
	
    {% highlight python %}
    os.system('wget http://download/link/downloadName.tar.gz && mkdir folderName && tar zxvf downloadName.tar.gz --directory folderName && cd folderName')
    {% endhighlight %}

Where:  

- **http://download/link/downloadName.tar.gz** = direct link for the file download
- **downloadName** = name of the downloaded file  
- **folderName** = the folder where ou are going to extract the files  
