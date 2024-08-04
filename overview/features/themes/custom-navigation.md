---
description: >-
  It is also possible to add additional navigation points via a custom theme.
  You have to add a navi.json file with the following content.
---

# Custom Navigation

```json
[
  {
    "title":"Custom1",
    "href":"https://www.google.com"
  },
  {
    "title":"Moonraker",
    "href":"/server/info",
    "target": "_blank",
    "position": 90,
    "icon": "M5 5H7V11H5V5M10 5H8V11H10V5M5 19H7V13H5V19M10 13H8V19H10V17H15V15H10V13M2 21H4V3H2V21M20 3V7H13V5H11V11H13V9H20V15H18V13H16V19H18V17H20V21H22V3H20Z"
  }
]
```

### Options

#### title: string (requirement)

`title` is the name of the new navigation point.

#### href: string (requirement)

This is the path/url to link to.

#### target: string

With this option you can specify whether the link is opened in a new tab or in the same window. possible values here are `_self` and `_blank`.

#### position: integer

This value is used to sort the navigation. All normal navigation points are numbered in steps of 10 (Dashboard: 10, Webcam: 20, Console: 30, ... Machine: 90). Simply set a value in between to place the new navipoint between two default points.

#### icon: string

A custom icon can be added to the navigation point. This can be copied from the material design icons. To do this, open the page [https://pictogrammers.com/library/mdi/](https://pictogrammers.com/library/mdi/), open an icon and click on "copy SVG". All you need is the path. Hier the example from the `account` icon:

```svg
// complete SVG
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<title>account</title>
<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
</svg>

// what we need
M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z
```
