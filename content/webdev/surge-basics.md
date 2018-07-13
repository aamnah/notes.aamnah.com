---
title: Surge deployments in 2 minutes
date: 2018-07-07
---

## tl;dr 

```bash
# install with npm
npm install --global surge

# OR install with yarn
yarn global add surge

# run
surge
```

- Enter an email and password to signup or login
- Select a directory to publish
- Enter a domain name
- Done!

---

### deployments

If you're already authenticated, you can directly pass in the directory with the `surge` command

```bash
# deploy a directory
surge /public
```

```bash
# deploy folder while passing the domain name as parameter
surge public/ --domain myfooo.surge.sh 
```

### save your domain name to a CNAME file
You can pass the domain name as a CLI parameter

```bash
surge --domain myfooo.surge.sh
```

Or you can save it as a CNAME file

```bash
echo myfooo.surge.sh > CNAME
```

When developing with Gastby, the CNAME file needs to be in the _root_ directory or in the _static_ folder so that it gets copied to your `public` folder upon build. 

### using a custom domain

Point your domain to `na-west1.surge.sh` or `45.55.110.124`

```
# with a CNAME record (@, www)
na-west1.surge.sh
```

```
# with an A/AAA record (*)
45.55.110.124
```

```bash
# deploy to your custom domain
surge path-to-project/ mydomain.com

# save custom domain name to avoid entering it every time
echo mydomain.com > CNAME
```


Links
--

- [surge docs: Adding a custom domain](https://surge.sh/help/adding-a-custom-domain)