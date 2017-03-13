`tar` creates a compressed archive. the file extension of the resulting archive is `.tar` and the tar archives are called `tarballs`.. 

> GNU ‘tar’ saves many files together into a single tape or disk archive, and can restore individual files from the archive.


A `.tar` file is an archive, but it's not compressed. `.tar.gz` is a an archive that is compressed.

## Flags
`c` is for create, --create a new archive
`v` is for --verbose, verbosely list files processed, list out files as they are added to the archive
`f` is for --file=ARCHIVE, use archive file or device ARCHIVE, basically, specify the tar file that you wanna create. Since `f` lets you take an input it should always be the last flag..

`tar` can also work off of STDIN and STDOUT, `f` lets you specify if you wanna work with an existing tar file or if you wanna create one.

`z` is for compression, --compress (gzip) and --uncompress (gunzip)
`x` is for --extract
`t` is for --list, list the contents of an archive
`r` is for --append, add more files to an existing archive
`u` is for --update
`-p` restore permissions (can only be ysed with `x`)
`-P` preserve pathnames
`-k` Keep (don't overwrite) existing files

## Example `tar` commands:

compress a dir:

    tar -cvf archive.tar dir-to-archive

compress multiple files

    tar -cvf archive.tar file1 file2 file3
    
compress multiple files and dirs

    tar -cvf archive.tar dir1 dir2 file2 file3

## Compresses tar archives
You can compress on the fly with the `z` flag

    tar -czvf archive.tar.gz dir-to-archive

You can also use `gzip` on a tarball to compress it.

    gzip archive.tar

## Extract tarballs
Use the `x` flag instead of `c`

Extract all files from archive.tar.

    tar -xf archive.tar

Extract a compressed tarball

    tar -xzvf archive.tar.gz 

### Extract tarballs while restoring permissions
Use the `-p` flag. It's to 

> Restore permissions (including ACLs, owner, file flags)
   
## List the contents of a tarball without extracting it
Use the `t` or `--list` flag

    tar -tzvf archive.tar.gz 


Handy when you wanna know what's in a tarball, or to see if it'll extract in the current dir or in it's own subdir. Sometimes, you get a _tar bomb_ when a tarball starts extracting all the files in your current dir instead of making its own folder.. Potentially clobbering files in your current dir, like README or something, that you might already have in the folder you are working in.


## Getting a single file out of a tarball

## Add more files to a previously created archive
Use the `r` flag

## Update the archive with new files
Use the `u` flag. It updates the archive with new files, it also updates the existing files to their newer versions. 
> only append files newer than copy in archive

## Read compressed files
`cat` in a compressed file is `zcat`. Use `zcat` to read files in an archive..

Notes:
---
- `f` should be the last flag because it takes an option
- it makes more sense to start flags with `c`, `x` and `t` so it's clear right away if you are creating, extracting or listing..

---
- [YouTube: CLImagic: Linux tar command tutorial](https://www.youtube.com/watch?v=CUdwDEKlDrw)
- [YouTube: Nixie Pixel: Linux Commands 101 : Tar / GZ File Compression & Archive](https://www.youtube.com/watch?v=yR0r_3svzUU)