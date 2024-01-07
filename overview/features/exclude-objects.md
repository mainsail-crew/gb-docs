---
description: Exclude individual objects while a print is in progress.
---

# Exclude Objects

{% hint style="info" %}
This feature was integrated in `Klipper v0.10.0-438`, `Moonraker v0.7.1-445` and `Mainsail v2.1.0`. Please check your installed versions first and update them if necessary.
{% endhint %}

In order to use the feature, your slicer must be configured to name the individual objects in the G-Code. The G-Code must be preprocessed either by a post-processing script in the slicer or by Moonraker plus the functionality must be enabled in Klipper. Since PrusaSlicer v2.7.0, you can generate the complete file correctly in the slicer and the Moonraker preprocessor is no longer required.

{% hint style="warning" %}
Please note that only G-Code files that have been prepared accordingly support the feature, it will not work with old, unprocessed files.
{% endhint %}

## Since PrusaSlicer v2.7.0

At first, you have to double-check the `G-code flavor` in:

```
Printer Settings > General > Firmware > G-code flavor
```

<figure><img src="../../.gitbook/assets/image (37).png" alt=""><figcaption><p>Printer Settings > General > Firmware (since v2.7.0)</p></figcaption></figure>

Next step, have to change the `Label Objects` setting to `Firmware-specific` in:

```
Print Settings > Output options > Output file > Label objects
```

<figure><img src="../../.gitbook/assets/image (39).png" alt=""><figcaption><p>Print Settings > Output options > Output file (since v2.7.0)</p></figcaption></figure>

## Before PrusaSlicer v2.7.0

### Enable the `Label objects` setting in your slicer

In PrusaSlicer or SuperSlicer you have to enable the checkbox in:

```
Print Settings > Output options > Output file > Label objects
```

![](../../.gitbook/assets/exclude\_objects-prusaslicer.png)

{% hint style="info" %}
Cura & Ideamaker label objects by default in the G-Code, and they are automatically compatible without any further settings.
{% endhint %}

### Enable the G-Code preprocessor in Moonraker

This step is necessary to convert the previously activated object labels into valid Klipper G-Code. Open your `moonraker.conf` in Mainsail, add the following setting to your config and restart the Moonraker service:

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

{% hint style="warning" %}
Only G-Code files prepared this way support excluding objects.
{% endhint %}
