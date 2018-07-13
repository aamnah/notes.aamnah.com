---

title: 'Bash Scripts -  Load/Read/Include Settings from Another File'
slug: load-read-settings-from-another-file-bash-script
date: 2015-02-20
lastmod: 2017-03-13
---

To include a script into another script, we use the `source` command. In it's simplest form, the command is this:

```bash
source incl.sh
```

Here's an example. Our **keys.cfg** file has this:

```bash
AWSAccessKeyId="AKIAIKRGQQKRGQQKRGQQ"
AWSSecretKey="UNYDSEUNYDSEUNYDSEmwMeIdQ6KRGQQv7dBdzDSE"
```

While our **script.sh** has this:

```bash
#!/bin/bash 

#Directory the script is in (for later use)
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Load the backup settings
source "${SCRIPTDIR}"/keys.cfg
```

In our **script.sh** file we have sourced the file **keys.cfg** which contains configuration settings which we can now use.


If you attempt to execute that shell script from a location other than the one where your script is, it can't find the include unless it's in your path. As a workaround we have defined **SCRIPTDIR** and made the scripts relative to one another.

If the file you are including is in the same directory you can use `dirname $0`:

```bash
#!/bin/bash
source $(dirname $0)/incl.sh
echo "The main script"
```

An alternative to: 

```bash
scriptPath=$(dirname $0)
```
is:

```bash
scriptPath=${0%/*}
```

.. the advantage being not having the dependence on dirname, which is not a built-in command (and not always available in emulators)


Resources
---
- [Bash: How _best_ to include other scripts?](http://stackoverflow.com/questions/192292/bash-how-best-to-include-other-scripts)
- [Source Command](http://bash.cyberciti.biz/guide/Source_command)
