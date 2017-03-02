<!DOCTYPE html>
<html lang='en'>
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>
    
      Write a Bash Function to Create a gruntfile.js for your project
    
  </title>
  
  <meta name="description" content="Here is how it worksEveryt time i type gruntfile in the Terminal, it creates a gruntfile.js for me in the folder i am in. The resulting gruntfile.js has the ...">

  <link rel="stylesheet" href="/css/main.css">
  <link rel="canonical" href="http://tldrdevnotes.com/bash-function-create-gruntfile.js">
  <link rel="alternate" type="application/rss+xml" title="TLDR Dev Notes" href="http://tldrdevnotes.com/feed.xml">
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

  <body>
    <header class="Site-header">

  <div class="wrapper">

    <div>
      <a class="Site-title" href="/">TLDR Dev Notes</a>
      <small>Aamnah's developer notes</small>
    </div>

    <nav class="Site-nav">
      <a href="#" class="menu-icon">
        <svg viewBox="0 0 18 15">
          <path fill="#424242" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
          <path fill="#424242" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
          <path fill="#424242" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
        </svg>
      </a>

      <div class="trigger">
        
          
          <a class="page-link" href="/about/">About</a>
          
        
          
          <a class="page-link" href="/archive/">Archive</a>
          
        
          
        
          
        
          
        
          
        
      </div>
    </nav>

  </div>

</header>

    <div class="page-content">
      <div class="wrapper">
        <article class="Post" itemscope itemtype="http://schema.org/BlogPosting">

  <header class="Post-header">
    <h1 class="Post-title" itemprop="name headline">Write a Bash Function to Create a gruntfile.js for your project</h1>
    <p class="Post-meta">
      <time datetime="2015-02-15T00:00:00+05:00" itemprop="datePublished">
        Feb 15, 2015
      </time>
       • 
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name">Aamnah</span>
        </span>
      
      <span style='float:right'><a href="https://github.com/aamnah/tldrdevnotes.com/blob/master/_posts/2015-02-15-bash-function-create-gruntfile.js.md">Edit this page on Github</a>
    </p>
    
      <ul class='tags'>
      
        <li>how-to,</li>
      
        <li>bash,</li>
      
        <li>script,</li>
      
        <li>workflow</li>
      
      </ul>
    
  </header>

  <div class="Post-content" itemprop="articleBody">
    <h3>Here is how it works</h3>

<p>Everyt time i type <code>gruntfile</code> in the Terminal, it creates a <strong>gruntfile.js</strong> for me in the folder i am in. The resulting <strong>gruntfile.js</strong> has the following template code:</p>

<figure class="highlight"><pre><code class="language-javascript" data-lang="javascript">    <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">grunt</span><span class="p">)</span> <span class="p">{</span>
      <span class="nx">grunt</span><span class="p">.</span><span class="nx">initConfig</span><span class="p">({</span>
        <span class="na">pkg</span><span class="p">:</span> <span class="nx">grunt</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">readJSON</span><span class="p">(</span><span class="s1">'package.json'</span><span class="p">),</span>

        <span class="c1">// CONFIG</span>

        <span class="p">});</span>

        <span class="c1">// PLUGINS</span>
        <span class="nx">grunt</span><span class="p">.</span><span class="nx">loadNpmTasks</span><span class="p">(</span><span class="s1">''</span><span class="p">);</span>

        <span class="c1">// TASKS</span>
        <span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span><span class="s1">'default'</span><span class="p">,</span> <span class="p">[</span><span class="s1">''</span><span class="p">,</span> <span class="s1">''</span><span class="p">]);</span>
    <span class="p">};</span>
    </code></pre></figure>

<p>I can now add my Grunt config to it.</p>

<p>What i have done is create a function <code>gruntfile</code> for me and saved in my <code>.bash_profile</code> so it is available to me anywhere in the Terminal.</p>

<h3>Here is the code</h3>

<figure class="highlight"><pre><code class="language-bash" data-lang="bash"><table style="border-spacing: 0"><tbody><tr><td class="gutter gl" style="text-align: right"><pre class="lineno">1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34</pre></td><td class="code"><pre>    <span class="nv">color_green</span><span class="o">=</span><span class="s1">'\033[92m'</span> 
    <span class="nv">color_red</span><span class="o">=</span><span class="s1">'\033[91m'</span> 
    <span class="nv">color_off</span><span class="o">=</span><span class="s1">'\033[0m'</span>

    gruntfile<span class="o">()</span> <span class="o">{</span>
      <span class="k">if</span> <span class="o">[</span> -e <span class="s2">"gruntfile.js"</span> <span class="o">]</span> ; <span class="k">then
        </span><span class="nb">echo</span> -e <span class="s2">"</span><span class="k">${</span><span class="nv">color_red</span><span class="k">}</span><span class="s2">gruntfile.js already exists</span><span class="k">${</span><span class="nv">color_off</span><span class="k">}</span><span class="s2">"</span>

        <span class="k">if</span> <span class="o">[</span> -e <span class="s2">"Gruntfile.js"</span> <span class="o">]</span> ; <span class="k">then
          </span><span class="nb">echo</span> -e <span class="s2">"</span><span class="k">${</span><span class="nv">color_red</span><span class="k">}</span><span class="s2">Gruntfile.js already exists</span><span class="k">${</span><span class="nv">color_off</span><span class="k">}</span><span class="s2">"</span>
        <span class="k">fi

      else
      </span><span class="nb">echo</span> -e <span class="s2">"
        module.exports = function(grunt) {
          grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            // CONFIG

            });

            // PLUGINS
            grunt.loadNpmTasks('');

            // TASKS
            grunt.registerTask('default', ['', '']);
        };
      "</span> &gt;&gt; gruntfile.js

      <span class="nb">echo</span> -e <span class="s2">"</span><span class="k">${</span><span class="nv">color_green</span><span class="k">}</span><span class="s2">Gruntfile has been created</span><span class="k">${</span><span class="nv">color_off</span><span class="k">}</span><span class="s2">"</span>
      <span class="k">fi</span>
    <span class="o">}</span>
    <span class="w">
</span></pre></td></tr></tbody></table></code></pre></figure>

<p>Copy this code to the bottom of your <code>.bash_profile</code>.</p>

<p>Quit and re-open the Terminal after you are done editing. Alternatively, you can also run <code>source .bash_profile</code> to load the changes you just made.</p>

<h2>Notes</h2>

<ul>
<li>The <code>echo</code> command must be run with the <code>-e</code> flag to execute it as a command instead of just printing it out to the terminal.</li>
<li>Also, <code>echo</code> only seems to work if you wrap the statement in double quotes <code>&quot; &quot;</code>. It will not work with single quotes <code>&#39; &#39;</code></li>
<li>Since there is no simple way of checking case-insensitively if a file exists, i have added an if statement twice to check for both <code>gruntfile.js</code> and <code>Gruntfile.js</code></li>
<li>I have added color coding so that it&#39;ll show a red response if the file already exists and a green one if a file was succesfully created after running the function.</li>
</ul>

<p>If this all seems too technical, you can just <a href="http://tldrdevnotes.comcreate-grunt-snippet-sublime-text">create a sublime text snippet for Grunt</a>.</p>

<p>The purpose of writing this is to show the possibilities of what you can do with bash scripts and <strong>.bash_profile</strong>. For example, you can set up <a href="#">project templates</a> and create your whole directory structure by typing <code>new project</code>. You can add a license to your project <a href="#">license files</a> by typing <code>license</code>. And much more.</p>

  </div>

</article>

      </div>
    </div>
    <footer class="Site-footer">

  <div class="wrapper">

    <h2 class="footer-heading">TLDR Dev Notes</h2>

    <div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
        <ul class="contact-list">
          <li>TLDR Dev Notes</li>
          <li><a href="mailto:hello@aamnah.com">hello@aamnah.com</a></li>
        </ul>
      </div>

      <div class="footer-col footer-col-2">
        <ul class="social-media-list">
          
          <li>
            <a href="https://github.com/Aamnah"><span class="icon icon--github"><svg viewBox="0 0 16 16"><path fill="#828282" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/></svg>
</span><span class="username">Aamnah</span></a>

          </li>
          

          
          <li>
            <a href="https://twitter.com/AamnahAkram"><span class="icon icon--twitter"><svg viewBox="0 0 16 16"><path fill="#828282" d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"/></svg>
</span><span class="username">AamnahAkram</span></a>

          </li>
          
        </ul>
      </div>

      <div class="footer-col footer-col-3">
        <p>Please note that this site and the posts on it are, and will always be, a work in progress. If i waited for perfection, i’d never get anything done.
</p>
      </div>
    </div>

  </div>

</footer>

    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51214502-1', 'auto');
  ga('send', 'pageview');
</script>
  </body>
</html>
