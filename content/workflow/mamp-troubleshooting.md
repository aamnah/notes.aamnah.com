---
title: Troubleshooting MAMP
date: 2017-10-02
---

#### tl;dr
Disable the **Opera Turbo** feature

----

#### Issue

MAMP is not working, gives

```
Connection refused: localhost:8888
```

It was working the night before, nothing has been changed in terms of settings.. Going to 127.0.0.1:8888 worked, but didn't load any resources (jpegs, css etc.).


#### Things i have tried:

- restart MAMP (didn't work)
- change ports and restart (didn't work)
- ping localhost to see if i get a response (pinged just fine)

```bash
ping localhost
```
- re-installed MAMP (my version was one minor release older so what the heck, didn't work)
- Flush DNS cache (didn't work)

```bash
sudo dscacheutil -flushcache
```

This gave a `Connection refused; localhost:8888` on `localhost` but `127.0.0.1` works and shows me the start page. If i click 'My Website' from the start page, redirects to localhost and gives the error. 

- Check logs (no issues there). The MAMP logs are in `/Applications/MAMP/logs`

```
[Mon Oct 02 22:32:11 2017] [error] [client 127.0.0.1] client denied by server configuration: /Applications/MAMP/htdocs/.DS_Store
```

So i deleted all `.DS_Strore` files in the `/Applications/MAMP/` folder. 

```bash
find . -name '.DS_Store' -exec rm -rf {} \;
```

Didn't help.

- Turn off Opera Turbo. SOLVED! The only change i had made was to my browser,  i use Opera and had enabled the Opera Turbo feature that speeds up website loading. That was the issue. Sites work now, everything loads just fine.
