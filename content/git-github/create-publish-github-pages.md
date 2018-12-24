---
title: Getting started with Github Pages
slug: getting-started-github-pages
category: "Git and Github"
tags: ['github pages', 'how-to', hosting']
date: 2015-02-19
---

There are two kinds of Github Pages. User pages and project pages.

Steps for Creating Project pages
---

1. Create a **branch** called **gh-pages**  
2. Add your site to it
3. Push to github

### Create a branch called gh-pages

```bash
git checkout -b gh-pages
```

You'll be doing this locally on your computer. `-b` is for **Branch**. `gh-pages` is the name of the branch. It MUST be **gh-pages**. Any other name and Github is going to ignore it.

Once you create a branch, it'll switch you to it. You can check which branch you are on with `git branch`.

![show git branch output](#)

The branch with a * and green color is the branch you are currently on.

### Add your site to it

Add your project site to this branch. The usual HTML, CSS and JS. 

### Push to Github

```bash
git push origin gh-pages
```

`origin` is where you repository is. In this case it represents Github.

The site can take some time showing up on Github after the branch is pushed. Sometimes it shows up immediately, sometimes it can take up to 10 minutes.

### Tips

- You can create a new empty branch `git checkout --orphan gh-pages`
- Delete a remote branch `git push origin :gh-pages`

User pages
---
The name of the repository must be **username**.github.io

A repo named **username.github.io** will appear online as username.github.io. Once you have that repository, anything you put in it wil become your user website.

The difference between user pages and project pages is that for Project pages, you create a branch in your project repo. For User pages, you create a whole new repo that is specifically for your website.

## Steps for Creating Project pages

1. Create a **repo** called **username.github.io**  
2. Create the site
3. Start a local git repo in that site folder
4. Add remote repo, the one you created in the first step
5. Push it to the remote repo 

### Create a local git repo in the site folder and add/commit files

```bash
git init
git add .
git commit -m 'Initial commit'
```

`-m` is for Message. The message that you want to add about the files your are committing. It is kind of a must to add a message, and it should be descriptive of teh changes you made to file.

### Add Remote repo
Connect your site to Github

```bash
git remote add origin git@github.com:username/username.github.io.git
```

`origin` is the name of your remote repo. It doesn't have to be called origin, it can be anything. Origin is sort of a convention, to represent that is sort of the canonical repo for all your files. You can name it _github_ if you want.

You can check where your remote is with `git remote -v`

### Push it up

```bash
git push -u origin master
```

`origin` is your remote repo, `master` is your branch.

Again, it can take up to 10 minutes for the site to become live on username.github.io.

Add a CNAME record
---

If you want to use your own domain, you can. Make that username.github.io username.com. All you have to do is cerate a CNAME alias with your DNS provider, and add a _CNAME_ file to your repo.

### CNAME details for your Domain Regsitrar
**Name / Host / Alias**: www
**Time to Live (TTL)**: 86400
**Record Type**: CNAME
**Value / Answer / Destination**: username.github.io

### Creating and committing a _CNAME_ file
Create a file called `CNAME` (notice that there is no file extension) and add your domain `www.yourdomain.com` to it. Save that file in the root of your repo.

```bash
git add CNAME
git commit CNAME -m 'Added CNAME'
git push origin master
```

Links
---

- [Source](https://teamtreehouse.com/library/using-github-pages-to-host-free-websites)
- Here are help articles about [creating a CNAME record at registrar](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/), and [adding a CNAME file to your repo](https://help.github.com/articles/adding-a-cname-file-to-your-repository/).
