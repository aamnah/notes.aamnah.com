---
title: Asset management in Flask
slug: asset_management_flask_webassets
category: Python
date: 2014-09-01
---

tags: css and javascript optimization

# How to merge, minify and compile the code of your web assets in Flask

webassets is an asset management library for Python. Flask-Assets is an integration of webassets in your Flask application.

While asset management in itself is pretty neat, the best part is that you can set it to  automatically merge, minify, and compile your asset files like CSS and JavaScript.

For example, if you work with Sass, you can set webassets to watch the sass file, merge multiple generated stylesheets into one and then minify it all and include that minified file in the project. Same goes for JavaScript files.

### About webassets

> webassets is a general, dependency-independent library for managing the assets of your web application. It can merge and compress your CSS and JavaScript files, supporting a wide variety of different filters, and supports working with compilers like CoffeeScript or Sass.

### About Flask-Assets

> Flask-Assets helps you to integrate webassets into your Flask application.

### 1. install

```python
pip install Flask-Assets
```
    
### 2. Create an environment

### 3. Defining assets
you need to define your assets, in the form of so called **bundles**, and register them with the environment. The easist way to do it is directly in code:

```python
from webassets import Bundle
js = Bundle('common/jquery.js', 'site/base.js', 'site/widgets.js',
        filters='jsmin', output='gen/packed.js')
my_env.register('js_all', js)
```




Links
---

- [Flask-Assets](http://flask-assets.readthedocs.org/en/latest/)
- [webassets](http://webassets.readthedocs.org/en/latest/)
- [Flask Blueprints](http://flask.pocoo.org/docs/0.10/blueprints/)
