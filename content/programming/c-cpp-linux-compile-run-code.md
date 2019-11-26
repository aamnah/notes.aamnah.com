---
title: Running and Compiling C/C++ code on Linux
date: 2019-11-17
---

C/C++ support is usually already there on Ubuntu

```bash
g++ --version
gcc --version
```

- If not, install `build-essential`
- `build-essential` includes `gcc`, `g++` and `make` as well as `libc-dev`

```bash
sudo apt install build-essential manpages-dev
```

The file extension is `.cpp` on Linux or `.C`

Sample program

```
hello.cpp
```

```c
#include <stdio.h>

int main() {
  printf("bonjour le monde!");
  return 0;
}
```

### Compile code

```
g++ hello.cpp
```

By default it'll generate a file called `a.out`

```bash
g++ hello.cpp -o output
```

`output` will be the generated binary file

### Run code

```bash
./output
```