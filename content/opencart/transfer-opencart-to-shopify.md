---
title: Lessons in transferring from OpenCart to Shopify
date: 2017-11-23
---

What Shopify can't do and OpenCart can

- Custom (SEO) URLs
- Custom Order Statuses 
- Mail and Newsletters
- [Bulk quantity discounts](https://ecommerce.shopify.com/c/wholesale-and-drop-shipping/t/quantity-discounts-not-using-variants-111674) you gotta use an app and pay for it


## Order Statuses

## URLs
- Shopify can not do custom URLs [read more](https://ecommerce.shopify.com/c/ecommerce-discussion/t/shopify-url-structure-creating-custom-urls-159272),  [and more](https://ecommerce.shopify.com/c/shopify-discussion/t/url-control-remove-pages-from-url-structure-227467)
-  The URL structure Shopify offers is 
  - `/pages` for Pages
  - `/products` for Products 
  - `/collections/some_product` for Collections of products. 
- You can not do for example 
  - `www.shop.com/clothes/dresses/name-of-dress` 
  - or `www.shop.com/books/cooking/name-of-book`
- The best you can do in terms of custom URLs is [redirects](https://help.shopify.com/manual/migrating-to-shopify/url-redirect)
- The URL is based on 


## Mail and Newsletter
Shopify has no officially supported tools for sending bulk emails. This includes all kinds of newsletters. You'll end up migrating to a 3rd party service like MailChimp. On the plus side, if you are already using MailChimp, it comes with a [Shopify plugin](https://apps.shopify.com/mailchimp) that can do cool things like syncing purchase data, automating marketing emails like reminding people about abandoned carts and easily integrate products into your email campaigns.

## Cash on Delivery
With Shopify, you pay charges on Cash on Delivery too. The transaction charge for **order processing**, not for payment processing

> we do charge transaction fees on orders that are processed as COD as well. The charge will be reflected on the bill following the period in which the order was taken. For example, if you were to sell something as COD today, the 1%-2% transaction fee would be added to your next invoice.

.

> All orders that go through your store, regardless of payment method will be charged the transaction fee on the order total [link](https://ecommerce.shopify.com/c/payments-shipping-fulfilment/t/transaction-fee-on-cash-on-delivery-option-161097)

## Customers
- CSV file can not be bigger than 1MB. Importing 3000 customers takes about 5 minutes
- You can not import compressed `.csv.gzip` files. Will get error: `Error found in CSV Header. Illegal quoting in line 1`
- It validates Email, Phone, Province Code and Country Codes before importing customers. If any of these is invalid, it'll skip that customer.
- When importing/exporting customers, it only adds one address, the default one. If the customer added multiple addresses, only the default one will get exported in the CSV.
- When importing customers, if you leave the fields blank, the default values are as follows:
  - Accepts Marketing: no
  - Total Orders: 0
  - Total Spent: 0
  - Tags: empty
  - Note: empty
  - Tax Exempt: no

- You can bulk add tags to all customers under Bulk Actions in Shopify
- The Total Spent and Total Orders fields will not be imported with customer details, so no point in adding any values for these in your CSV
- Any customers with duplicate email addresses or phone numbers will be skipped during an import—only the last record with the duplicated email address or phone number will be imported into the customer list in your Shopify admin.
- One customer per email address or phone number, duplicates will be skipped, only last entry will be added for the email/phone..


```sql
-- Find out if you have duplicate accounts with the same email address
SELECT
    email, COUNT(*)
FROM
    oc_customer
GROUP BY
    email
HAVING 
    COUNT(*) > 1
```

```sql
-- Find out if you have duplicate accounts with the same 
-- email address and phone number
SELECT
    email, telephone, COUNT(*)
FROM
    oc_customer
GROUP BY
    email, telephone
HAVING 
    COUNT(*) > 1
```

```sql
-- Find out if you have duplicate accounts with the same email address and the same name
SELECT
    firstname, lastname, email, COUNT(*)
FROM
    oc_customer
GROUP BY
    firstname, lastname, email
HAVING 
    COUNT(*) > 1
```

```sql
-- Find out if you have duplicate accounts with the same 
-- email address, phone number, first and last name
SELECT
    `firstname`, 
    `lastname`,
    `telephone`,
    `email`,
    COUNT(*)
    
FROM `oc_customer`

GROUP BY 
	`firstname`, 
    `lastname`,
    `telephone`,
    `email`
HAVING COUNT(*) > 1

ORDER BY COUNT(*) DESC
```

- `NULL` values will produce an error saying invalid entry. Make sure you have the `Replace NULL with` option empty when you're exporting your data.
- If Phone, Email, Province Code is invalid, it skips importing the customer
- Email and Phone numbers have to be unique. No two customers can have the same email or the same phone.
- Make sure you enclose/escape columns with `" "`. It makes your data safer (e.g. you don't lose the proeceeding zeros from phone numbers..)

### Province and Province Code
- Shopify requires `ISO 3166-2` style province codes. OpenCart has them in `ISO Alpha-2` and `ISO Alpha-3` formats
- If the address mentions a Province, it must also mention a Province Code
- It's easier to just skip exporting the Province and Province Code than to figure out a conversion between the different ISO format
- If the Province code is invalid, you'l get the following error

```
Line 503: Validation failed: Addresses province is not valid
```

### Phone Numbers
- If there is country code with the phone in OpenCart, it must have a prefix `+ ` or `0`
- The phone code needs to match the customer's country (e.g. +92 phone will be invalid for UAE)

Invalid

- 923338880006 (Pakistani number) for a United Arab Emirates address is invalid
- 971554070141 for a Dubai, United Arab Emirates address is invalid
- 971557708326
- 923445496549
- o529101205 (notice the o instead of zero)

```
Line 159: Validation failed: Phone is invalid // phone missing a digit
Line 190: Validation failed: Phone is invalid // test account, phone is 12345678
Line 212: Validation failed: Phone is invalid // phone missing a digit
Line 270: Validation failed: Email is invalid // domain not resolving
Line 292: Validation failed: Phone is invalid // O50 instead of 050
Line 321: Validation failed: Email is invalid // domain not resolving
Line 469: Validation failed: Phone is invalid // phone missing a digit
Line 552: Validation failed: Phone is invalid // phone missing a digit
Line 699: Validation failed: Phone is invalid // O50 instead of 050
Line 703: Validation failed: Email is invalid // domain not resolving
Line 781: Validation failed: Phone is invalid // +972 (Israel) for a Fujairah, UAE address
```


### Email
You can get an invalid email error for the following reasons

- a common domain provider was misspelled (e.g. gnail/gmal instead of gmail)
- there is space after the `@` (e.g. abc@ hotmail.com)
- the email domain is no longer active/valid/resolving

Invalid

- abc@gmal.com (notice the missing `i` in @gmail)
- abc@mcdonalds.com.sas
- abc@gnail.com (mis-spelled gmail)
- abc@sugarfairies.me (DNS could not be reached for the domain)

If the email address is inavlid, you'll get

```
Line 321: Validation failed: Email is invalid
```


## Products
- CSV file can not be bigger than 15MB.


### Weights
> Shopify will always import and export weight in grams, even if you specify a different unit.

- In order to transfer, you need to convert the weights for all your OpenCart products to grams
- Leave the `Variant Weight Unit` column empty when importing into Shopify

- Shopify allows only one default weight unit system-wide, either grams `g` or kilograms `kg` (for Metric system) and either pounds `lb` or ounces `oz` (for Imperial system). Out of `kg`, `g`, `lb`, `oz`, you select one as your site's weight unit. All your products then have the same weight unit.
- OpenCart on the other hand allows you to decide weight units for individual products So on your site, you'll have products in Kilograms, Grams, Ounces and Pounds.
- In order to transfer products, you need to convert the  different weight units for OpenCart products to the one unit you decide in Shopify.
- Variant Weight Unit	Valid values are `lb` and `kg`.
