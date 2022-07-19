# Update Manager

{% hint style="info" %}
You can find further information on this topic in the [Moonraker documentation](https://github.com/Arksine/moonraker/blob/master/docs/configuration.md#update\_manager).sh
{% endhint %}

## Enabling Update Manager <a href="#enabling-update-manager" id="enabling-update-manager"></a>

To use the built in Update Manager it must first be enabled by editing the `moonraker.conf` file. From a terminal navigate to Klipper’s configuration directory and edit the configuration file:

```bash
cd ~/klipper_config
sudo nano moonraker.conf
```

Add the following section to your printer’s `moonraker.conf`:

```yaml
[update_manager]
[update_manager client mainsail]
type: web
repo: mainsail-crew/mainsail
path: ~/mainsail
```

Restart Moonraker:

```bash
sudo systemctl restart moonraker
```

## Using Mainsail to Update <a href="#using-mainsail-to-update" id="using-mainsail-to-update"></a>

With the update manager enabled, reload your web browser and select the ‘Machine’ tab from the sidebar. You should now see the Update Manager panel.

{% hint style="info" %}
Holding shift while clicking the browser’s refresh button (or pressing Control + F5) will force it to reload the page fully without the cache.
{% endhint %}

The update order is top to bottom.

![](../../.gitbook/assets/screenshot-update-manager-example-not-up-to-date.png)

To update a component, click the ‘UPDATE’ button next to the component you wish to update.

A popover window will launch and the component will be updated. When the update is finished, you can close the window.
