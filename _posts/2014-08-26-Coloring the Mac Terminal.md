---
layout: post
title: Coloring the Mac Terminal
tags: ['bash', 'how-to']

---

## Adding colors to `ls` and `tree`

Enabling Colors
---
Edit `~/.bash_profile` or `~/.profile` and add the following two lines:

    {% highlight bash %}
	export CLICOLOR=1
	export LSCOLORS=ExFxCxDxBxegedabagacad
    {% endhighlight %}

you can use this if you are using a black background:

    {% highlight bash %}
	export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx
    {% endhighlight %}


`LSCOLORS="ExGxBxDxCxEgEdxbxgxcxd"` will emulate the default colouring on the linux ls command.
 
Making it permanent
---
You can add
	
    {% highlight bash %}
	alias ls='ls -Gp'
    alias tree="tree -C"
    {% endhighlight %}

to your `~/.bash_profile` to ALWAYS get colored `ls` and `tree` output. 

`-G` enables colorized output and the `-p` adds a slash after each directory. the `-C` turns on colorization for the tree command.

Customizing Colors (Mac)
---
The format is as follows: `LSCOLORS=ExFxCxDxBxegedabagacad`

LSCOLORS needs 11 sets of letters indicating foreground and background colors.

1. directory
2. symbolic link
3. socket
4. pipe
5. executable
6. block special
7. character special
8. executable with setuid bit set
9. executable with setgid bit set
10. directory writable to others, with sticky bit
11. directory writable to others, without sticky bit

The possible letters to use are:

    {% highlight bash %}
	//COLORS
    a  black
    b  red
    c  green
    d  brown
    e  blue
    f  magenta
    c  cyan
    h  light grey
    
    //BOLD CLOLORS
    A  block black, usually shows up as dark grey
    B  bold red
    C  bold green
    D  bold brown, usually shows up as yellow
    E  bold blue
    F  bold magenta
    G  bold cyan
    H  bold light grey; looks like bright white
    
    //DEFAULT
    x  default foreground or background
    {% endhighlight %}

| place | key | foreground | background | meaning |
|-------|-----|------------|------------|---------|
| 1 | directory | E | x | bold blue with default background for directories |
| 2 | symlink   | F | x | bold magenta with default background for symlinks |

**Note:** at this point i believe that you can not specify colors based on file extensions (for example, pink for image files extension like .jpeg,.jpg,.png or brown for code file extensions like .html, .js, .php etc.) You can do that in the GNU version of ls though, so i think that one is more powerful. Plus GNU ls has a better color specifying format in the form of `LS_COLORS="di=01;90:ow=01;90"`

adding colors to `grep` matches
---
add the following to `~/.bash_profile`
	
    {% highlight bash %}
    # Tell grep to highlight matches
	export GREP_OPTIONS='--color=auto'
    {% endhighlight %}

adding colors to common `logfiles`
---
    {% highlight bash %}
    brew install grc
	echo 'source "`brew --prefix grc`/etc/grc.bashrc"' >> ~/.bash_profile   
    source ~/.bash_profile
    {% endhighlight %}


Links:
---
- [How can I configure Mac Terminal to have color ls output?](http://apple.stackexchange.com/questions/33677/how-can-i-configure-mac-terminal-to-have-color-ls-output)
- [Configuring LSCOLORS (Mac)](http://geekology.co.za/article/2009/04/how-to-enable-terminals-directory-and-file-color-highlighting-in-mac-os-x)
- [OS X Lion Terminal Colours](http://backup.noiseandheat.com/blog/2011/12/os-x-lion-terminal-colours/)
- [Generic Colouriser - for logfiles](http://kassiopeia.juls.savba.sk/~garabik/software/grc.html)