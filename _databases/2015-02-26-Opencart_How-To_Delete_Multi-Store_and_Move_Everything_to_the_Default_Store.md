---
layout: post
title: Opencart How-To Delete Multi-Store and Move Everything to the Default Store
permalink: opencart_how-to_delete_multi-store_and_move_everything_to_the_default_store
tags: ['how-to', 'opencart', 'mysql', 'phpmyadmin']
status: published

---

Make a BACKUP before doing anything to the database. Be safe.

### Assumptions
This post assumes that

- the store_id for Default store is 0
- you have only 1 multi-store
- you are moving things from Multi-store to Default store
- you want to delete Multi-Store
- you have products that were added to both Default and Multi-store
- everything means products, categories, manufacturers and information

We can't delete a multi-store if there are orders associated with it. So the first step of the process would be to update all existing orders to associate with our main (default) store.

Update Store details for all existing Orders
---

The table to edit is `oc_order` and the columns we'll be editing are `store_id`, `store_name` and `store_url`. The `store_id` for the Default store is **0**.

```sql
UPDATE `oc_order` SET `store_id`=0,`store_name`="Cakebox.ME", `store_url`="http://cakebox.me"
```

Using this command, you can change Store details for all existing orders. Once you have linked all existing orders to the default store, you can go to the Admin and delete the multi-store.

Cleanup
---

After we're done with deleting multi-store, we need to do cleanup. For every Product, Category, Manufacturer, and Information page that was linked to the multi-store, there'll be a row in the database saying so. If you had hundreds of products for your multi-store, there'll be hundreds of rows for it in the database. 

We need to **a**) update these rows to link to our Default store (in case you are moving everything to the default) and **b**) remove duplicates (in case you added a product to your default as well as multi-store, because then the same product will have a row for every store). 

The cleanup, while not necessary, is recommended. You can go by without doing it, but if you have hundreds of useless rows in the database, it'll only slow things down and effect performance. Delete them to make your site faster.

**Note**: You can use [this extension](#) to Bulk move products, categories and manufacturers between stores. It'll, however, not delete duplicates.


### Update Store ID for all existing Products
The table to edit is `oc_product_to_store`, the column is `store_id`. We are going to delete duplicates first and then update all products to link them to Default store.

Show all Products that are duplicates and are not linked to Default store

```sql
SELECT * FROM `oc_product_to_store` WHERE `product_id` = `product_id` AND `store_id` != 0;
```

Delete duplicates

```sql
DELETE FROM `oc_product_to_store` WHERE `product_id` = `product_id` AND `store_id` != 0;
```

Link all products to Default store

```sql
UPDATE `oc_product_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
```

If you get 

    # MySQL returned an empty result set (i.e. zero rows).

that's fine. It means that after deleting the duplicates, there were no products that didn't already link to the Default store.


### Update Store ID for all existing Categories
The table to edit is `oc_category_to_store`, the column is `store_id`.

Show all Categories that are duplicates and are not linked to Default store

```sql
SELECT * FROM `oc_category_to_store` WHERE `category_id` = `category_id` AND `store_id` != 0
```

Delete them

```sql
DELETE FROM `oc_category_to_store` WHERE `category_id` = `category_id` AND `store_id` != 0
```

Link all Categories to Default store

```sql
UPDATE `oc_category_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
```

### Update Store ID for all existing Manufacturers
The table to edit is `oc_manufacturer_to_store`, the column is `store_id`.

Show all Manufacturers that are duplicates and are not linked to Default store

```sql
SELECT * FROM `oc_manufacturer_to_store` WHERE `manufacturer_id` = `manufacturer_id` AND `store_id` != 0
```

Delete them

```sql
DELETE FROM `oc_manufacturer_to_store` WHERE `manufacturer_id` = `manufacturer_id` AND `store_id` != 0
```

Link all Manufacturers to Default store

```sql
UPDATE `oc_manufacturer_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
```

### Update Store ID for all existing Information pages
The table to edit is `oc_information_to_store`, the column is `store_id`.

Show all Information pages that are duplicates and are not linked to Default store

```sql
SELECT * FROM `oc_information_to_store` WHERE `information_id` = `information_id` AND `store_id` != 0
```

Delete them

```sql
DELETE FROM  `oc_information_to_store` WHERE  `information_id` =  `information_id` AND  `store_id` !=0
```

Link all Information pages to Default store

```sql
UPDATE `oc_information_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
```

Get everything done in one step
---

The following code deletes duplicates and updates _store_id_ for all products, categories, manufacturers and information in one go. Only use this if you understand everything i have explained above, are confident in what you are doing and have a backup that you can restore if anything goes wrong.

```sql
DELETE FROM `oc_product_to_store` WHERE `product_id` = `product_id` AND `store_id` != 0;
DELETE FROM `oc_category_to_store` WHERE `category_id` = `category_id` AND `store_id` != 0;
DELETE FROM `oc_manufacturer_to_store` WHERE `manufacturer_id` = `manufacturer_id` AND `store_id` != 0;
DELETE FROM `oc_information_to_store` WHERE  `information_id` =  `information_id` AND  `store_id` !=0;

UPDATE `oc_product_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
UPDATE `oc_category_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
UPDATE `oc_manufacturer_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
UPDATE `oc_information_to_store` SET `store_id` = 0 WHERE `store_id` != 0;
```

That's it. You should now have all existing products, categories, manufacturers and information linked to your Default store, have no duplicates and gotten rid of your multi-store.