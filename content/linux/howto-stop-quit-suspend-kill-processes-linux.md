---

title: Stopping, Quitting, Suspending and Killing Processes in Linux
date: 2014-06-21 06:12:50.000000000 +05:00
type: post
categories:
tags:
- linux
---

ctrl + c  (Interrupt)
---
``ctrl + c`` aka **Keyboard Interrupt** will interrupt your program which most programs will exit. This is useful when you start a program that just has been running for a really long time and you want to close it because you don't want it to take up all your shell and you don't really need to run it or maybe you used a command with the wrong arguments

ctrl + d  (Disconnect)
---
``ctrl+c`` won't work in Python. Instead it'll just keep saying KeyboardInterrupt. To actually close the program you'll have to ``ctrl+d``. **D** stands for **Disconnect** and it'll disconnect you from a process. This is used most often for getting out of the shell. It'll close (logout) the shell for you.

ctrl + z  (Suspend)
---
``ctrl+z`` takes you out of the process and **suspends** it. puts it in the backgtound. kind of like minimizing it. if we want to see all the processes we can type ``jobs`` and it'll give us a list of the processses in teh background. If you want to go back to the proess (foreground) you type ``fg``. Typing ``bg`` will resume that process in the background so that it'l continue


kill  (Terminate)
---
``kill`` as the name implies kills or terminates a process. You can kill the process by typing ``kill PID`` where PID is the Process ID.  
**Tip**: You can find the Process ID by using the ``top`` command. Or by using grep to find a process like ``ps aux | grep 'apache2'``. In the results of the grep seacrh, the second column would be the process ID column and the first column would have the username that owns that process.)

quitting Vim
---
Type ``:quit`` to exit Vim. ``ctrl+c`` won't work but Vim will catch the interrupt and tell you how to exit.  

quitting Man pages
---
To quit a man (manual) page, type ``q``.

Links
---

- [Source - Intro to Shell (Practical Unix Lecture 2 of 24) - 15:28](http://openclassroom.stanford.edu/MainFolder/VideoPage.php?course=PracticalUnix&video=intro-shell&speed=100)
