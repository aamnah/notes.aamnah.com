---
title: Get current URL in C# MVC (.cshtml) files
date: 2019-07-29
---


```
Request.Url.AbsolutePath : /virtual_dir/webapp/page
Request.Url.AbsoluteUri  : http://localhost:2000/virtual_dir/webapp/page?q=qvalue
Request.Url.Host         : localhost
Request.Url.Authority    : localhost:80
Request.Url.LocalPath    : /virtual_dir/webapp/page
Request.Url.PathAndQuery : /virtual_dir/webapp/page?q=qvalue
Request.Url.Port         : 80
Request.Url.Query        : ?q=qvalue
Request.Url.Scheme       : http
```

```cshtml
<a href="@Request.Url.AbsolutePath">Clear Search</a></p>
```

Here are a few more

```
Request.RawUrl             : /virtual_dir/webapp/page?q=qvalue
Request.Url.OriginalString : http://localhost:2000/virtual_dir/webapp/page?q=qvalue
Request.Url.ToString()     : http://localhost:2000/virtual_dir/webapp/page?q=qvalue
Url.Action()               : /virtual_dir/webapp/page?q=qvalue
```
