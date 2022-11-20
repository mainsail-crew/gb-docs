# Hide macros, outputs or fans

You can show and hide G-Code macros in the interface settings. Did you know, that you can also hide G-Code macros by prefixing the name with an underscore?

```yaml
[gcode_macro MY_AWESOME_GCODE]
gcode:
	_MY_HELPER_CODE
```

```yaml
[gcode_macro _MY_HELPER_CODE]
gcode:
	M300
```

`MY_AWESOME_GCODE` appears in your interface settings, `_MY_HELPER_CODE` does not.

![](../../.gitbook/assets/my\_awesome\_macro.png)

{% hint style="info" %}
This also works for other configuration sections including **fans and outputs.**
{% endhint %}

### Macros with `rename_existing`

All `gcode_macros` with the attribute `rename_existing` are also hidden in Mainsail, because these are default Klipper Gcodes and these should be implemented in Mainsail itself with buttons already.

For example the `PAUSE` macro in the `mainsail.cfg`:

```
[gcode_macro PAUSE]
description: Pause the actual running print
rename_existing: PAUSE_BASE
gcode:
  PAUSE_BASE
  _TOOLHEAD_PARK_PAUSE_CANCEL
```
