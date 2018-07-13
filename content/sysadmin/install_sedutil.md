---
title: Install sedutil on Ubuntu
date: 2018-01-08
---


```bash
# download sedutil

# make sure requisite libs are installed 
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential g++

# install make tools
sudo apt install autoconf -y

# build sedutil (run from project root)
autoreconf -i
./configure
make
```

Enable TPM `libata.allow_tpm=1` by editing the GRUB config

```bash
sudo nano etc/default/grub
```

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash libata.allow_tpm=1"
```

```
sudo update-grub
reboot
```

Add `sedutil-cli` to `$PATH` so that it can be executed from anywhere in the shell

```bash
export PATH=$PATH:/home/aamnah/sedutil/sedutil-cli
sudo ln -s /home/aamnah/sedutil/sedutil-cli /usr/bin/sedutil-cli
source ~/.bashrc
```

Link
---
- [sedutil: Building sedutil](https://github.com/Drive-Trust-Alliance/sedutil/wiki/Building-sedutil)
- [How do you build on Linux?](https://github.com/Drive-Trust-Alliance/sedutil/issues/168)
- [](http://jorgenmodin.net/index_html/how-to-encrypt-your-linux-machine-and-session-with-a-self-encrypting%20disk)