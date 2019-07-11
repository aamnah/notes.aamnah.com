---
title: Drawing with SVG paths and demystifying the code
date: 2019-07-11
---


```xml
<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
  <title>Flag</title>
  <path d="
  M 85.31,60.61
  a 3.07,3.07,0,0,1-.65,1.79
  c -2.14,2.65-5.11,3.93-8.31,4.72
  A 25.94,25.94,0,0,1,58,65.39
  c -0.56-.28-1.09-0.65-1.63-1-2.22-1.4-3.66-3.09-3.24-6
  a 48.43,48.43,0,0,0,.06-6.64
  c -2.45-.36-4.87-0.83-7.31-1.06
  a 56.74,56.74,0,0,0-15.71.56,21.14,21.14,0,0,0-8,2.93
  A 2.27,2.27,0,0,0,21,56.26
  Q 21,77.51,21,98.77
  V 100
  H 14.66
  V 3
  a 3,3,0,0,1,3-3
  H 18
  a 3,3,0,0,1,3,3
  V 9.76
  c 4.55-4.62,10.31-5.69,16.27-6.17
  a 35.46,35.46,0,0,1,15.5,2,19.2,19.2,0,0,1,6.16,3.69,1.87,1.87,0,0,1,.7,1.55
  c 0,2.91,0,5.82,0,8.91,8.92,1.82,17.58,2.06,25.73-3
  V 17.6
  Q 85.34,39.11,85.31,60.61
  Z"/>
</svg>
<!-- 

https://css-tricks.com/svg-path-syntax-illustrated-guide/

M move on canvas (absolute coordinates)
m move from current position

L draw a Line (absolute coordinates)
l draw a Line from current position

H draw a Horizontal line
h draw a horizontal line

V draw a Vertical line
v draw a Vertical line

C (bezier) Curve
c (bezier) Curve

Z/z close the path (optional)

 -->
 ```