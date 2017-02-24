---
layout: post
title: Page Speed Optimizations
permalink: page-speed-optimzations
---

- Eliminate render-blocking JavaScript and CSS in above-the-fold content
	- [Remove render-blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
	- Optimize CSS Delivery
- [Enable compression](https://developers.google.com/speed/docs/insights/EnableCompression) (Apache: Use [mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html))
- [Improve server response time](https://developers.google.com/speed/docs/insights/Server)
- Leverage browser caching
- Minify JavaScript
- Minify CSS
- Minify HTML
- [Optimize Images](https://developers.google.com/speed/docs/insights/OptimizeImages)

Apache Server Configuration and httpd.conf / .htaccess
---

#### Sample Configurations
The HTML5 Boilerplate project contains [sample configuration files](https://github.com/h5bp/server-configs) for all the most popular servers with detailed comments for each configuration flag and setting: find your favorite server in the list, look for the **gzip** section, and confirm that your server is configured with recommended settings. 

Copy and use the [.htacces template](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess) template.

You need to enable the Apache mods required for the configurations used in the template. On Linux, open a terminal and:

	sudo a2enmod setenvif headers deflate filter expires rewrite include 
    sudo /etc/init.d/apache2 restart

Enabling Website Compression in WHM/cPanel
---
If on a CentOS/cPanel server, use EasyApche to enable the 'Deflate' module. Software > EasyApache (Update Apache). Once you have the 'Deflate' module enabled, you'll have to enable compression for each individual website under cPanel > Software/Services > Optimize Website. 

See the cPanel documentation about [enabling mod_deflate and using the 'Optimize Website' option](https://documentation.cpanel.net/display/EA/Apache+Module:+Deflate).

	



Resources
---
- [Apache Server Configs](https://github.com/h5bp/server-configs-apache)
- [How to enable Apache modules](https://github.com/h5bp/server-configs-apache/wiki/How-to-enable-Apache-modules)
- [server-configs-apache/dist/.htaccess](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess)
- [cPanel Docs - Apache Module: Deflate](https://documentation.cpanel.net/display/EA/Apache+Module:+Deflate)
- [Check Gzip Compression](http://checkgzipcompression.com/)
Further Reading
---
- [Optimizing encoding and transfer size of text-based assets](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#text-compression-with-gzip)
- [Google PageSpeed Module](https://developers.google.com/speed/pagespeed/module)