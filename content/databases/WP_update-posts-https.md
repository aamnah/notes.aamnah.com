---
title: Update WordPress posts for SSL https
subtitle: Update links in your WordPress posts so that they link to `https` secure endpoints
slug: update-wordpress-posts-https
date: 2017-08-14
---

---
### tl;dr

```sql
# UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, '', '')

# Update self-hosted embeds (images, iframes, scripts, etc.)
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://yoursite.com', 'https://yoursite.com');
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://www.yoursite.com', 'https://www.yoursite.com');

# Update internal pingbacks
UPDATE `wp_comments` SET `comment_author_url` = REPLACE(comment_author_url, 'http://yoursite.com', 'https://yoursite.com');
UPDATE `wp_comments` SET `comment_author_url` = REPLACE(comment_author_url, 'http://www.yoursite.com', 'https://www.yoursite.com');

# Update YouTube embeds
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://www.youtube.com', 'https://www.youtube.com');
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://img.youtube.com', 'https://img.youtube.com');

# Update Vimeo embeds
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://player.vimeo.com/', 'https://player.vimeo.com/');

# Update Slideshare embeds
UPDATE `wp_posts` SET `post_content` = REPLACE(post_content, 'http://www.slideshare.net', 'https://www.slideshare.net');
```
---

### Why?
- You have installed an SSL cert and force all URLs to https, yet the lock on your WordPress site's URL has still not turned green
- Your post's media (uploads, images etc.) and embedded content (YouTube, Vimeo etc.) still links to `http` (insecure) endpoints (links).


### How
- The post content for your posts is in the `post_content` column of the `wp_posts` table
- The simplest way to upload the links is to run a `REPLACE` function and change `http` with `https`
- You can find out which links are insecure/blocked in your browser's Developer Console (the `Mixed Content: ` warnings..)

### Find all posts linking to insecure URLs

```sql
SELECT * FROM `wp_posts` where `post_content` LIKE "%http://%"
```

While you might be tempted to just update ALL links in posts to `https` in one go with the above command, this can cause issues. Not all sites (unfortunately) have shifted to `https` yet and if you update all posts links, you'll get plenty of broken ones. Best approach is to update the links for known sites that you know for a fact use `https` (Sites like YouTube, Vimeo, Twitter as well your own site)

### Update links to media files
This means anything in the `wp-content/uploads` directory

```sql
# Update Media links
UPDATE `wp_posts` SET `post_content`=REPLACE(post_content, 'http://amiranzur.com/wp-content/uploads', 'https://amiranzur.com/wp-content/uploads')
```

### Update video emeds
```sql
# Update YouTube links
UPDATE `wp_posts` SET `post_content`=REPLACE(post_content, 'http://youtube.com/', 'https://youtube.com/')

# Update Vimeo links
UPDATE `wp_posts` SET `post_content`=REPLACE(post_content, 'http://player.vimeo.com/', 'https://player.vimeo.com/')
```

LINKS
---

- [StackOverflow: Force Wordpress to use https for embeds](https://stackoverflow.com/questions/32687040/force-wordpress-to-use-https-for-embeds)
- [Migrating your WordPress website from HTTP to HTTPS](https://www.bram.us/2014/12/06/migrating-your-wordpress-website-from-http-to-https/)
