---

title: 'OpenCart: Bulk Update Customer Group via phpmyadmin'
slug: opencart bulk-update-customer-group-opencart-mysql-phpmyadmin
date: 2017-05-21

---

#### Why?
Because you can not delete a group if it has customers in it. And there is no easy way to move all customers to another group via the admin. 

```
Warning: This customer group cannot be deleted as it is currently assigned to 2170 customers!
```

### Find the `customer_group_id` number of a Customer Group

You can find the `customer_group_id` from the Admin URL, or by checking the `oc_customer_group_description` table

### Find all customers in a particular group

```sql
SELECT * FROM `oc_customer` WHERE `customer_group_id`=1
```

### Move all customers in one group to another group

```sql
UPDATE `oc_customer` SET `customer_group_id`=3 WHERE `customer_group_id`=1
```
