---
title: Using the Elastic Beanstalk CLI
date: 2019-04-09

---

```bash
# Ubuntu / WSL Ubuntu
sudo apt install -y python python-pip

pip install awsebcli --upgrade --user

echo "export PATH=~/.local/bin:$PATH" >> ~/.bashrc
source ~/.bashrc

eb --version
```

```
EB CLI 3.15.0 (Python 2.7.1)
```

Links
---

- [Install the Elastic Beanstalk Command Line Interface (EB CLI)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)