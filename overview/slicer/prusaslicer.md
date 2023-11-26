# PrusaSlicer

### Thumbnail (since v2.7.0)

<figure><img src="../../.gitbook/assets/image (18).png" alt="Thumbnail from PrusaSlicer"><figcaption></figcaption></figure>

In "Expert" mode PrusaSlicer has an option in the "Printer Settings" tab to activate previews. Under `General / Firmware`, enter `32x32/PNG,400x300/PNG` as "G-code thumbnails".

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Printer Settings > General > Firmware (since v2.7.0)</p></figcaption></figure>

### Thumbnail (since v2.3.0)

{% embed url="https://www.youtube.com/watch?v=4nFqfq8kikU" %}

### Enable Exclude Object

In PrusaSlicer you have to select `Firmware-specific` in:

```
Print Settings > Output options > Output file > Label objects
```

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption><p>Print Settings > Output options > Output file (since v2.7.0)</p></figcaption></figure>

This setting will enable Exclude Object

### Direct G-code from slicer

Enable advanced or expert mode and change the options under `Printer Settings > General` as shown in the screenshot below. A “Physical Printer” must be configured in `Printer Settings > General`.

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

### Best practise G-codes

These custom G-codes are necessary to get the best user experience.

#### Layer Count

To have Slicer layer counts in Mainsail, you have to add these two G-codes in your custom G-codes in PrusaSlicer:

Start G-code (before your start G-code):

```
SET_PRINT_STATS_INFO TOTAL_LAYER=[total_layer_count]
```

End G-code (at the last line):

```
; total layers count = [total_layer_count]
```

After layer change G-code:

```
SET_PRINT_STATS_INFO CURRENT_LAYER={layer_num + 1}
```
