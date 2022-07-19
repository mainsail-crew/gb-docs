# Additional Sensors

You can integrate additional sensors [supported by Klipper](https://www.klipper3d.org/Config\_Reference.html#temperature-sensors) into the temperature graph in Mainsail.

## Raspberry Pi temperature sensor <a href="#raspberry-pi-temperature-sensor" id="raspberry-pi-temperature-sensor"></a>

Append the following section to your `printer.cfg`:

```
[temperature_sensor raspberry_pi]
sensor_type: temperature_host
min_temp: 10
max_temp: 100
```

## ATSAM, ATAMD, and STM32 temperature sensor <a href="#atsam-atamd-and-stm32-temperature-sensor" id="atsam-atamd-and-stm32-temperature-sensor"></a>

Append the following section to your `printer.cfg`:

```
[temperature_sensor mcu_temp]
sensor_type: temperature_mcu
min_temp: 0
max_temp: 100
```

{% hint style="info" %}
For more information on this topic and how to add additional sensors, please refer to [Klipper documentation](https://www.klipper3d.org/Config\_Reference.html#builtin-micro-controller-temperature-sensor).
{% endhint %}
