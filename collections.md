---
layout: default
title: Archive
permalink: /archive/
---

{% comment %}
- Loops though every collection defined in `_config.yml`, except `_posts` and grabs the pages they contain; outputting titles.
- If a `title` for the collection is specified in `_config.yml` use it, else use `collection.label` as name
- Using an `unless` condition to exclude certain collections
{%  endcomment %}

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

<div class='collections'>
{% for collection in site.collections %}
  {% assign name = collection.label %}
  {% unless name == 'posts' or name == 'quotes' %}

  {% if collection.title %}
  <h2>{{ collection.title }}</h2>
  {% else %}
  <h2>{{ name }}</h2>
  {% endif %}
  <ul>
    {% for article in site.[name] %}
      <li><a href="{{ article.url }}">{{ article.title }}</a></li>
    {% endfor %}
  </ul>

  {% endunless %}
{% endfor %}
</div>