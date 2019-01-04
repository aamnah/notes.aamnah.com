---
title: Creating and using webp images
date: 2019-01-04
---

## Usage in HTML

```html
<!-- For browsers tat support it, just use a .webp image as src -->
<img src="img/WebPimage.webp" alt="WebP rules." />
```

Safari, iOS Safari, IE, IE Mobile, Firefox, and Firefox for Android have zero support for `webp` as of this writing on January 04, 2019. 

```html
<!-- Using webp images with fallback -->
<picture>
  <source srcset="img/WebPimage.webp" type="image/webp">
  <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg"> 
  <img src="img/creakyOldJPEG.jpg" alt="Alt Text!">
</picture>
```

The browsers that support  `<picture>` will choose the most adequate image to display. The ones that don't will just show the `<img>` `<src>`

> The HTML `<picture>` element contains zero or more `<source>` elements and one `<img>` element to provide versions of an image for different display/device scenarios.

`<source>` works with `<picture>`, `<audio>` and `<video>` and is used when you want to specify the same media content in different formats supported by different browsers

```html
<video controls
    width="250"
    height="200"
    muted>
    <source src="/media/examples/flower.webm"
            type="video/webm">
    <source src="/media/examples/flower.mp4"
            type="video/mp4">
    This browser does not support the HTML5 video element.
</video>
```

## Converting images to webp on Linux

```bash
# install the tools
sudo apt install -y webp

# convert all files in a folder from webp to png
find ./ -name "*.webp" -exec dwebp {} -o {}.png \;

# convert all JPEGs to webp
find ./ -name "*.jpg" -exec cwebp -q 70 {} -o {}.webp \;

```

- For JPEGs, use `lossy`, for PNGs use `lossless`
- `-q` is for quality factor (0:small..100:big), default=75
- `cwebp` is for compressing an image file to a WebP file
- `dwebp` is for decompressing a WebP file to an image file
- `vwebp` is for decompressing a WebP file and displaying it in a window



Links
---
- [Google Developers - A new image format for the Web](https://developers.google.com/speed/webp/)
- [css-tricks: Using WebP Images](https://css-tricks.com/using-webp-images/)
- [StackExchange - Command line convert webp to jpg?](https://unix.stackexchange.com/questions/70622/command-line-convert-webp-to-jpg)
- [MDN: <picture>: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [MDN: <source>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
- [caniuse - webp](https://caniuse.com/#feat=webp)