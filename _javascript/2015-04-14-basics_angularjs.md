---
layout: post
title: AngularJS Basics
permalink: angularjs_basics

---
    
|||
|-------------|--------------------------------------------|
| Directives  | HTML annotations that trigger JS behaviors |
| Modules     | Where our application components live      |
| Controllers | Where we add application behavior          |
| Expressions | How values get displayed within the page   |

`ng-app` Specifies where our app exists on the page
`ng-model` Binds the value of the input to the variable, in both directions

`{{ name }}` Add dynamic content (in this case, the variable _name_) to our static HTML by wrapping it in double curly braces `{{ }}`

Controller manages some portion of our application or a scope on our page


Directive
---
A directive is a marker on an HTML tag that tells Angular to run or reference some JavaScript code. Directives is how we bind the behaviour

For example `ng-controller`, `ng-app`, `ng-model` etc.

`ng-hide` and `ng-show` hide and show things respectively, based on boolean values. For example:

    <button ng-show="store.product.canPurchase">Add to Cart</button>

will only show the 'Add to Cart' button if `canPurchase` is set to `true`..

`ng-repeat` will repeat (loop) the properties of an array, like the jQuery `each()` method.

    <div ng-repeat="product in store.products" class="product row">
      <h3>
        {{product.name}}
        <em class="pull-right">${{product.price}}</em>
      </h3>
    </div>

Modules
---
Modules are where we write pieces of our Angular application.
Where we define dependencies for our app.

Expressions
---
Expressions allow you to insert dynamic values in your HTML

For example: `{{ name }}`, `{{ title }}` etc.

    <p>{{ 4 + 6 }}</p>

will output

    <p>10</p>

Similarly

    <p>{{ "hello " + "you" }}</p>

will output

    <p>hello you</p>


Controllers
---
Controllers are where we define our app's behavior by defining functions and values.