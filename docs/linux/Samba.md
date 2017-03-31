# Setting up shared network between Ubuntu and Mac using Samba

Ubuntu 16.04 LTS

### Set a password for your user in Samba

```bash
sudo smbpasswd -a <username>
```


### Share a folder
Right click on folder > Properties > Share this folder


Now on Mac, `Cmd`+`K`, enter `smb://yourIPwhatever`, enter your username and password, and mount any of the folders you shared. You can share whole partitions or drives if you want. 

That's it.