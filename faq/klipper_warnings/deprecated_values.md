# Deprecated Values

### Removal of `NTC 100K beta 3950` sensor type. <a href="#ntc-100k-beta-3950" id="ntc-100k-beta-3950"></a>

The “NTC 100K beta 3950” temperature sensor is _deprecated_ and will be removed in the near future.

In order to solve the problem search in your config for `sensor_type: NTC 100K beta 3950` and replace it with `sensor_type: Generic 3950`.

Most users will find the “Generic 3950” temperature sensor more accurate. Anyway you can continue to use the older (typically less accurate) definition. Therefor define a custom thermistor with `temperature1: 25`, `resistance1: 100000`, and `beta: 3950`.

{% hint style="info" %}
[Source](https://www.klipper3d.org/Config\_Changes.html) Klipper Configuration Changes
{% endhint %}

### Removal of `rpi_temperature` sensor alias. <a href="#rpi_temperature" id="rpi_temperature"></a>

Replace `sensor_type: rpi_temperature` by `sensor_type: temperature_host` everywhere in your config.

{% hint style="info" %}
The above description was provided by our community member [FHeilmann](https://github.com/FHeilmann) and we have his permission to publish it here. Thanks a lot! [Source](https://gist.github.com/FHeilmann/a8097b3e908e85de7255bbe6246ddfd5)
{% endhint %}

