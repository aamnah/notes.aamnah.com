Source: [[Youtube] Nixie Pixel: Top 5 Command Line Essentials - BASH Basics](https://www.youtube.com/watch?v=DbC6vQLczQA)
## 5. wget
### download files

    wget -O filename http://url.com

`-O` is for `--output-document`. This flag let's you specify the file to which save in/as. an output document

```
-O file
--output-document=file
```
> Use of -O is not intended to mean simply "use the name file instead of the one in the URL;" rather, it is analogous to shell redirection: 
`wget -O file http://foo` is intended to work like `wget -O - http://foo > file;` file will be truncated immediately, and all downloaded content will be written there.
           
           
           
           
`-c` is for `--continue`
> Continue getting a partially-downloaded file.  This is useful when you want to finish up a download started by a previous instance of Wget, or by another program.  For instance:

    wget -c ftp://sunsite.doc.ic.ac.uk/ls-lR.Z
    
## 4. grep
### find text or patterns within files

    grep -i -R towel 

grep everything on your computer for towel.

`-i` is for `--ignore-case`, case insenitive search
`-r` is for `--recursive`, read all files under each directory recursively
`-R` is for `--dereference-recursive`, read all files under each directory recursively and follow symlinks too, unlike `-r` which only follows suymlinks if they are on the command line.

## 3. nano
### editor - simple yet versatile
nano is installed by default in most distros. and it is WYSIWIG, unlike Vim.

## 2. ps
### process status, good for power users

    ps aux
OR 

    ps -aux

sort by cpu usage:

    ps -aux k%cpu
    
find how much resources a program is using by piping the result to grep

    ps -aux | grep chromium
    
kill a program

    kill -9 pid 


## 1. shh
### secure login to virtual location

    ssh nixie@home.nixiepixel.com -D 8080
    