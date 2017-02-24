---
layout: post
title: How to create a Snippet in Sublime Text
permalink: create-sublime-text-snippet
tags: how-to, sublime text, snippets, workflow
---

Basics
---
- The file name should end in **.subime-snippet**. 
- It should be saved in (Mac) **/Users/yourname/Library/Application Support/Sublime Text 3/Packages/User** See [this page](http://sublimetext.info/docs/en/basic_concepts.html) for the data folder on other OS.
- The code must ve wrapped in a **<![CDATA[ ]]>** tag.
- You can use **$1** to indicate where to place the cursor after inserting the template. For example, for an HTML5 template you can place it between `<title>` tags like so:  `<title>$1</title>` and this is where the cursor will be after the snippet is inserted.
- You can designate multiple cursors points for after snippet expansion, like **$1, $2, $3** and so on.. Use `tab` to go to the next cusrsor point.
- You can define a `tabTrigger`. It's the word that you need to type before pressing tab. For example, `html5` is the tab trigger for HTML5 snippet.
- You should define `scope`. Which basically means that you can define in what type of files this snippet should expand. For example, a snippet with `<scope>source.css</scope>` will only expand in CSS files. I omit scope in my snippets because i start writing files first and save later. Without a scope given i can expand the snippet in unsaved/untitled files.
- You can add a `description` (optional).


Resources
---
- [Working With Code Snippets In Sublime Text](http://www.hongkiat.com/blog/sublime-code-snippets/)
- [Quickly Insert Text & Code with Sublime Text Snippets](http://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/quickly-insert-text-and-code-with-sublime-text-snippets/)
- [Sublime Text Docs: Snippets](http://docs.sublimetext.info/en/latest/extensibility/snippets.html)