---
layout: post
title: Delete ALL Unapproved comments in WordPress
tags: how-to
description: How-to delete all unapproved WordPress comments in one go via PhpMyAdmin
---
Make a backup first before changing anything.

Go to PhpMyAdmin and select the comments table (usually wp_comments). Go to the SQL tab and run the following command.

    {% highlight mysql %}
	DELETE FROM wp_comments WHERE comment_approved = 0
    {% endhighlight %}

That's all. 