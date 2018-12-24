---
title: "Convert Syntax Highlighting Code in Jekyll Posts from Pygments to Github Fenced Blocks"
date: 2017-09-06T20:56:39+05:00
draft: true
categories: 
  - Jekyll
tags:
  - bash scripting
---

```bash
grep -irl --null "{% highlight " . | xargs -0 sed -i '' 's/{% highlight /```/g'
grep -irl --null "{% endhighlight %}" . | xargs -0 sed -i '' 's/{% endhighlight %}/```/g'
grep -irl --null " %}" . | xargs -0 sed -i '' 's/ %}//g'
```


#### Why?

Jekyll by default uses Pygments to add syntax highlighting for code snippets. Which means writing code clocks like this:

```
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

This is not user friendly, too much to write, and too difficult to use elsewhere. Much simpler is using Github Fenced Code blocks, like so

```
  ```ruby
    def foo
      puts 'foo'
    end
  ```
```

Fenced code blocks are supported pretty much everywhere Markdown is supported

Links
---
- [Github: Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/)
- [Jekyll: Code snippet highlighting](https://jekyllrb.com/docs/templates/#code-snippet-highlighting)
