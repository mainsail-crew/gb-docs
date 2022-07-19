---
description: >-
  Klipper ships with an OctoPrint entry in the LCD menu which does not work with
  Mainsail.
---

# Disable Octoprint LCD menu

## Modify printer.cfg <a href="#modify-printercfg" id="modify-printercfg"></a>

Add the following entry to your printer.cfg to disable OctoPrint:

```yaml
[menu __main __octoprint]
type: disabled
```
