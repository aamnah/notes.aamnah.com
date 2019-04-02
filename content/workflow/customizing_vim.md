---
title: Customizing Vim
date: 2019-03-29

---

## install plugins

With `apt-vim` you can install plugins by specifying their Git URLs

```bash
# install `apt-vim`
curl -sL https://raw.githubusercontent.com/egalpin/apt-vim/master/install.sh | sh
source ~/.bashrc || source ~/.bash_profile

# install `nerdtree`
apt-vim install -y https://github.com/scrooloose/nerdtree.git
```

## config file

```vimrc
" NerdTree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Open NERDTree automatically when Vim starts
autocmd vimenter * NERDTree

" show hidden files by default
" you can also manually toggle hiddden files: `Shift + i`
let NERDTreeShowHidden=1

" close vim if the only window left open is a NERDTree
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
```
