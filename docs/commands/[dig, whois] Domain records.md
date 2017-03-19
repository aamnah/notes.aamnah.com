`whois aamnah.com` will return domain registration details for aamnah.com, including when it was registered, who registered it, when it was created and who is the contact.

`dig` is another useful command. You can use the `dig +short` to only list values.



## Name Servers

    whois aamnah.com | grep -i --color "Name Server:"
OR

    dig NS aamnah.com

![Screenshot 2015-12-02 14.37.29.png](resources/147756942A42418B787F0FEC3D7A1025.png)

## NS, TXT, MX, SOA, SPF records
You can either pass the record as an argument

    dig MX aamnah.com

![Screenshot 2015-12-02 14.40.39.png](resources/881789BF7FF24A61F51C220B513AF9B1.png)

or use `grep` to find it in the output of `dig`

    dig aamnah.com | grep --color "MX"

![Screenshot 2015-12-02 14.42.47.png](resources/8966448C6CA531F015D7AD246B742354.png)

![Screenshot 2015-12-02 14.47.02.png](resources/B24AD105F7D6393C22B4D24C07B28915.png)

## Get technical contact for a domain

    whois aamnah.com | grep -i --color "Tech Name:\|Tech Phone:\|Tech Email:"
    

![Screenshot 2015-12-02 14.36.59.png](resources/5019FA96E07F48CF8CA8C9147F91A6FF.png)


## Creation and Expiry dates

    whois aamnah.com | grep -i --color "Creation date:\|Expiration date:"
    
![Screenshot 2015-12-02 14.40.08.png](resources/5D2DC643E1503A7C1FD204BF51D2B3F6.png)