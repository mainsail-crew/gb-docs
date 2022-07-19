---
description: Create a basic folder structure to build your own theme.
---

# Prepare

## &#x20;Preparing your custom theme <a href="#preparing-your-custom-theme" id="preparing-your-custom-theme"></a>

### .theme folder <a href="#theme-folder" id="theme-folder"></a>

You can use Mainsail’s built-in file manager (`Settings > Machine`) to create the `.theme` folder. Upload the files to this folder and edit your CSS files.

{% hint style="info" %}
The dot in the folder name means that it is a hidden folder. You will need to activate “Show Hidden Files” in Mainsail’s file manager.
{% endhint %}

![](../../../.gitbook/assets/screenshot-display-hidden-files.png)

## &#x20;Directory structure <a href="#directory-structure" id="directory-structure"></a>

{% hint style="info" %}
The below directory and file structure provides an overview of files you could include. All listed files in the `.theme` folder are optional and will only be loaded if they are provided.
{% endhint %}



```
+-- ..
|-- klipper_config
|   |-- .theme
|   |   |-- sidebar-logo.svg|jpg|png|gif
|   |   |-- sidebar-background.svg|jpg|png|gif
|   |   |-- main-background.svg|jpg|png|gif
|   |   |-- favicon-16x16.png
|   |   |-- favicon-32x32.png
|   |   |-- custom.css
|   |   |-- ...
```
