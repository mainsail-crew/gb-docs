---
description: Replace the default logos and icons with your own.
---

# Logos and Icons

You can use the built in file manager in `Settings > Machine` to upload your own logos and icons. Customizing your icons can help identify your printers.

## Sidebar logo <a href="#sidebar-logo" id="sidebar-logo"></a>

Upload a logo into your .theme folder and name it `sidebar-logo.<extension>`, where extension is one of the valid file types below.

For more information on creating and uploading to your `.theme` folder, please refer to the [Customizing your theme](https://docs.mainsail.xyz/features/theming/prepare) chapter.

| Filename               | sidebar-logo              |
| ---------------------- | ------------------------- |
| Valid file extensions  | .svg, .jpg, .png and .gif |
| Recommended image size | XxY px                    |

![](../../../.gitbook/assets/screenshot-sidebar-logo.png)

{% hint style="info" %}
If you use a SVG, you can use "var(--color-logo, #000000)" as fill color, to use the logo color from the interface settings.
{% endhint %}

## Favicons <a href="#favicons" id="favicons"></a>

Upload favicons into your .theme folder and name them `favicon-32x32.png` _(required)_ and `favicon-16x16.png` _(optional)_.

| Filename               | favicon-32x32 _(required)_ |
| ---------------------- | -------------------------- |
|                        | favicon-16x16 _(optional)_ |
| Valid file extensions  | .png                       |
| Recommended image size | 32x32px, 16x16px           |

{% hint style="info" %}
A browser refresh may be necessary (CTRL+SHIFT+F5 on Windows or CMD+SHIFT+R on macOS) to reload without the browser cache.
{% endhint %}

![](../../../.gitbook/assets/screenshot-favicons.png)
