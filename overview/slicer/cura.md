# Cura

### Thumbnail

{% hint style="info" %}
If you're using the Moonraker Connection plugin for Cura, you can skip these steps. This plugin includes a feature for the generation of thumbnails. 
{% endhint %}

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

You have to add a Post Processing Script to add "G-code thumbnails" in Cura. To add these scripts, click on `Extensions > Post Processing > Modify Gcode`. Then click on `Add a script`, choose `Create Thumbnail` and fill in the size `32x32`. Add again the same script with the size `400x400`.

{% hint style="warning" %}
It is important for this size to be a square, with equal size on both length and width. If you don't use a square resolution, Cura will squeeze the thumbnail.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure>

### Direct G-code upload

Install the [Moonraker Connection](https://marketplace.ultimaker.com/app/cura/plugins/emtrax/MoonrakerConnection) plugin by [Emtrax](https://github.com/emtrax-ltd) using the Ultimaker Marketplace.

Next, configure the plugin's parameters in Cura:

1. Navigate to `Settings > Printer > Manage Printers`
2. Select the printer profile you wish to connect to Moonraker
3. Click `Connect Moonraker`.
4. Configure the fields as appropriate for your printer. The most important ones are listed below.
  - Connection > **Address (URL):**  
    The address you've been using to access Mainsail, prefixed by `http://`.  
    e.g. `http://myprinter.local/`
  - Monitor > **Camera > URL**
    The address of the camera stream on the network, prefixed by `http://`.
    e.g. `http://myprinter.local/webcam/stream`

<figure><img src="../../.gitbook/assets/cura_moonraker-connection_configuration-window.jpg" alt="Moonraker Connection configuration window in Cura"><figcaption>Moonraker Connection configuration window in Cura</figcaption></figure>

### Best practise G-codes

In Cura, there is a straightforward solution to add custom G-codes. Pedro Lamas has developed an excellent post-processing script for including the necessary custom G-codes.

Follow the guide here to use this script: [https://github.com/pedrolamas/klipper-preprocessor](https://github.com/pedrolamas/klipper-preprocessor)

{% hint style="info" %}
If you think Pedro's script is excellent, feel free and pay Pedro a coffee: [https://ko-fi.com/pedrolamas](https://ko-fi.com/pedrolamas)
{% endhint %}
