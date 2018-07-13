---
title: Hide Menu Item/Link If User does not have Permission - OpenCart 2.1.0.2
date: 2017-08-24
---

Right now, if you edit a User Group and take away permissions for some areas, it still shows the areas in the menu. Meaning, the person can see all the areas, knows he wasn't allowed access and get's a not allowed message when he clicks on the menu link. 

Ideally, if a user has no access to a menu, he should not see it to begin with. OpenCart should hide the menu item automatically if user doesn't have permission to _View_ it.

The solution for OpenCart 2.1.0.2 is editing the `admin/view/template/common/menu.tpl` file via OCMOD and adding checks to every single menu item to see if the user has access to view it. If yes, show the item. If not, hide it.

There are plenty of OCMOD files are available for this in the OpenCart marketplace. I tried one but it still left out some areas (Extensions > Captcha, Extensions > Analytics etc.)

Another issue is hiding 3rd-party modules from menu (e.g. Abandoned Carts, POS etc.). You'll have to edit their accompanying OCMOD files to edit the part where they add a menu link and add a user access check to it as well. (Maybe you can have one OCMOD file deditcated to menu links?)

The code to check for access is

```php
<?php
global $registry; $userac = $registry->get('user');

// if ($userac -> hasPermission('access', 'link')) { ?>
if($userac->hasPermission('access','catalog/category')) {  ?> // e.g. look for access to Catalog > Category
	// do something
<?php } ?>
```

To hide/show a menu item, you'll do:

```php
global $registry; $userac = $registry->get('user');
if($userac->hasPermission('access','catalog/category')) {  ?>
  <li><a href="<?php echo $category; ?>"><?php echo $text_category; ?></a></li>
<?php } ?>
```

And as far as OpenCart 2.1.0.2 goes, you gotta do this for ALL THE MENU ITEMS. Things in 2.3.0.2 seems to have changed a bit. The file containing the code for menu is `admin/view/template/common/column_left.tpl` and it uses a loop for displaying menu, so you should not have to repeat your code much.

Here's the complete ocmod file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<modification>
	<name>Hide Menu if Not Permitted</name>
	<code>not_permitted_menu_hide_in_admin</code>
	<version>1.2</version>
	<author><![CDATA[Sparx & Aamnah]]></author>
	<link><![CDATA[https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=23615]]></link>
	<file path="admin/view/template/common/menu.tpl">
		<operation>
			<search ><![CDATA[
                        <li><a href="<?php echo $category; ?>"><?php echo $text_category; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php 
						global $registry; $userac = $registry->get('user');
						if($userac->hasPermission('access','catalog/category')) {  ?>
                        <li><a href="<?php echo $category; ?>"><?php echo $text_category; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $attribute; ?>"><?php echo $text_attribute; ?></a></li>                        
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/attribute')) { ?>
                        <li><a href="<?php echo $attribute; ?>"><?php echo $text_attribute; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search ><![CDATA[
                        <li><a href="<?php echo $product; ?>"><?php echo $text_product; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/product')) {  ?>
                        <li><a href="<?php echo $product; ?>"><?php echo $text_product; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
                <operation>
			<search ><![CDATA[
                        <li><a href="<?php echo $recurring; ?>"><?php echo $text_recurring; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/recurring')) {  ?>
                        <li><a href="<?php echo $recurring; ?>"><?php echo $text_recurring; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $attribute_group; ?>"><?php echo $text_attribute_group; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/attribute_group')) { ?>
                        <li><a href="<?php echo $attribute_group; ?>"><?php echo $text_attribute_group; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $option; ?>"><?php echo $text_option; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/option')) {  ?>
                        <li><a href="<?php echo $option; ?>"><?php echo $text_option; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/manufacturer')) {  ?>
                        <li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $download; ?>"><?php echo $text_download; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/download')) {  ?>
                        <li><a href="<?php echo $download; ?>"><?php echo $text_download; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $review; ?>"><?php echo $text_review; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/review')) {  ?>
                        <li><a href="<?php echo $review; ?>"><?php echo $text_review; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $information; ?>"><?php echo $text_information; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/information')) {  ?>
                        <li><a href="<?php echo $information; ?>"><?php echo $text_information; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $filter; ?>"><?php echo $text_filter; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','catalog/filter')) {  ?>
                        <li><a href="<?php echo $filter; ?>"><?php echo $text_filter; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                         <li><a href="<?php echo $installer; ?>"><?php echo $text_installer; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/installer')) {  ?>
                         <li><a href="<?php echo $installer; ?>"><?php echo $text_installer; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                         <li><a href="<?php echo $modification; ?>"><?php echo $text_modification; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/modification')) {  ?>
                         <li><a href="<?php echo $modification; ?>"><?php echo $text_modification; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                         <li><a href="<?php echo $analytics; ?>"><?php echo $text_analytics; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/analytics')) {  ?>
                         <li><a href="<?php echo $analytics; ?>"><?php echo $text_analytics; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                         <li><a href="<?php echo $captcha; ?>"><?php echo $text_captcha; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/captcha')) {  ?>
                         <li><a href="<?php echo $captcha; ?>"><?php echo $text_captcha; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $module; ?>"><?php echo $text_module; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/module')) {  ?>
                        <li><a href="<?php echo $module; ?>"><?php echo $text_module; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $shipping; ?>"><?php echo $text_shipping; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/shipping')) {  ?>
                        <li><a href="<?php echo $shipping; ?>"><?php echo $text_shipping; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $payment; ?>"><?php echo $text_payment; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/payment')) {  ?>
                        <li><a href="<?php echo $payment; ?>"><?php echo $text_payment; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $total; ?>"><?php echo $text_total; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/total')) {  ?>
                        <li><a href="<?php echo $total; ?>"><?php echo $text_total; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $feed; ?>"><?php echo $text_feed; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/feed')) {  ?>
                        <li><a href="<?php echo $feed; ?>"><?php echo $text_feed; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $fraud; ?>"><?php echo $text_fraud; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','extension/fraud')) {  ?>
                        <li><a href="<?php echo $fraud; ?>"><?php echo $text_fraud; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/order')) {  ?>
                        <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $order_recurring; ?>"><?php echo $text_order_recurring; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/recurring')) {  ?>
                        <li><a href="<?php echo $order_recurring; ?>"><?php echo $text_order_recurring; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/return')) {  ?>
                        <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $customer; ?>"><?php echo $text_customer; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/customer')) { ?>
                        <li><a href="<?php echo $customer; ?>"><?php echo $text_customer; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $customer_group; ?>"><?php echo $text_customer_group; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/customer_group')) { ?>
                        <li><a href="<?php echo $customer_group; ?>"><?php echo $text_customer_group; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
			<li><a href="<?php echo $customer_ban_ip; ?>"><?php echo $text_customer_ban_ip; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/customer_ban_ip')) { ?>
			<li><a href="<?php echo $customer_ban_ip; ?>"><?php echo $text_customer_ban_ip; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
			<li><a href="<?php echo $custom_field; ?>"><?php echo $text_custom_field; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/custom_field')) { ?>
			<li><a href="<?php echo $custom_field; ?>"><?php echo $text_custom_field; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','marketing/affiliate')) {  ?>
                        <li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $coupon; ?>"><?php echo $text_coupon; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','marketing/coupon')) {  ?>
                        <li><a href="<?php echo $coupon; ?>"><?php echo $text_coupon; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/voucher')) { ?>
                        <li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $voucher_theme; ?>"><?php echo $text_voucher_theme; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/voucher_theme')) { ?>
                        <li><a href="<?php echo $voucher_theme; ?>"><?php echo $text_voucher_theme; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a class="parent"><?php echo $text_paypal ?></a>
			]]></search>
			<add position="replace" offset="4"><![CDATA[
                        <?php if($userac->hasPermission('access','payment/pp_express')) { ?>
                         <li><a class="parent"><?php echo $text_paypal ?></a>
                            <ul>
                              <li><a href="<?php echo $paypal_search ?>"><?php echo $text_paypal_search ?></a></li>
                            </ul>
                          </li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $marketing; ?>"><?php echo $text_marketing; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','marketing/marketing')) {  ?>
                        <li><a href="<?php echo $marketing; ?>"><?php echo $text_marketing; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','marketing/contact')) {  ?>
                        <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $setting; ?>"><?php echo $text_setting; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','setting/setting')) { ?>
                        <li><a href="<?php echo $setting; ?>"><?php echo $text_setting; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $layout; ?>"><?php echo $text_layout; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','design/layout')) { ?>
                        <li><a href="<?php echo $layout; ?>"><?php echo $text_layout; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $banner; ?>"><?php echo $text_banner; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','design/banner')) { ?>
                        <li><a href="<?php echo $banner; ?>"><?php echo $text_banner; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $user; ?>"><?php echo $text_user; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','user/user')) { ?>
                        <li><a href="<?php echo $user; ?>"><?php echo $text_user; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $api; ?>"><?php echo $text_api; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','user/api')) { ?>
                        <li><a href="<?php echo $api; ?>"><?php echo $text_api; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $user_group; ?>"><?php echo $text_user_group; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','user/user_permission')) { ?>
                        <li><a href="<?php echo $user_group; ?>"><?php echo $text_user_group; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $location; ?>"><?php echo $text_location; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/location')) { ?>
                        <li><a href="<?php echo $location; ?>"><?php echo $text_location; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $language; ?>"><?php echo $text_language; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/language')) { ?>
                        <li><a href="<?php echo $language; ?>"><?php echo $text_language; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $currency; ?>"><?php echo $text_currency; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/currency')) { ?>
                        <li><a href="<?php echo $currency; ?>"><?php echo $text_currency; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $stock_status; ?>"><?php echo $text_stock_status; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/stock_status')) { ?>
                        <li><a href="<?php echo $stock_status; ?>"><?php echo $text_stock_status; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $order_status; ?>"><?php echo $text_order_status; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/order_status')) { ?>
                        <li><a href="<?php echo $order_status; ?>"><?php echo $text_order_status; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $return_status; ?>"><?php echo $text_return_status; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/return_status')) { ?>
                        <li><a href="<?php echo $return_status; ?>"><?php echo $text_return_status; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $return_action; ?>"><?php echo $text_return_action; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/return_action')) { ?>
                        <li><a href="<?php echo $return_action; ?>"><?php echo $text_return_action; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $return_reason; ?>"><?php echo $text_return_reason; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/return_reason')) { ?>
                        <li><a href="<?php echo $return_reason; ?>"><?php echo $text_return_reason; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $country; ?>"><?php echo $text_country; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/country')) { ?>
                        <li><a href="<?php echo $country; ?>"><?php echo $text_country; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $zone; ?>"><?php echo $text_zone; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/zone')) { ?>
                        <li><a href="<?php echo $zone; ?>"><?php echo $text_zone; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $geo_zone; ?>"><?php echo $text_geo_zone; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/geo_zone')) { ?>
                        <li><a href="<?php echo $geo_zone; ?>"><?php echo $text_geo_zone; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $tax_class; ?>"><?php echo $text_tax_class; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/tax_class')) { ?>
                        <li><a href="<?php echo $tax_class; ?>"><?php echo $text_tax_class; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $tax_rate; ?>"><?php echo $text_tax_rate; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/tax_rate')) { ?>
                        <li><a href="<?php echo $tax_rate; ?>"><?php echo $text_tax_rate; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $length_class; ?>"><?php echo $text_length_class; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/length_class')) { ?>
                        <li><a href="<?php echo $length_class; ?>"><?php echo $text_length_class; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $weight_class; ?>"><?php echo $text_weight_class; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','localisation/weight_class')) { ?>
                        <li><a href="<?php echo $weight_class; ?>"><?php echo $text_weight_class; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $upload; ?>"><?php echo $text_upload; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','tool/upload')) {?>
                        <li><a href="<?php echo $upload; ?>"><?php echo $text_upload; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $error_log; ?>"><?php echo $text_error_log; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','tool/error_log')) {?>
                        <li><a href="<?php echo $error_log; ?>"><?php echo $text_error_log; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $backup; ?>"><?php echo $text_backup; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','tool/backup')) {?>
                        <li><a href="<?php echo $backup; ?>"><?php echo $text_backup; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_sale_order; ?>"><?php echo $text_report_sale_order; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/sale_order')) {?>
                        <li><a href="<?php echo $report_sale_order; ?>"><?php echo $text_report_sale_order; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_sale_tax; ?>"><?php echo $text_report_sale_tax; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/sale_tax')) {?>
                        <li><a href="<?php echo $report_sale_tax; ?>"><?php echo $text_report_sale_tax; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_sale_shipping; ?>"><?php echo $text_report_sale_shipping; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/sale_shipping')) {?>
                        <li><a href="<?php echo $report_sale_shipping; ?>"><?php echo $text_report_sale_shipping; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_sale_return; ?>"><?php echo $text_report_sale_return; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/sale_return')) {?>
                        <li><a href="<?php echo $report_sale_return; ?>"><?php echo $text_report_sale_return; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_sale_coupon; ?>"><?php echo $text_report_sale_coupon; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/sale_coupon')) {?>
                        <li><a href="<?php echo $report_sale_coupon; ?>"><?php echo $text_report_sale_coupon; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_product_viewed; ?>"><?php echo $text_report_product_viewed; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/product_viewed')) {?>
                        <li><a href="<?php echo $report_product_viewed; ?>"><?php echo $text_report_product_viewed; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_product_purchased; ?>"><?php echo $text_report_product_purchased; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/product_purchased')) {?>
                        <li><a href="<?php echo $report_product_purchased; ?>"><?php echo $text_report_product_purchased; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_customer_order; ?>"><?php echo $text_report_customer_order; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/customer_order')) {?>
                        <li><a href="<?php echo $report_customer_order; ?>"><?php echo $text_report_customer_order; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_customer_online; ?>"><?php echo $text_report_customer_online; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/customer_online')) {?>
                        <li><a href="<?php echo $report_customer_online; ?>"><?php echo $text_report_customer_online; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_customer_activity; ?>"><?php echo $text_report_customer_activity; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/customer_activity')) {?>
                        <li><a href="<?php echo $report_customer_activity; ?>"><?php echo $text_report_customer_activity; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_customer_reward; ?>"><?php echo $text_report_customer_reward; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/customer_reward')) {?>
                        <li><a href="<?php echo $report_customer_reward; ?>"><?php echo $text_report_customer_reward; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_customer_credit; ?>"><?php echo $text_report_customer_credit; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/customer_credit')) {?>
                        <li><a href="<?php echo $report_customer_credit; ?>"><?php echo $text_report_customer_credit; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_marketing; ?>"><?php echo $text_marketing; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/marketing')) {?>
                        <li><a href="<?php echo $report_marketing; ?>"><?php echo $text_marketing; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_affiliate; ?>"><?php echo $text_report_affiliate; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/affiliate')) {?>
                        <li><a href="<?php echo $report_affiliate; ?>"><?php echo $text_report_affiliate; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $vqmod_manager; ?>"><?php echo $text_vqmod_manager; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','module/vqmod_manager')) {?>
                        <li><a href="<?php echo $vqmod_manager; ?>"><?php echo $text_vqmod_manager; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $customer_blacklist; ?>"><?php echo $text_customer_blacklist; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','sale/customer_blacklist')) { ?>
                        <li><a href="<?php echo $customer_blacklist; ?>"><?php echo $text_customer_blacklist; ?></a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $pavo_link; ?>">Theme Control</a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','module/themecontrol')) { ?>
                        <li><a href="<?php echo $pavo_link; ?>">Theme Control</a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $megamenu_link; ?>">MegaMenu</a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','module/pavmegamenu')) { ?>
                        <li><a href="<?php echo $megamenu_link; ?>">MegaMenu</a></li>
                        <?php } ?>
			]]></add>
		</operation>
		<operation>
			<search><![CDATA[
                        <li><a href="<?php echo $report_affiliate_activity; ?>"><?php echo $text_report_affiliate_activity; ?></a></li>
			]]></search>
			<add position="replace"><![CDATA[
                        <?php if($userac->hasPermission('access','report/affiliate_activity')) {?>
                        <li><a href="<?php echo $report_affiliate_activity; ?>"><?php echo $text_report_affiliate_activity; ?></a></li>
                        <?php } ?>
						
						<script type="text/javascript"><!--
						$('li a.parent').each(function(index) { 
                           if($(this).next('ul').children('li').size() == 0) {
                              $(this).parent('li').css('display', 'none');
                           }
                        })

                        if($('#catalog ul li:not(:has(a.parent))').size() == 0) $('#catalog').css('display', 'none');
                        if($('#extension ul li:not(:has(a.parent))').size() == 0) $('#extension').css('display', 'none');
                        if($('#sale ul li:not(:has(a.parent))').size() == 0) $('#sale').css('display', 'none');
                        if($('#system ul li:not(:has(a.parent))').size() == 0) $('#system').css('display', 'none');
                        if($('#reports ul li:not(:has(a.parent))').size() == 0) $('#reports').css('display', 'none');
                            
                            //--></script> 
			]]></add>
		</operation>
	</file>
</modification>
```


For Abandoned Carts link


```xml
   <file path="admin/view/template/common/menu.tpl">  
  		<operation>
			<search><![CDATA[<li id="reports"><a class="parent"><i class="fa fa-bar-chart-o fa-fw"></i> <span><?php echo $text_reports; ?></span></a>]]></search>
			<add position="before"><![CDATA[			
            <?php if (isset($text_abandonedCarts)) { ?>
				<li id="abandoned_carts"><a href="<?php echo $link_abandonedCarts; ?>"><i class="fa fa-shopping-cart"></i> <span><?php echo $text_abandonedCarts; ?></span></a></li>
			<?php } ?>
			]]></add>
		</operation>
	</file>
```

```xml
   <file path="admin/view/template/common/menu.tpl">  
  		<operation>
			<search><![CDATA[<li id="reports"><a class="parent"><i class="fa fa-bar-chart-o fa-fw"></i> <span><?php echo $text_reports; ?></span></a>]]></search>
			<add position="before"><![CDATA[			
            <?php if (isset($text_abandonedCarts)) { 
                if($userac->hasPermission('access','module/abandonedcarts')) {  ?>
				    <li id="abandoned_carts"><a href="<?php echo $link_abandonedCarts; ?>"><i class="fa fa-shopping-cart"></i> <span><?php echo $text_abandonedCarts; ?></span></a></li>
			    <?php } ?>
			<?php } ?>
			]]></add>
		</operation>
	</file>
```

ADV Sales & Profit Report


```xml
	<file path="admin/view/template/common/menu.tpl">
        <operation>
            <search><![CDATA[
<li><a class="parent"><?php echo $text_sale; ?></a>
            ]]></search>
            <add position="after" offset="1"><![CDATA[
<li><a href="<?php echo $report_adv_sales_profit; ?>"><?php echo $text_report_adv_sales_profit; ?></a></li>
            ]]></add>
        </operation>
        <operation error="skip">
            <search><![CDATA[
<li><a href="<?php echo $report_sale_order; ?>"><?php echo $text_report_sale_order; ?></a></li>
            ]]></search>
            <add position="replace"><![CDATA[
<li style="border-top:1px dashed #888;"><a href="<?php echo $report_sale_order; ?>"><?php echo $text_report_sale_order; ?></a></li>
            ]]></add>
        </operation>		
	</file>
```

```xml
	<file path="admin/view/template/common/menu.tpl">
        <operation>
            <search><![CDATA[
<li><a class="parent"><?php echo $text_sale; ?></a>
            ]]></search>
            <add position="after" offset="1"><![CDATA[
<?php if($userac->hasPermission('access','module/abandonedcarts')) {  ?>
	<li><a href="<?php echo $report_adv_sales_profit; ?>"><?php echo $text_report_adv_sales_profit; ?></a></li>
 <?php } ?>
            ]]></add>
        </operation>	
	</file>
```


Courier Shipment Tracker / Courier Partners

```xml
<file path="admin/view/template/common/menu.tpl">
    <operation error="log">
      <search><![CDATA[<li><a href="<?php echo $feed; ?>"><?php echo $text_feed; ?></a></li>]]>
      </search>
      <add position="after"><![CDATA[<li><a href="<?php echo $courier_link; ?>"><?php echo $text_courier; ?></a></li>]]>
      </add>
    </operation>
  </file>
```

```xml
  <file path="admin/view/template/common/menu.tpl">
    <operation error="log">
      <search><![CDATA[<li><a href="<?php echo $feed; ?>"><?php echo $text_feed; ?></a></li>]]>
      </search>
      <add position="after"><![CDATA[
      <?php if($userac->hasPermission('access','module/abandonedcarts')) {  ?>
        <li><a href="<?php echo $courier_link; ?>"><?php echo $text_courier; ?></a></li>
      <?php } ?>
      ]]></add>
    </operation>
  </file>
```
