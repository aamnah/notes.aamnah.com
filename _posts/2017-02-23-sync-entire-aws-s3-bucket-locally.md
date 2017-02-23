---
layout: post
title: How to sync an entire Amazon S3 bucket locally
permalink: /howto-sync-entire-aws-s3-bucket-locally
tags: ['aws', 's3', 'sync']
status: publish
---


### tl;dr

```bash
brew install awscli # MacOS
# apt-get update && apt install awscli -y # Ubuntu
# pip install --upgrade --user awscli # Unix
aws configure
aws s3 ls 
aws s3 sync s3://my-bucket . 
```


### install

```bash
pip install --upgrade --user awscli
```

to upgrade, run the same command above. To uninstall, `pip uninstall awscli`

### Ubuntu install
this is on a fresh Ubuntu system.

```bash
echo `python --version` `pip --version`
```

install pip

```bash
curl -O https://bootstrap.pypa.io/get-pip.py && python get-pip.py
pip --version
```

install AWS CLI

```bash
pip install awscli --upgrade --user
```


### configuration

```bash
aws configure
```
```
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-west-2
Default output format [None]: ENTER
```

For Amazon S3, region doesn't matter. But you must enter a value, so pick whichever you like from [here](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).

Default output format can be either `json`, `text`, or `table`. If you don't specify an output format, json will be used.  To skip having to specify anything hit ENTER.

You can change or update these later. The access_key and ID are stored in `~/.aws/credentials` and the region and default format are saved in `~/.aws/config`. You can also have multiple profiles with different configurations.

### List and sync buckets

```bash
# List all buckets
aws s3 ls
```

```bash
# Sync the 'my-bucket' bucket on S3 to current directory
aws s3 sync s3://my-bucket . 
```

Links
---

- [AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [AWS CLI Command Reference: sync](http://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)
- [StackOverflow: Downloading an entire S3 bucket?](http://stackoverflow.com/questions/8659382/downloading-an-entire-s3-bucket)