---
layout: post
title: increasing file size for PHPMyAdmin uploads
permalink: increase-filesize-phpmyadmin-uploads
ctime: 2016-02-25

---

Issue: 
I cannot upload big dump files (memory, HTTP or timeout problems).


```bash
nano /etc/php5/apache2/php.ini
```

```
post_max_size = 128M
memory_limit = 128M
upload_max_filesize = 64M
```

http://docs.phpmyadmin.net/en/latest/faq.html#faq1-16