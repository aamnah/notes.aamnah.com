## scp: Secure Copy

    scp fileName user@remoteServer:Location

[[scp] Secure Copy](quiver:///notes/B690295A-767D-48B3-A6A3-8334C32D4CAE) for more on `scp`


## SFTP: Secure FTP

By default, if we have openssh installed, we can use sftp.

Connect to a remote machine:

    sftp user@remoteServer

Once you have connected to a remote systems, you can copy files using `put`

For example:

    sftp> put myFile

will put myFile on your local machine to the machine you are connected to.

- See available sftp commands using `?`.
- Both scp and sftp go over Port 22 by default.