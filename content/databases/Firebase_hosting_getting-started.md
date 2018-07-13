---

title: Getting started with Firebase Hosting
subtitle: Host your websites and apps on Firebase Hosting for free 
date: 2017-02-26
tags:
- Hosting
- Firebase
---

## tl;dr

```bash
npm i -g firebase-tools
firebase login # will be redirected to Google Auth page

cd /your-project-directory

firebase init # initialize a project
# go through the initialization options
firebase deploy # deploy a site
# a public URL will be provided where you can see your websites
firebase open # Hosting: Deployed Site
firebase use --add # setup a staging environment (add a project alias)
firebase use foo # use foo environment 
firebase deploy # deploy changes to foo (whatever env you are in)
```

You can only create a project through the [Firebase console](https://console.firebase.google.com/). In order to manage projects with the CLI, you should create it at the web interface first.


A project directory must have a `firebase.json` to be able to deploy, which is created for you when you run `firebase init`. Alias definitions are written to a hidden file called `.firebaserc`, this file gets updated when you add an alias with `firebase use --add`. 


### Connect a custom domain name

#### Connect a domain
From the [Hosting](https://console.firebase.google.com/project/_/hosting/main) panel of the Firebase Console for your project, select Connect Domain.

#### Domain ownership verification
You'll need to either add a `TXT` record at your domain host, or upload a file to your site to prove domain ownership.

#### Point at Firebase hosting
To point your domain to Firebase Hosting you'll need to add/update a `CNAME` (for subdomains) or an `A` (domains without subdomains) record.

#### Wait for SSL certificate provisioning
After domain is provisioned, SSL provisioning starts and can take several hours.

Links
---

- [YouTube: Getting Started with Firebase Hosting on the Web - Firecasts](https://www.youtube.com/watch?v=meofoNuK3vo)
- [Docs: Connect a Custom Domain](https://firebase.google.com/docs/hosting/custom-domain)
- [Docs: Firebase CLI Reference](https://firebase.google.com/docs/cli/)
