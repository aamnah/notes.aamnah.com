---
title: Redirections with .htaccess file
date: 2019-10-30
category: cheatsheets
---

Redirect the entire site (permanently)

```bash
Redirect 301 / https://newsite.com
```

Redirect a single page

```bash
Redirect 301 /oldpage.html https://newsite.com/newpage.html
```

You can specify any `3xx` redirection code. Here is a [list](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection)

### Redirect an old domain to a new domain

```bash
RewriteEngine On

RewriteCond %{HTTP_HOST} ^mydomain.com [OR]
RewriteCond %{HTTP_HOST} ^www.mydomain.com [OR]
RewriteRule ^(.*)$ https://www.newdomain.com/$1 [L,R=301,NC]
```

If the requested page (condition) is not `/wp-admin`, `/wp-login` or `wp-json`, redirect it (rule) to the the new domain while keeping the path intact (because we are checking for `REQUEST_URI`)

- `REQUEST_URI` is the path component of the requested URI, such as "/index.html". It does not include the domain before or the query string after
- a `RewriteRule` comes after one or many `RewriteCond`s and must much all the specified conditions bpreceding it in order to work

### Redirect an old domain to new domain, except a few pages

```bash
RewriteEngine On

RewriteCond %{REQUEST_URI} !^(/wp-admin)$
RewriteCond %{REQUEST_URI} !^(/wp-login)$
RewriteCond %{REQUEST_URI} !^(/wp-json)$
RewriteRule ^(.*)$ https://www.newdomain.com/$1 [L,R=301,NC]
```

### NOTES

- `RewriteCond` only applies to the `RewriteRule` immediately following it
- `(.*)` is different from `/(.*)`. `/(.*)` will match everything after the first `/` (excluding domain) while `(.*)` will match the entire URL (including domain)

#### RewriteCond directives

- the `$1` is a backreference. It matches the first grouped part (in parantheses) of the pattern. It is a reference that you can specify in the `RedirectRule` or `RedirectCond` and will match that rule/cond
- Matches in the regular expressions contained in the `RewriteCond`s can be used as part of the Substitution in the `RewriteRule` using the variables `%1`, `%2`, etc.


#### Common rewrite flags
- Flags aren't supposed to conatin _spaces_. `[R=301,NC,L]`, not `[R=301, NC, L]`. Spaces between flags is likely to get you a _bad flag delimiters_ error
- `R=301` is for permanent redirect
- `L` is to make `mod_rewrite` stop processing the rule set. If the rule matches, don't process any further rules
- If you're using `R`, use `L` as well to make sure you don't get _Invalid URI in request_ warnings.
- `NC` is for _no case_, meaning do a case-insensitive match

Links
---

- [RewriteRule Flags](https://httpd.apache.org/docs/current/rewrite/flags.html)
- [Regex vocabulary](https://httpd.apache.org/docs/current/rewrite/intro.html#regex)
- [.htaccess Regex Character Definitions](https://www.hostwinds.com/guide/defining-regex-characters-htaccess/)
- [RewriteCond Directive](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritecond)
- [details of variables](https://httpd.apache.org/docs/current/expr.html#vars)
- [validate htaccess file](http://www.htaccesscheck.com)
- [validate your regex](https://regex101.com/)
- [StackOverflow: Using .htaccess to redirect all pages except three](https://stackoverflow.com/a/13443314)
- [How can I redirect and rewrite my URLs with an .htaccess file?](https://help.dreamhost.com/hc/en-us/articles/215747748-How-can-I-redirect-and-rewrite-my-URLs-with-an-htaccess-file-)