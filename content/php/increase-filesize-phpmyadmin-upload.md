---

title: increasing file size for PHPMyAdmin uploads
slug: increase-filesize-phpmyadmin-uploads
date: 2016-02-25

---

Issue: 

- I cannot upload big dump files (memory, HTTP or timeout problems).
- Can not import a database (Max: 2,048KiB) 

```bash
nano /etc/php5/apache2/php.ini # PHP5
nano /etc/php/7.0/apache2/php.ini # PHP7
```

```apacheconf
post_max_size = 128M
memory_limit = 128M
upload_max_filesize = 64M # this is what corresponds with the file upload size in phpMyAdmin
```

Tip: Use `ctrl+W` to look for these settings.

```bash
service apache2 reload
```

http://docs.phpmyadmin.net/en/latest/faq.html#faq1-16
