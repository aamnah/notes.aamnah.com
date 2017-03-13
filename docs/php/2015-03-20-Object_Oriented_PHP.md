
---
layout: post
title: Object Oriented PHP
permalink: object_oriented_php

---
    
The basic pillars of Object Oriented Programming (OOP) are:

- Encapsulation
- Inheritence
- Polymorphism

#### Encapsulation
Encapsulation is a way for us to bundle or organize our data into a format that is easily readable and extensible. It is also largely about controlling access to code by using visibility keywords define if something is public, private and so on..

#### Inheritance
Inheritance is a method of establishing relationships, such as a parent is to a child, or between classes or objects. Through a process of sub-classing we'll be able to create a hierarchy that gives us the power of reusing a code defined by a parent.

#### Polymorphism
The concept of Polymorphism can be described in several ways in how it relates to object oriented code. In a very basic case, it will allow us to present a type of contract or requirement of a class that can be shared across many different class types. It's a way for us to define methods that are shared, but implemented differently.

Classes and Objects
---
A class is a template for defining what is inside an object. 

> An extensible template for creating objects, providing initial values for state and implementations of behavior. 
 
Classes allow us to organize our constants, functions (in a class functions are called **methods**). So that they may be used for each new instance of an object. Classes will also allow us to manage which of those items are visible to the outside, allowing us to better encapsulate our code.

#### Defining a Class

    {% highlight php %}
    <?php
        class Product {
            // class definitions go here
        }
    ?>
    {% endhighlight %}

Once we have a class defined, we can proceed to creating our object.

#### Creating an Object

    {% highlight php %}
    <?php
        class Product {
            // class definitions go here
        }
        $p = new Product();
    ?>
    {% endhighlight %}

We use the keyword `new` to create an object. Now `$p` is a class object.

Properties and Methods
---

### Properties
Properties of a class behave like variables, that use visibility keywords to help you expose only what is needed to the rest of the code. This is most commonly known as the **access scope** of property. The scope for a property are as follows:

- Public
- Protected
- Private

**Public** properties can be accessed from anywhere in your code

**Protected** properties can only be accessed from the class itself, as well as any parent or inherited classes.

**Private** properties can only be accessed by the class that defined them. So child classes are just out of luck.

If you don not define the property as one of the above keywords or you use the `var` keyword than the property will be **public by default**.

#### Accessing Properties
You can access class properties with the following characters, a hyphen followed by a greater than symbol `->`. It is called the **object operator**.


    {% highlight php %}
    <?php
        class Product {
            // class definitions go here
            public $name;
        }
        $p = new Product();

        $p->name = "Pakola";
        echo $p->name;
    ?>
    {% endhighlight %}

### Methods
Functions that are defined inside of a class for use in objects, are called methods. Methods follow the same formatting, argument definitions and use cases as a function. The only difference is the ability to use visibility keywords of `public`, `private`, or `protected`. 

Methods that get information about a property (aka **getters**), you're looking for some tie of return value.

    {% highlight php %}
    <?php
        class Product {
            public $name;
            public $price;
            public $desc;

            public function getInfo() {
                // return some info about our product
            }
        }

        $product_info = $p->getInfo();
    ?>
    {% endhighlight %}

#### Pseudo-variable

Pseudo variable `$this` refers to the current instance of the object within that object class definition. This can refer to a property or method within the class.

`$this` is an internal reference to the current instance of an object.

The pseudo-variable `$this` is available when a method is called from within an object context. `$this` is a reference to the calling object.

    {% highlight php %}
    <?php
        class Product {
            // properties
            public $name = 'default_name';
            
            // methods
            public function getInfo() {
                return "Product name: " . $this->name;
            }
        }

        $p = new Product();

        echo $p->getInfo();
    ?>
    {% endhighlight %}

will output 

    Product name: default_name

### Constructor Method

Classes which have a constructor method call this method on each newly-created object, so it is suitable for any initialization that the object may need before it is used.