---
title: Running system commands from within Python scripts
slug: running_system_commands_python_scripts
date: 2014-08-26
---

```python
import os
os.system('your command goes here')
```
    
The commands you can pass are operating system specific. For example, to clear the console screen in Windows, it'll be 

```python
os.system('cls')
```

and to clear the console screen in Mac it'll be 

```python
os.system('clear')
```

Both are OS specific commands for the same purpose.

You can read more about the **os** library in the Python documentation for os [v15.1](https://docs.python.org/2/library/os.html) in Python 2 and [v16.1](https://docs.python.org/3/library/os.html) in Python 3.

Basic Examples
---

#### Clear the screen

Win 
    
```python
os.system('cls')
```

Mac 

```python
os.system('clear')
```

#### Create a Directory

Win 

```python
os.system('mkdir dirNmae')
```

Mac 

```python
os.system('mkdir dirName')
```

#### Open a file (for example: config file after install)

Win 

```python
os.system('edit fileName')
```

Mac 

```python
os.system('nano config.php')
```

#### Deleting files (for example: temporary install files)

Win 

```python
os.system('del fileName')
```

Mac 

```python
os.system('rm fileName')
```

#### Download and Extract a tarball in a new folder and then move to the extracted folder (for exaple: download and install a software/script)
Mac 
	
```python
os.system('wget http://download/link/downloadName.tar.gz && mkdir folderName && tar zxvf downloadName.tar.gz --directory folderName && cd folderName')
```

Where:  

- **http://download/link/downloadName.tar.gz** = direct link for the file download
- **downloadName** = name of the downloaded file  
- **folderName** = the folder where ou are going to extract the files  
