---
layout: post
title: Bash Scripts -  Load/Read/Include Settings from Another File
permalink: load-read-settings-from-another-file-bash-script
tags: ['bash', 'script']
---

To include a script into another script, we use the `source` command. In it's simplest form, the command is this:

    {% highlight bash %}
        source incl.sh
    {% endhighlight %}

Here's an example. Our **keys.cfg** file has this:

    {% highlight bash %}
    AWSAccessKeyId="AKIAIKRGQQKRGQQKRGQQ"
    AWSSecretKey="UNYDSEUNYDSEUNYDSEmwMeIdQ6KRGQQv7dBdzDSE"
    {% endhighlight %}

While our **script.sh** has this:

    {% highlight bash %}
    #!/bin/bash 

    #Directory the script is in (for later use)
    SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

    # Load the backup settings
    source "${SCRIPTDIR}"/keys.cfg
    {% endhighlight %}

In our **script.sh** file we have sourced the file **keys.cfg** which contains configuration settings which we can now use.


If you attempt to execute that shell script from a location other than the one where your script is, it can't find the include unless it's in your path. As a workaround we have defined **SCRIPTDIR** and made the scripts relative to one another.

If the file you are including is in the same directory you can use `dirname $0`:

    {% highlight bash %}
    #!/bin/bash
    source $(dirname $0)/incl.sh
    echo "The main script"
    {% endhighlight %}


An alternative to: 

    {% highlight bash %}
    scriptPath=$(dirname $0)
    {% endhighlight %}
is:

    {% highlight bash %}
    scriptPath=${0%/*}
    {% endhighlight %}

.. the advantage being not having the dependence on dirname, which is not a built-in command (and not always available in emulators)


Resources
---
- [Bash: How _best_ to include other scripts?](http://stackoverflow.com/questions/192292/bash-how-best-to-include-other-scripts)
- [Source Command](http://bash.cyberciti.biz/guide/Source_command)