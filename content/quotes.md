---
title: Quotes
description: Some quotes about Linux, Technology and Programming
slug: quotes
sidemenu: true
date: 2017-03-02
---

<div>
{% for quote in site.quotes %}
  <blockquote>
    {{ quote.title }}
    <cite>{{ quote.cite }}</cite>
  </blockquote>
{% endfor %}
</div>