Delete files found:

    find . -type f -name FILENAME -exec rm -rf {} \;

For example

    find . -type f -name .DS_Store -exec rm -rf {} \;