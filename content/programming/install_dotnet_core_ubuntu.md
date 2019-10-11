---
title: Install .NET Core on Debian Ubuntu (19.04)
date: 2019-10-09
---

```bash
# Register Microsoft key and feed
wget -q https://packages.microsoft.com/config/ubuntu/19.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb

# Install the .NET SDK
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install -y dotnet-sdk-3.0

# disable telemetry
export DOTNET_CLI_TELEMETRY_OPTOUT=1
```

Verify install

```bash
dotnet --info
```


Links
---

- [Install .NET Core SDK on Linux Ubuntu 19.04 - x64](https://dotnet.microsoft.com/download/linux-package-manager/ubuntu19-04/sdk-current)

