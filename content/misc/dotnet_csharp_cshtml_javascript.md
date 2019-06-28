---
title: Showing C# variables in JavaScript
date: 2019-04-29
---

We need the `appSetting` values from `Web.config` inside our application, let's say we need to `console.log()` the application version:


```xml
<!-- Web.config -->
<configuration>
  <appSettings>
    <add key ="appVersion" value="6.5.10" />
  </appSettings>
</configuration>
```

You can either define a variable inside a C# code block and reference it in a `<scrip>` tag or call the value directly inside the `<script>` block. with `@` (e.g. `@foo` or `'@ConfigurationManager.AppSettings["appVersion"]'`). 

You can reference the key value using `ConfigurationManager.AppSettings["appVersion"];`, and you have to add 

```cshtml
<!-- foo.cshtml -->

@using System.Configuration

@{
    var appVersion = ConfigurationManager.AppSettings["appVersion"];
}

<script>
    console.info('app version 2: ' + '@ConfigurationManager.AppSettings["appVersion"]'); // app version 2: 6.5.10
    console.info( 'app version 3: ' + '@appVersion'); // app version 3: 6.5.10
    console.info(`App Version 4: @appVersion`); // App Version 4: 6.5.10
</script>
```

```cshtml
<!-- foo.cshtml -->

@using System.Configuration

<script>
		let version = '@ConfigurationManager.AppSettings["appVersion"]';

    console.info(`Application Version: ${version}`); // Application version 6.5.10
</script>
```

   
Links
---
- [ASP.NET Web Configuration File](https://www.c-sharpcorner.com/UploadFile/puranindia/Asp-Net-web-configuration-file/)