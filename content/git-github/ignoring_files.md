---

title: Ignoring files and folders in Git
date: 2019-04-03

---

Create a global `.gitignore`

```bash
touch ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

- `foo/` will match a directory but not a file or symbolic link
- `foo` without the `/` is a glob pattern
- `**/foo` will match a file or directory anywhere

Remove files that are ignored now but are still in the Git repo 

```bash
git rm -r --cached node_modules
git commit -m 'Remove the now ignored directory node_modules'
git push origin master
```

s
Links
---

- [manual: gitignore](https://git-scm.com/docs/gitignore)
- [A collection of .gitignore templates](https://github.com/github/gitignore)