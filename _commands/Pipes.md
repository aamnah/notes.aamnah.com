## Pipe `|`
Pipes the output of one command as the input of another.

Let's you put commands together

`grep` commands are very commonly used with piped input.

For example:

    ls /etc/ | grep cron

![Screenshot 2015-12-15 21.41.00.png](resources/58645197D063C1A991B08017959BA667.png)

You can use multiple pipes

    ls /ect/ | grep cron | grep daily
![Screenshot 2015-12-15 21.41.13.png](resources/889E42C22618ED63A939ED9E63D2D5A5.png)

Another example is:

    curl -s http://link.com | bash 

will pass in the output of the curl command as the input of the bash command, which basically means you can now run commands off of internet scripts/files.