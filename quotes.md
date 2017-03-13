---
layout: default
title: Quotes
permalink: /quotes/
---

<div>
{% for quote in site.quotes %}
  <blockquote>
    {{ quote.title }}
    <cite>{{ quote.cite }}</cite>
  </blockquote>
{% endfor %}
</div>