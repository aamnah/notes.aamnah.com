---

title: How to check if a user is root
date: 2014-06-05 04:02:25.000000000 +05:00
type: post
published: true
status: publish
categories:
- Bash
tags:
- bash
- scripts
---

Check for the user identifier: `$EUID`. `root` is always `0`.

```bash
#!/bin/bash
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 
   exit 1
fi
```

`$EUID -ne 0` basically means _if user is not root_

The following script will use the `whoami` command to see what user you are. If you are root, it'll continue running the script. If not, it'll exist the script telling you that you are not root and need to use sudo.
 
```bash
#!/bin/bash

owner=$(who am i | awk '{print $1}')
 
if [ "$(whoami)" != 'root' ]; then
  	echo "You don't have permission to run $0 as non-root user. Use sudo"
		exit 1;
fi
```

