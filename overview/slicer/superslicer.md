# SuperSlicer

### Thumbnail (since v2.2.54.0)

<figure><img src="../../.gitbook/assets/image (22).png" alt="Thumbnail from PrusaSlicer"><figcaption></figcaption></figure>

In "Expert" mode PrusaSlicer has an option in the "Printer Settings" tab to activate previews. Under `General / Firmware`, enter `32x32,400x300` as "G-code thumbnails".

<figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>

{% embed url="https://www.youtube.com/watch?v=xdOM5Uco9hM" %}

### Enable the `Label objects` setting in your slicer

In PrusaSlicer or SuperSlicer you have to enable the checkbox in:

```
Print Settings > Output options > Output file > Label objects
```

<figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

### Direct G-code upload

Enable advanced or expert mode and change the options under `Printer Settings / General` as shown in the screenshot below. A “Physical Printer” must be configured in `Printer Settings / General`.

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

### Best practise G-codes

These custom G-codes are necessary to get the best user experience.

#### Layer Count

To have Slicer layer counts in Mainsail, you have to add these two G-codes in your custom G-codes in PrusaSlicer:

Start G-code (before your start G-code):

```
SET_PRINT_STATS_INFO TOTAL_LAYER=[total_layer_count]
```

After layer change G-code:

```
SET_PRINT_STATS_INFO CURRENT_LAYER={layer_num + 1}
```
