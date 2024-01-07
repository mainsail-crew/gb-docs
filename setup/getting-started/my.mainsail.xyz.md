# my.mainsail.xyz

{% hint style="info" %}
Mainsail and MainsailOS respect [Data Privacy](../../about/data-privacy.md).
{% endhint %}

The hosted version of Mainsail can be used on the same local network with your printer or on a different remote to network and requires you to setup [remote access](../../overview/quicktips/remote-access.md).

## &#x20;Requirements <a href="#requirements" id="requirements"></a>

* MainsailOS and KIAUH are preconfigured to meet the requirements for the hosted service.
* If you have a manual installation, the following requirements must be met:
  * Klipper
  * Moonraker
  * `my.mainsail.xyz` must be configured as a CORS domain in `moonraker.conf`.

### Editing `moonraker.conf` for remote access <a href="#editing-moonrakerconf-for-remote-access" id="editing-moonrakerconf-for-remote-access"></a>

{% hint style="info" %}
You can learn more about editing Moonraker’s authorization [configuration documentation here.](https://moonraker.readthedocs.io/en/latest/configuration/#authorization)
{% endhint %}

To configure your local moonraker installation for [my.mainsail.xyz](http://my.mainsail.xyz), open `moonraker.conf` and add the following `authorization` section:

```yaml
[authorization]
cors_domains:
    *://my.mainsail.xyz
    *://*.local
trusted_clients:
    10.0.0.0/8
    127.0.0.0/8
    169.254.0.0/16
    172.16.0.0/12
    192.168.0.0/16
    FE80::/10
    ::1/128
```
