---
description: >-
  Mainsail uses G-Code metadata in various places. For example, in the G-Code
  file manager or the print history.
---

# ✏ Metadata

{% hint style="info" %}
Mainsail displays metadata given by Moonraker (API). You can find a list [here](https://moonraker.readthedocs.io/en/latest/web\_api/#get-gcode-metadata).
{% endhint %}

Most popular slicers (e.g., PrusaSlicer, SuperSlicer, Cura, Simplify3D, ideaMaker) create such metadata automatically while generating the G-Code. For some of them, you might have to do some trickery to get specific data added to the files. This page explains how to achieve that. The list may change over time …

## Cura

Cura does not automatically add all metadata to the G-Code. However, it provides special placeholders, so they can be added to the Start G-Code.

Just add the following lines to the top of your "Start G-Code" section in Cura:

```
;Filament name = {material_name}
;Filament type = {material_type}
;Filament weight = {filament_weight}
;Nozzle diameter = {machine_nozzle_size}
```

{% hint style="warning" %}
IMPORTANT:&#x20;

* The lines need to be at the very top, before any other statements in the G-Code.
* Pay attention to exact notation.
{% endhint %}
