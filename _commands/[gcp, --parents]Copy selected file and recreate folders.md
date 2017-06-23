---
layout: post
title: Copy selected files and recreate folder structure
permalink: copy-files-recreate-folder-structure
ctime: 2017-06-23
---

### Why? 
Makes it easier to copy a default OpenCart extension. Finds the files by name and copy them while also creating the required folder structure.

### How
Use the `cp` command with `--parents` flag. 

```bash
cp --parents admin/controller/extension/payment/bank_transfer.php easypaisa/
```

Won't work on macOS by default, so `brew install coreutils` first and then use `gcp` instead of `cp`

```bash
gcp --parents admin/controller/extension/payment/bank_transfer.php easypaisa/
```

```
easypaisa
└── admin
    └── controller
        └── extension
            └── payment
                └── bank_transfer.php
```

Examples
---

### Extract/Clone an OpenCart Extension with one command

```bash
find . -iname 'bank_transfer.*' -exec gcp --parents {} foo/ \;
```

`{}` will be replaced with the path name of the file. The last token, `\;` is there only to mark the end of the exec expression. `foo` is the directory you're assumed to have created before running the command

Basically, with `find` and `gcp` you have extracted a particular extension.

```
../bank_transfer/
├── admin
│   ├── controller
│   │   └── extension
│   │       └── payment
│   │           └── bank_transfer.php
│   ├── language
│   │   └── en-gb
│   │       └── extension
│   │           └── payment
│   │               └── bank_transfer.php
│   └── view
│       └── template
│           └── extension
│               └── payment
│                   └── bank_transfer.tpl
└── catalog
    ├── controller
    │   └── extension
    │       └── payment
    │           └── bank_transfer.php
    ├── language
    │   └── en-gb
    │       └── extension
    │           └── payment
    │               └── bank_transfer.php
    ├── model
    │   └── extension
    │       └── payment
    │           └── bank_transfer.php
    └── view
        └── theme
            ├── default
            │   └── template
            │       └── extension
            │           └── payment
            │               └── bank_transfer.tpl
            └── mytheme
                └── template
                    └── extension
                        └── payment
                            └── bank_transfer.tpl
```

### Recreate and Rename an OpenCart extension with two commands
First, find and copy all the files (Assuming you have already created the new folder, in this case _easypaisa_)

```bash
find . -iname 'bank_transfer.*' -exec gcp --parents {} easypaisa/ \;
```

The thing with using `--parents` is that the destination must be a directory. So you can't copy _and_ rename files in one go, like you are usually able to do with `cp`.

Renaming files once they are copied is easy though, just run a `find` command to find all the copied files based on their name and rename all of them.

```bash
# TOO BUSY TO DO THE GOOGLE
# to-be-continued, will update the code if i ever get a chance later
```

Links
---
- [StackOverflow: How to have the cp command create any necessary folders for copying a file to a destination](https://stackoverflow.com/questions/947954/how-to-have-the-cp-command-create-any-necessary-folders-for-copying-a-file-to-a)
- [StackOverflow: How to run find -exec?](https://unix.stackexchange.com/questions/12902/how-to-run-find-exec)
- [StackOverflow: Find and copy files](https://stackoverflow.com/questions/5241625/find-and-copy-files)
