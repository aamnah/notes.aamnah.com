---
title: Image Optimization on a Linux server
permalink: image-optimzation-linux-jpegoptim
ctime: 2016-06-20
mtime: 2017-03-13
---

# jpegoptim

You can do a test run with the `-n` aka `--noaction` flag. It will print results without taking any action

    jpegoptim -n img/
    
## opencart directories with images
- image/catalog/
- catalog/view/

```sh
#!/bin/bash

# optimize-images.sh

install() {
  # Install tools if not already installed
  sudo apt-get install jpegoptim optipng
}


optimize_jpeg() {
  # jpegoptim -pqt --all-progressive *.jpeg
  
  # -p, --preserve, Preserve file modification times.
  # -q, --quiet, Quiet mode.
  # -t, --totals, Print totals after processing all files.
  # --all-progressive, Force  all output files to be progressive.
  
  find -type f -name "*.jpg" -exec jpegoptim -pqtn --all-progressive {} \;
}

optimize_png() {
  find -type f -name "*.png" -exec optipng -simulate -quiet {} \;
  echo "Optimizing PNGs.. .. "
}

install
optimize_jpeg
optimize_png

echo "Success: Image files have been optimized."
```

Links 
---
- [How to Optimize and Compress JPEG or PNG Images in Linux Commandline](http://www.tecmint.com/optimize-and-compress-jpeg-or-png-batch-images-linux-commandline/)
- [How to use Jpegoptim recursively](http://www.mariusc.name/how-use-jpegoptim-recursively/58/snippets)

