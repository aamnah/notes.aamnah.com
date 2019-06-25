---
title: Upgrade nano to v4.3 on macOS
date: 2019-06-25
---

macOS Mojave has v2.0.6 installed whereas the latest is 4.3 at the time of this writing.

```bash
nano --version
```

```
 GNU nano version 2.0.6 (compiled 19:02:51, Feb 22 2019)
 Email: nano@nano-editor.org	Web: http://www.nano-editor.org/
 Compiled options: --disable-nls --enable-color --enable-extra --enable-multibuffer --enable-nanorc --enable-utf8
```

### Use Homebrew to install nano

```bash
# install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# use Homebrew to install nano
brew install nano
```

If you check the version now, it'll still show 2.0.6 because by default it uses the system version. The brew version is here: `/usr/local/Cellar/nano/4.3/bin/nano`

```bash
/usr/local/Cellar/nano/4.3/bin/nano --version
```

```
 GNU nano, version 4.3
 (C) 1999-2011, 2013-2019 Free Software Foundation, Inc.
 (C) 2014-2019 the contributors to nano
 Email: nano@nano-editor.org	Web: https://nano-editor.org/
 Compiled options: --disable-libmagic --enable-utf8
```

### Link to the right version

To make sure the Brew version of nano is run every time, you can:

- _symlink_ the bin file
- or add it as an _alias_
- or add it to _\$PATH_

```bash
ln -s /usr/local/Cellar/nano/4.3/bin/nano /usr/local/bin/nano
```

```bash
# ~/.aliases or ~/.bash_profile
alias nano=/usr/local/Cellar/nano/4.3/bin/nano
```

```bash
# ~/.bash_profile
export PATH="/usr/local/Cellar/nano/4.3/bin/nano:$PATH"
```

## Links

- [nano](https://www.nano-editor.org/)
- [nanorc](https://www.nano-editor.org/dist/v2.1/nanorc.5.html)
- [Homebrew](https://brew.sh/)
- [Change default version of Nano on Mac OS X](https://superuser.com/a/1274881/151497)
