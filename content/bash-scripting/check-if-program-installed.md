---

title: Check if a program is installed
slug: check-if-program-installed
date: 2015-11-30
lastmod: 2017-03-13
---

They key is in using `hash` or `type` to see if a command is available. For example, the output of 

```bash
hash nano
```

will change based on whether `nano` is installed or not. If nano is installed, you'll get nothing. If `nano` is _not_ installed, you'll get an error.

So, we check for an error to see if something is not installed.

```bash
command -v foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

OR

```bash
type foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

OR

```bash
hash foo 2>/dev/null || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

Where `bash` is your shell/hashbang, consistently use `hash` (for commands) or `type` (to consider built-ins & keywords).

When writing a POSIX script, use `command -v`.

We can also use this in a function, like so:

```bash
gnudate() {
    if hash gdate 2>/dev/null; then
        gdate "$@"
    else
        date "$@"
    fi
}
```

### Using the `which` command

The `which` command tells you if a program is in the user's path. Being in the path usually means it is installed.

```bash
which homebrew
```

```bash
 # bash - will print nothing if it's not found
brew not found # zshell - will tell you not found
brew: Command not found # csh
```

Please note that the `which` command will tell you a program is installed **only if it’s in the `$PATH`**. So in cases where you have `brew` installed, but for some reason didn’t update the `$PATH` then which brew will tell you `homebrew not found`
I have had this happen to me when i made the switch from Bash to Zshell. Since all my paths were in my old `~/.bash_profile` and are not in the new `~/.zshrc`, it’s telling me stuff is not installed when it actually is.

```bash
➜  ~ git:(master) ✗ brew --version
Homebrew 1.3.6
Homebrew/homebrew-core (git revision fad42; last commit 2017-10-28)
➜  ~ git:(master) ✗ which -s homebrew
homebrew not found
➜  ~ git:(master) ✗ which homebrew
homebrew not found
```

`command -v brew` is a better alternative to `which brew`

Links
---

- [StackOverflow: Check if a program exists from a Bash script](http://stackoverflow.com/questions/592620/check-if-a-program-exists-from-a-bash-script)
- [StackOverflow: How to tell if homebrew is installed on Mac OS X](https://stackoverflow.com/a/21655733/890814)