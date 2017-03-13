---
layout: post
title: Bash script to create OCMOD and vQmod templates with a single command
permalink: create-ocmod-vqmod-template-opencart-bash-script
tags: ['how-to', 'bash', 'script', 'opencart']
---

OCMOD and vQmod are both modification systems for Opencart which allow you to change things without overwriting any core files. For Opencart version older than 2.x, vQmod was the king. With version 2.x Opencart launched it's own modification system to replace the need for installing a separate extension.

The state Opencart is in right now, you'll find yourself dealing with both vqmod and ocmod scripts. I know i do. So i have written this neat bash script which allows me to type `ocmod foo` to create a file called **foo.ocmod.xml** with the basic template ocmod. Same for vqmod, type `vqmod bar` and it'll create a file called **bar.xml** with vqmod tempalte code.

An alternative to this is creating a snippet in your code editor. I prefer the bash way becuase it takes care of creating the file as well.

Here is the bash script. For ease of use i have added these to my `.bash_profile` so the commands are available globally.

Code
---
    {% highlight bash %}
    # ocmod()
    # -------
    ocmod() {
      touch $1.ocmod.xml
      echo -e "
    <?xml version="1.0" encoding="utf-8"?>
    <modification>
        <name>Mod name</name>
        <version>1.0</version>
        <author>Aamnah</author>
        <link>http://aamnah.com</link>
        <file path="path">
            <operation>
                <search><![CDATA[

                ]]></search>
                <add position="replace"><![CDATA[

                ]]></add>
            </operation>
        </file>
    </modification>
    " >> $1.ocmod.xml
    }

    # vqmod()
    # -------
    vqmod() {
    touch $1.xml
    echo -e "
    <?xml version="1.0" encoding="UTF-8"?>
    <modification>
        <id>Name</id>
        <version>1.0</version>
        <vqmver>2.X</vqmver>
        <author>Aamnah</author>
        <file name="path">
            <operation info="info">
                <search position="replace"><![CDATA[

                ]]></search>
                <add><![CDATA[

                ]]></add>
            </operation>
        </file>
    </modification>
    " >> $1.xml
    }
    {% endhighlight %}

Usage
---
- Add the code to your `.bash_profile`. 
- To create a vQmod file, type `vqmod` and provide the name of the script. For example: `vqmod replace` will create **replace.xml**
- To create a OCMOD file, type `ocmod` and provide the name of the script. For example: `ocmod replace` will create **replace.ocmod.xml**

