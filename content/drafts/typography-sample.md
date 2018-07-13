---
title: This is a really very long post title so i could see the legibility over multiple lines. Let's make it even longer to stretch it over multiple lines
subtitle: this is a subtitle
date: 2017-02-25
---

<p>A lead or excerpt should go here. two or three lines are good. About 320 chars is also fine.</p>

<p>The quick brown fox jumped over the lazy dog. Also Ili.</p>

<!--more-->

# This is Heading 1
## This is Heading 2
### This is Heading 3
#### This is Heading 4
##### This is Heading 5
###### This is Heading 6

<h4>Paragraph</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo maxime ut deleniti, sequi ullam modi veniam. Exercitationem error doloribus veniam ab soluta molestiae quas, quae quos? Officiis cumque, voluptates distinctio fuga, quidem illo aliquid culpa a facere ipsa porro tempora mollitia, voluptatibus nihil qui laboriosam ab ea non cupiditate ratione <a href="#">libero</a>. </p>

<blockquote>
I have loved the stars too fondly to be fearful of the night.<br>
<cite>Sarah Williams</cite>
</blockquote>


<p>Laudantium reiciendis nostrum quaerat maxime, maiores voluptatem reprehenderit laborum fuga libero ea blanditiis sed delectus unde esse harum tenetur quidem <em>nam ut perspiciatis aut itaque</em>! Dolores incidunt ullam dolore a, modi, dolorum quis fugit tempore quos voluptates, totam quas nemo accusamus repellendus <strong>dolorum quis fugit tempore quos voluptates</strong> mollitia voluptatum nam animi ad?</p>

<p><strong>This text is bold.</strong></p>
<p><em>This text is italic.</em></p>
<p><a href="#">This is a link</a>.</p>
<p><small>This text is small</small></p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo maxime ut deleniti, sequi ullam modi veniam. Exercitationem error doloribus veniam ab soluta molestiae quas, quae quos? Officiis cumque, voluptates distinctio fuga, quidem illo aliquid culpa a facere ipsa porro tempora mollitia, voluptatibus nihil qui laboriosam ab ea non cupiditate ratione <a href="#">libero</a>. Laudantium reiciendis nostrum quaerat maxime, maiores voluptatem reprehenderit laborum fuga libero ea blanditiis sed delectus unde esse harum tenetur quidem nam ut perspiciatis aut itaque! Dolores incidunt ullam dolore a, modi, <strong>dolorum quis fugit tempore quos voluptates</strong>, totam quas nemo accusamus repellendus perferendis mollitia voluptatum nam animi ad?</p>

<blockquote>
<p>When you’re 18 you think you’re gonna have this plan and follow it, she says. But sometimes, if you’re smart, you don’t.</p>
<cite>Jennifer Pahlka</cite>
</blockquote>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo maxime ut deleniti, sequi ullam modi veniam. Exercitationem error doloribus veniam ab soluta molestiae quas, quae quos? <code>Officiis cumque</code>, voluptates distinctio fuga, quidem illo aliquid culpa a facere ipsa porro tempora mollitia, voluptatibus nihil qui laboriosam ab ea non cupiditate ratione <a href="#">libero</a>. Laudantium reiciendis nostrum quaerat maxime, maiores voluptatem reprehenderit laborum fuga libero ea blanditiis sed delectus unde esse harum tenetur quidem nam ut perspiciatis aut itaque! Dolores incidunt ullam dolore a, modi, dolorum quis fugit tempore quos voluptates, totam quas nemo accusamus repellendus perferendis mollitia voluptatum nam animi ad?</p>

<h4>Code</h4>

Here is what `inline code` will look like. Say `<tags>`. And here is a code block:

```bash
# Setup a red prompt for root and a green one for normal users.
NORMAL="\[\e[0m\]"
RED="\[\e[0;31m\]"
GREEN="\[\e[0;32m\]"
if [[ $EUID == 0 ]] ; then
  PS1="$NORMAL\w $RED\$ $NORMAL"
else
  PS1="$NORMAL\w $GREEN\$ $NORMAL"
fi
```

<h4>Unordered List</h4>
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
  <li>Item4</li>
  <li>Item5</li>
</ul>

<h4>Ordered List</h4>
<ol>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
  <li>item4</li>
  <li>item5</li>
</ol>
