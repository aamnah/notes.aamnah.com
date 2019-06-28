---
title: Setting and Using application variables in .NET MVC
date: 2019-04-29
status: draft
---


- You do that in `Web.config`
- You can have multiple config files for differnt setups, for example: `Web.alpha.config`, `Web.beta.config`, `Web.Release.config` and `Web.config`

```xml
<configuration>
  <appSettings>
	  <add key="PayPalReturnUrl" value="http://blah.com/subscribe/paypal-response" />
  </appSettings>
</configuration>
```

```csharp
@using System.Configuration

private static readonly string C_REDIRECT_URL = ConfigurationManager.AppSettings["PayPalReturnUrl"];
```