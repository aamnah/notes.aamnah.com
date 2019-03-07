---
title: Check Network Up/Down Link speed
date: 2019-03-05
---

tl;dr

```bash
sudo apt install -y speedtest-cli
speedtest
```

---

### Ubuntu 18.04

```bash
sudo apt update
sudo apt install -y speedtest-cli

# run
speedtest
```

### Older Linux
```bash
wget -O speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py --no-check-certificate
chmod +x speedtest-cli

# run
./speedtest-cli
```
