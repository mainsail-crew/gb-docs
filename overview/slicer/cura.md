# Cura

### Thumbnail

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

You have to add a Post Processing Script to add "G-code thumbnails" in Cura. To add these scripts, click on `Extensions > Post Processing > Modify Gcode`. Then click on `Add a script`, chose `Create Thumbnail` and fill in the size `32x32`. Add again the same script with the size `400x400`.

{% hint style="warning" %}
Important is, that the size is square! If you don't use a square resolution, Cura will squeeze the thumbnail.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

### Best practise G-codes

In Cura, there is a straightforward solution to add custom G-codes. Pedro Lamas has developed an excellent script that you can use as post-processing to add everything necessary.

Follow the guide here to use this script: [https://github.com/pedrolamas/klipper-preprocessor](https://github.com/pedrolamas/klipper-preprocessor)

{% hint style="info" %}
If you think Pedro's script is excellent, feel free and pay Pedro a coffee: [https://ko-fi.com/pedrolamas](https://ko-fi.com/pedrolamas)
{% endhint %}
