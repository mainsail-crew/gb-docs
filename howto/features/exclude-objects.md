---
description: Exclude individual objects while a print is in progress.
---

# Exclude Objects

{% hint style="info" %}
This feature was integrated in `Klipper v0.10.0-438`, `Moonraker v0.7.1-445` and `Mainsail v2.1.0`. Please check your installed versions first and update them if necessary.
{% endhint %}

To be able to use this feature , the following steps are required.

## Enable the `Label objects` setting in your slicer

In PrusaSlicer or SuperSlicer you have to enable the checkbox in:

```
Print Settings > Output options > Output file > Label objects
```

![](../../.gitbook/assets/exclude\_objects-prusaslicer.png)

{% hint style="info" %}
Cura & Ideamaker label objects by default in the G-Code, and they are automatically compatible without any further settings.
{% endhint %}

## Enable the G-Code preprocessor in Moonraker

This step is necessary to convert the previously activated object labels into valid Klipper G-Code. Open your `moonraker.conf` in Mainsail and add the following setting to your config:

```ini
[file_manager]
enable_object_processing: True
```

{% hint style="info" %}
Alternatively it is possible to use an external preprocessor. See [preprocess-cancellation](https://github.com/kageurufu/cancelobject-preprocessor) for more details.
{% endhint %}

## Enable `exclude_object` module in Klipper

Open your `printer.cfg` in Mainsail and add the following setting to it:

```ini
[exclude_object]
```

{% hint style="info" %}
For more information about the exclude\_object module in Klipper see: [exclude\_object](https://www.klipper3d.org/Exclude\_Object.html)
{% endhint %}

From now on all newly uploaded G-Code files should support this function. A new button in form of a dashed square with an x in the center appears in the status panel.

![](../../.gitbook/assets/exclude\_objects-status\_panel.png)

The button will open a dialog in which you can select each individual object and exclude it from the currently ongoing print.

![](../../.gitbook/assets/exclude\_objects.png)
