---
title: DFrontend Development setup on Windows 10
date: 2019-06-27
status: draft
---

Can't believe i'm writing this one.. But need to use a Windows machine for work..

## chocolatey

This is the Homebrew equivalent for Windows

Open `cmd` as Administrator and run this command:

```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

## yarn

```bash
choco install yarn
```

## Links

- Chocolatey](https://chocolatey.org/docs/installation)
