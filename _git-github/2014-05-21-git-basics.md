---
layout: post
title: Git Basics
permalink: git-basics
---
Configuration
---
configure username  
`git config --global user.name "Your Name"` 

configure email  
`git config --global user.name "me@mydomain.com"` 

Repositories
---
Start a git repo  

`git init my_new-repo`

Start a git repo in existing folder, cd to that folder and..  

`git init`

Removing the repo = just remove the .git folder, it's the brains  

`rm -r my_project/.git` 
where my_project is the project folder you are removing git from.

Adding Code
---
Add files to track  

`git add filename.txt`

Add all files to track (-A)  

`git add -A`

Committing Code
---
Adding a file  
`git add README.md`  

where README.md is the name of your file.  

Commit code  
`git commit`

Commit all code (-a)
`git commit -a` 

Commit all code with a message (-m)
`git commit -a -m 'your commit message` 

Check Status
---
show git status
`git status``

show git log for a history of commits 
`git log` 

show details of a specific commit
_Method 1: checkout_  
`git checkout commitIDENTIFIER` 
you dont need the whole identifer, the first 5 letters would usually do.

go back to where you were after checking out a commit 
`git checkout master` 
master is the branch you were previously on before checking out the commit.

_Method 2: diff_
check difference between two commits
`git diff commit1 commit2` 
  
Removing code
---
To remove files/folders from a git repo
`git rm filename.txt` OR `git rm -r directory/cache`

Use `-f` flag if you have to force it. It is recommended to add files you don't want in the repo to .gitignore so they don't get added in the first place.

Branches
---
Bracnhes are like alternate realities for your repositry. They let you pursue different courses of action on your project in parallel.

Check what branch you are in  
`git status` 

Create a new branch  
`git branch branchName` 

Switch to a branch  
`git checkout branchName`

Switch back to master branch  
`git checkout master` 

Switch and create branch in the same command  
`git checkout -b newFeature` 
-b flag will create the branch if it doesnt already exists. 

show bracnhes  
`git branch` 
* asterisk indicates what branch you're currently on.

delete branch 
`git branch -D branchName` 
-D flag will delete the branch. you can't delete the branch you are in, so switch before deleting.

Merging
---
Merge a branch  
`git merge branchName` 

after manually taking care of merge conflicts,
`git add conflictedFile` and then`git commit` 

Cloning
---
`git clone remoteRepo  yourNewRepoName` 

Working with Remotes  
---
show list of remote repos  
`git remote` 

add remote repo
`git remote add NameForRemote Location/url_of_remote` 

add github repo  
`git remote add origin github_url` 

push changes to remote  
`git push -u origin  master` 
origin is the name of remote repo and master is the branch.  

Git Flow
---
installing git-flow on Linux  
`sudo apt-get install git-flow` 

start git flow  

`git flow init`  

start git flow on a new branch  

`git flow Flow_banch start BranchName` 

close git flow on a new branch  

`git flow Flow_banch finish BranchName` 

Starting from Scratch or Uploading an Existing Project
---
![BitBucket Project help](../assets/img/git-basics.png)

Screenshot taken from [BitBucket](https://bitbucket.org). Use `git add -A` to add all existing files if you are pushing up an existing project.

Further Reading
---
- [Install the git-credential-osxkeychain helper](https://confluence.atlassian.com/display/BITBUCKET/Set+up+Git)
	- So that you don't have to enter login details everytime you push from Mac over HTTPS.
- [Set up SSH for Git and Mercurial on Mac OSX/Linux](https://confluence.atlassian.com/pages/viewpage.action?pageId=270827678)
	- So you can communicate with git server (Bitbucket) over SSH.

Notes  
---
- The most important part in the repo is the **.git** folder. The .git folder is what tracks everything. The name of the folder you initiate a git repo with/in doesn't matter. The files inside doesn't matter. Whether you delete all those files doesn't matter either. If you have the .git folder intact, you'll be able to restore all those files
- **--global** flag means that we'd like to apply these changes for all our repositories
- the answer to 'should i commit?' is 'do you have a good commit message?'
- when you add a file, git adds it to what's called the staging area.
- check [this link](https://coderwall.com/p/euwpig) for a better commit log.
- the most recent commit = **HEAD**
- the commit before the last commit = **HEAD~1**
- master is like the trunk of your project. It's usually the main code of your project that's deployed.
- when we create a branch, it starts with a copy of the branch we are in. If you are in a branch other than master, **your new branch will copy the branch you are currently in**. Consider actual tree branches, they branch out from where they are already.
- 

For a more detailed, easy to understand and video demonstrated intro to Git, take the [_Git Basics_ course on Treehouse](http://referrals.trhou.se/aamnah). This article was written while taking that course.