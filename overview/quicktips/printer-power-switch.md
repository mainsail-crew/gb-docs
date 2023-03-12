---
description: With this config, you can switch the printer comfortably on and off.
---

# Printer power switch

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption><p>Printer is powered off panel</p></figcaption></figure>

You must configure your Moonraker power device with the following settings to get this panel instead of the Klipper error.

```yaml
[power printer]
type: <any type>
...
bound_services: klipper
```

Important is the name `printer` and the attribute `bound_services: klipper`. Mainsail will use this power device to check for a "powered off" printer.

