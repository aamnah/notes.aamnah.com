---
layout: post
title: How to make websites in Urdu and use custom fonts 
permalink: how-to-make-websites-in-urdu-use-custom-fonts
author: aamnah
---

In this post you'll learn how to make web pages in Urdu, how to type in Urdu, how to use custom Urdu fonts on your website and how to configure and style a website in Urdu.

### Finding a font ###
First things first, find an Urdu font that you like. I decided to use [Nafees Nastaleeq](). Other good fonts are:
[Nazanin]()
[Nazanin Bold]()
[Farhood]()

If you are having difficulty finding good Urdu fonts (type faces), try Persian. Persian is written very similar to Urdu (both are written in Nastaleeq script) and will do nicely for our use.

After Persian, Arabic comes at a close second in similarity. While it's easier to find arabic fonts,  using it for Urdu has caveats: some alphabets (like chay and gaaf) will be missing. 

Make sure you have the right to use the font.

### HTML `dir` tag ###
Urdu is a Right To Left (rtl) language. You start writing from the right side and move to the left. When using an RTL language on your website, you can specify it in the HTML code using the `dir` tag.

    {% highlight html %}
	<p dir="rtl">Write this text right-to-left!</p>
    {% endhighlight %}
    
> The dir attribute tells the browser the direction in which the displayed text is intended to be read. The browser will render text from left to right by default, but as with the lang attribute, you’ll need to override the intended reading direction if you’re including text that runs in the opposite direction (for example, Arabic or Hebrew).

**NOTE: The `dir` tag is deprecated, it is not supported in HTML5. Use CSS instead.**

### CSS `@font-face`, `font-family` and `direction` ###
Since our website is going to be bilingual, i.e. it will have both English and Urdu posts, we will add a CSS class `.urdu` to the content whenever the content is going to be in Urdu. Our custom font and any specific styling will also be mentioned in the `.urdu` CSS class and applied when needed.

The direction can also be mentioned in the CSS. 
	
    {% highlight css %}
    @font-face {
    	font-family: 'Nafees Nastaleeq';
    	src: url('../fonts/nafees_nastaleeq__v1.02-webfont.eot');
    	src: url('../fonts/nafees_nastaleeq__v1.02-webfont.eot?#iefix') format('embedded-opentype'),
         	url('../fonts/nafees_nastaleeq__v1.02-webfont.woff') format('woff'),
         	url('../fonts/nafees_nastaleeq__v1.02-webfont.ttf') format('truetype'),
         	url('../fonts/nafees_nastaleeq__v1.02-webfont.svg#nafeesregular') format('svg');
    	font-weight: normal;
    	font-style: normal;

	}
	.urdu {
    	font-family: "Nafees Nastaleeq";
    	direction: rtl;
    }
    {% endhighlight %}

### Using custom fonts ###
Once we have found a font, we will use the Webfont Generator to convert our fonts in formats for use on website and get the **@font-face kit**.

we are going to generate our magical fonts for use on the web with support for all browsers.

Font faces are defined in the css stylesheet. So we'll take the code from the @font-face kit and add it to our stylesheet.

### [Demo]({{site.url}}/lets_write_in_urdu/) ### 

Sources:
---
- [HTML dir Attribute](http://reference.sitepoint.com/html/core-attributes/dir)
- [How to use CSS @font-face](http://nicewebtype.com/notes/2009/10/30/how-to-use-css-font-face/)
- [Using @font-face](http://css-tricks.com/snippets/css/using-font-face/)
- [Webfont Generator](http://www.fontsquirrel.com/tools/webfont-generator)
- [Arabic Web Fonts](http://www.fonts.com/search/web-fonts?SortColumn=relevancy&searchtext=arabic&ShowAllFonts=Desktop&SearchType=WebFonts#product_top)
- [What are my “web font” choices for Arabic?](http://stackoverflow.com/questions/7185106/what-are-my-web-font-choices-for-arabic)