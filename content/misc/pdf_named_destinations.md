---
title: Named destination in PDF on Linux
date: 2018-10-26
description: How to create named destination in LibreOffice and hyperlink to a spcific point in the PDF using those naed destinations
---

You can link to a portion of a PDF just like you link to a portion of the webiste using anchor tags. In PDFs, the term _named destinations_ is used for such anchor tags.

### Renaming bookmarks
The document usually has automatically generated bookmarks. Their names are usually obnoxious though, like_ _Toc527397839_. You can rename them for better usability.

You have to do this in the doc file before exporting it as PDF

- In LibreOffice, open the Navigator _View > Navigator (F5)_. 
- Expand the Bookmarks list.
- Double click on a bookmark to go to that point.
- Right click on a bookamrk and _Bookmark > Rename_ to rename the bookmark

### Creating named detinations based on the bookmarks
- Export the file with the named destinations option _File > Export As > Export as PDF_. In _PDF Options > Links > General - Export bookmarks as named destinations_

### Getting a list of all destinations in a PDF
See which detinations are available with `pdfinfo -dests file.pdf`

```bash
pdfinfo -dests Downloads/Internetism-181012.pdf 
```

```
Page  Destination                 Name
   8 [ XYZ   36  522 null      ] "5FToc527397838"
  11 [ XYZ   36  522 null      ] "5FToc527397839"
  18 [ XYZ   36  522 null      ] "5FToc527397840"
  28 [ XYZ   36  522 null      ] "5FToc527397841"
  29 [ XYZ   36  251 null      ] "5FToc527397842"
  31 [ XYZ   36  522 null      ] "5FToc527397843"
  32 [ XYZ   36  515 null      ] "5FToc527397844"
  40 [ XYZ   36  490 null      ] "5FToc527397845"
  43 [ XYZ   36  452 null      ] "5FToc527397846"
  57 [ XYZ   36  427 null      ] "5FToc527397847"
  64 [ XYZ   36  522 null      ] "5FToc527397848"
  71 [ XYZ   36  496 null      ] "5FToc527397849"
  75 [ XYZ   36  522 null      ] "5FToc527397850"
  79 [ XYZ   36  522 null      ] "5FToc527397851"
  85 [ XYZ   36  522 null      ] "5FToc527397852"
  85 [ XYZ   36  310 null      ] "5FToc527397853"
  86 [ XYZ   36  138 null      ] "5FToc527397854"
  88 [ XYZ   36  440 null      ] "5FToc527397855"
  89 [ XYZ   36  576 null      ] "5FToc527397856"
  92 [ XYZ   36  522 null      ] "5FToc527397857"
  92 [ XYZ   36  273 null      ] "5FToc527397858"
  96 [ XYZ   36  226 null      ] "5FToc527397859"
  99 [ XYZ   36  576 null      ] "5FToc527397860"
 100 [ XYZ   36  239 null      ] "5FToc527397861"
 102 [ XYZ   36  502 null      ] "5FToc527397862"
 102 [ XYZ   36  139 null      ] "5FToc527397863"
 105 [ XYZ   36  576 null      ] "5FToc527397864"
 107 [ XYZ   36  502 null      ] "5FToc527397865"
 107 [ XYZ   36  189 null      ] "5FToc527397866"
 113 [ XYZ   36  538 null      ] "5FToc527397867"
 125 [ XYZ   36  522 null      ] "5FToc527397868"
 126 [ XYZ   36  319 null      ] "5FToc527397869"
 127 [ XYZ   86  366 null      ] "table"
 129 [ XYZ   36  176 null      ] "5FToc527397870"
 132 [ XYZ   36  540 null      ] "5FToc527397871"
 133 [ XYZ   36  389 null      ] "5FToc527397872"
 135 [ XYZ   36  540 null      ] "5FToc527397873"
 138 [ XYZ   36  452 null      ] "5FToc527397874"
 149 [ XYZ   36  540 null      ] "5FToc527397875"
 152 [ XYZ   36  522 null      ] "5FToc527397876"
 154 [ XYZ   36  540 null      ] "5FToc527397877"
 156 [ XYZ   36  522 null      ] "5FToc527397878"
 159 [ XYZ   36  490 null      ] "5FToc527397879"
 160 [ XYZ   36  465 null      ] "5FToc527397880"
 162 [ XYZ   36  522 null      ] "5FToc527397881"
 162 [ XYZ   36  260 null      ] "5FToc527397882"
 163 [ XYZ   36  364 null      ] "5FToc527397883"
 163 [ XYZ   36  126 null      ] "5FToc527397884"
 164 [ XYZ  195  378 null      ] "5FGoBack"
 165 [ XYZ   36  576 null      ] "5FToc527397885"
 165 [ XYZ   36  463 null      ] "5FToc527397886"
 165 [ XYZ   36  237 null      ] "5FToc527397887"
 166 [ XYZ   36  501 null      ] "5FToc527397888"
 168 [ XYZ   50  522 null      ] "5FToc527397889"
```

After renaming 18 chpaters

```
Page  Destination                 Name
   8 [ XYZ   36  522 null      ] "5Fchapter1"
  11 [ XYZ   36  522 null      ] "5Fchapter2"
  18 [ XYZ   36  522 null      ] "5Fchapter3"
  28 [ XYZ   36  522 null      ] "5Fchapter4"
  29 [ XYZ   36  251 null      ] "5FToc527397842"
  31 [ XYZ   36  522 null      ] "5Fchapter5"
  32 [ XYZ   36  515 null      ] "5FToc527397844"
  40 [ XYZ   36  490 null      ] "5FToc527397845"
  43 [ XYZ   36  452 null      ] "5FToc527397846"
  57 [ XYZ   36  427 null      ] "5FToc527397847"
  64 [ XYZ   36  522 null      ] "5Fchapter6"
  71 [ XYZ   36  496 null      ] "5Fchapter7"
  75 [ XYZ   36  522 null      ] "5Fchapter8"
  79 [ XYZ   36  522 null      ] "5Fchapter9"
  85 [ XYZ   36  310 null      ] "5FToc527397853"
  85 [ XYZ   36  522 null      ] "5Fchapter10"
  86 [ XYZ   36  138 null      ] "5FToc527397854"
  88 [ XYZ   36  440 null      ] "5FToc527397855"
  89 [ XYZ   36  576 null      ] "5FToc527397856"
  92 [ XYZ   36  273 null      ] "5FToc527397858"
  92 [ XYZ   36  522 null      ] "5Fchapter11"
  96 [ XYZ   36  226 null      ] "5FToc527397859"
  99 [ XYZ   36  576 null      ] "5FToc527397860"
 100 [ XYZ   36  239 null      ] "5FToc527397861"
 102 [ XYZ   36  502 null      ] "5FToc527397862"
 102 [ XYZ   36  139 null      ] "5FToc527397863"
 105 [ XYZ   36  576 null      ] "5FToc527397864"
 107 [ XYZ   36  502 null      ] "5FToc527397865"
 107 [ XYZ   36  189 null      ] "5FToc527397866"
 113 [ XYZ   36  538 null      ] "5Fchapter12"
 125 [ XYZ   36  522 null      ] "5Fchapter13"
 126 [ XYZ   36  319 null      ] "5FToc527397869"
 127 [ XYZ   86  366 null      ] "table"
 129 [ XYZ   36  176 null      ] "5FToc527397870"
 132 [ XYZ   36  540 null      ] "5FToc527397871"
 133 [ XYZ   36  389 null      ] "5FToc527397872"
 135 [ XYZ   36  540 null      ] "5FToc527397873"
 138 [ XYZ   36  452 null      ] "5FToc527397874"
 149 [ XYZ   36  540 null      ] "5FToc527397875"
 152 [ XYZ   36  522 null      ] "5Fchapter14"
 154 [ XYZ   36  540 null      ] "5FToc527397877"
 156 [ XYZ   36  522 null      ] "5Fchapter15"
 159 [ XYZ   36  490 null      ] "5FToc527397879"
 160 [ XYZ   36  465 null      ] "5FToc527397880"
 162 [ XYZ   36  260 null      ] "5FToc527397882"
 162 [ XYZ   36  522 null      ] "5Fchapter16"
 163 [ XYZ   36  364 null      ] "5FToc527397883"
 163 [ XYZ   36  126 null      ] "5FToc527397884"
 164 [ XYZ  195  378 null      ] "5FGoBack"
 165 [ XYZ   36  576 null      ] "5FToc527397885"
 165 [ XYZ   36  463 null      ] "5FToc527397886"
 165 [ XYZ   36  237 null      ] "5FToc527397887"
 166 [ XYZ   36  501 null      ] "5Fchapter17"
 168 [ XYZ   50  522 null      ] "5Fchapter18"
```

### Linking to the named destinations from a webpage

Create a hyperlink using the destination in the format `#NAME`

```html
<a href="file.pdf/#5Fchapter14">Chapter 14</a>
```

Links
---

- [Acrobat: Create a URL to open a PDF file at a specific page](https://helpx.adobe.com/acrobat/kb/link-html-pdf-page-acrobat.html)