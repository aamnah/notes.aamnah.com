---
layout: post
---
<p>A lead or excerpt should go here. two or three lines are good. About 320 chars is also fine.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, in dolores maxime eveniet saepe libero eum consequatur, commodi enim eos ab doloremque ratione illum quaerat voluptas ipsa explicabo corrupti laborum excepturi. Adipisci, dolores, recusandae! Sit tempora dolorum, ipsum cupiditate libero.</p>
<!--more-->

List

- [Configuration](http://jekyllrb.com/docs/configuration/)
- [Writing posts](http://jekyllrb.com/docs/posts/)
- [Markdown](http://daringfireball.net/projects/markdown/)

[Download an asset file]({{ site.url }}/assets/files/mydoc.pdf).


#### Highlighting code snippets ####

Jekyll also has built-in support for syntax highlighting of code snippets using either Pygments or Rouge, and including a code snippet in any post is easy. Just use the dedicated Liquid tag as follows:

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
