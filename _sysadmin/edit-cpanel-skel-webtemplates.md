---
title: cPanel Web Templates and Skeleton Directory
subtitle: Edit content for cPanel status pages and  website templates for newly created accounts
ctime: 2017-07-05

---

### Web Templates

```
/var/cpanel/webtemplates/user/english/
```

Web templates are default template `.tmpl` files that are shown for status pages.

- Default Website Page (Has not yet been configured by the domain owner)
- Account Move (Has moved)
- Account Suspended (Has been suspended)
- Connection Selection (Is experiencing a connection or firewall problem)

The files to edit are:

```
/var/cpanel/webtemplates/user/english/default.tmpl
/var/cpanel/webtemplates/root/english/moving.tmpl
/var/cpanel/webtemplates/root/english/redirect.tmpl
/var/cpanel/webtemplates/user/english/suspended.tmpl
```

Web Templates can also be edited via _WHM > Account Functions > Web Template Editor_

### Skeleton Directory

```
/root/cpanel3-skel
```

This directory is what will be used as a skeleton for **new accounts**. For example if you place an `index.html` file in `/root/cpanel3-skel/public_html`, and then setup a new account, that account will have a copy of your `index.html` in their `public_html` directory.


