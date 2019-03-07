---
title: Getting started with Windows Subsystem for Linux (WSL)
date: 2019-02-17
---

- Enable Developer Mode
- Install Windows Subsystem for Linux
- Install Ubuntu from the Store

Run PowerShell as Administrator and run the following command:

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```


- You can use `bash` coammands to navigate instead of wnidows commands.
- You can also use `bash` in VS Code Terminal now. Edit your VS Code settings and update the Terminal path (Integrate > Shell: Windows).

```
C:\Windows\System32\bash.exe
```

- You can easily `apt install` a lot of stuff and use it on Windows.
- You can easily `ssh` into your servers, no need for _Putty_ any more.

![Bash in VS Code Terminal](/img/vscode-bash-wsl.jpg)


Links
---
- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- https://docs.microsoft.com/en-us/windows/wsl/troubleshooting
