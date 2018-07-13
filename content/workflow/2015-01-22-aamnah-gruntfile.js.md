---

title: My Gruntfile.js
slug: aamnah-gruntfile

---

It includes the following
- Minify JS
- Minify CSS
- Minify HTML
- Optimizie Images
- Create responsive screenshots

We'll use **pageres** to generate screenshots of the website in multiple resolutions. This comes in handy when you need to show that your website is responsive, need to check it looks good in all resolutions or just need a screenshot of the website to include as a preview.

For example, WordPress themes automatically pick up 'screenshot.png' form the theme's root folder to show it as preview when the user is selecting a theme from the Admin, under Appearance > Themes. **pageres** can automatically take that screenshot for you.

**NOTE:** ImageOptim is wayyyy better than imagemin. Imageoptim 'Saved 3MB out of 24.9MB. 15.4% per file on average (up to 84.7%)' where imagemin did 'Minified 368 images (saved 0 B)' for the same files. The only issue is, Image optim works on your mac and opens imageoptim installed on it to compress images. Whereas, imagemin works on the server.


Links
---

- [pageres](https://github.com/sindresorhus/pageres)
- [grunt-pageres](https://github.com/sindresorhus/grunt-pageres)
