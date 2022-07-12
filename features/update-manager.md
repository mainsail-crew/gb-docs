---
description: >-
  Perform updates of Mainsail, Klipper, Moonraker and your system from within
  Mainsail.
---

# Update Manager

## Moonraker.conf

To enable updates in Mainsail's web interface, add the following section to your printer's `moonraker.conf`:

```ini
[update_manager]
[update_manager client mainsail]
type: web
repo: mainsail-crew/mainsail
path: ~/mainsail
```

Restart the Moonraker service and the Update Manager will appear in Mainsail's machine settings.

![](../.gitbook/assets/update-manager.png)

{% hint style="info" %}
You can find further information on this topic by visiting the [Moonraker documentation](https://github.com/Arksine/moonraker/blob/master/docs/configuration.md#update\_manager).
{% endhint %}

