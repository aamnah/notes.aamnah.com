---
title: "[dig] Domain Information Groper"
date: 2017-03-13
---

## Getting domain record details (NS, MX, TXT, SOA, SPF, A, AAAA, any)

By default, `dig` only provides you wih an `A` record, i.e. an IP. To get details about a specific record, you need to pass it as an option with `dig`, like so:

    dig NS aamnah.com
    dig aamnah.com NS
    dig MX aamnah.com

`dig NS aamnah.com` is the same as `dig aamnah.com NS`. It doesn't matter if you pass the option in the beginnnig or at the end. It also doesn't matter if you pass an uppercase `NS` or a lower case `ns`.

You can use `any` to get all domain records (i.e. any domain record that is available):

    dig any aamnah.com
    dig aamnah.com any


## Neat and detailed output

    dig +nocmd any +noall +answer

gives a neat view without any comments.

## Options

    dig -h | more

to list all available options.

### +[no]cmd
Toggles the printing of the initial comment in the output  identifying the version of dig and the query options that have been applied. This comment is printed by default.

### +[no]all
Set or clear all display flags.