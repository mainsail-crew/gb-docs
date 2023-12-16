---
description: >-
  It allows macros in Klipper to trigger dialog prompts to interact with the
  Firmware and will enable the user to choose between options or to close the
  dialog again in case it's no longer needed.
---

# Macro Prompts

<figure><img src="../../.gitbook/assets/image (28).png" alt="Example Filament Runout Prompt"><figcaption><p>Example: Filament runout prompt</p></figcaption></figure>

{% hint style="warning" %}
This feature needs the `[respond]` module of Klipper. So please check if this is enabled in your Klipper config.

This feature has been implemented since Mainsail v2.9.0. So, double-check your Mainsail version to be safe to use this feature.
{% endhint %}

## Supported Macro prompt commands:

With these command, you can build your own Macro-Prompt:

### // action:prompt\_begin \<headline>

This is the first command to define a prompt. The `<headline>`-Attribute will be the headline of the prompt dialog.

### // action:prompt\_text \<text>

This command is to add a description text in the prompt.

### // action:prompt\_button \<label>|\<gcode?>|\<color?>

With this command, you can add a button in the prompt.

* `<label>`: Is the text inside of the button
* `<gcode?>`: This attribute is optional to add a different G-Code to this button. (Default is the label text)
* `<color?>`: This attribute is optional and will change the color of the button. Possible options are `primary`, `secondary`, `info`, `warning`, `error`. (Default is dark gray)

<figure><img src="../../.gitbook/assets/image (29).png" alt=""><figcaption><p>Example of all button colors</p></figcaption></figure>

### // action:prompt\_button\_group\_start

With this command, you can start a "button group". This will allow you to display multiple buttons in the same row.

### // action:prompt\_button\_group\_end

With this command, you can close the current "button group"

### // action:prompt\_footer\_button \<label>|\<gcode?>|\<color?>

With this command, you can add a button in the footer of the prompt.

* `<label>`: Is the text inside of the button
* `<gcode?>`: This attribute is optional to add a different G-Code to this button. (Default is the label text)
* `<color?>`: This attribute is optional and will change the color of the button. Possible options are `primary`, `secondary`, `info`, `warning`, `error`. (Default is white)

<figure><img src="../../.gitbook/assets/image (30).png" alt=""><figcaption><p>Example of footer buttons</p></figcaption></figure>

### // action:prompt\_show

With this command, the prompt dialog will be displayed

### // action:prompt\_end

This command will close/hide the prompt dialog.

## Examples

Here some examples of Macro-Prompts

### Prompt with multiple Button-Groups

```yaml
[gcode_macro SHOW_PROMT_BUTTON_GROUPS]
gcode:
    RESPOND TYPE=command MSG="action:prompt_begin MacroPrompt"
    RESPOND TYPE=command MSG="action:prompt_text These are all button colors"
    RESPOND TYPE=command MSG="action:prompt_button default|TEST"
    RESPOND TYPE=command MSG="action:prompt_button_group_start"
    RESPOND TYPE=command MSG="action:prompt_button primary|TEST|primary"
    RESPOND TYPE=command MSG="action:prompt_button secondary|TEST|secondary"
    RESPOND TYPE=command MSG="action:prompt_button_group_end"
    RESPOND TYPE=command MSG="action:prompt_button_group_start"
    RESPOND TYPE=command MSG="action:prompt_button info|TEST|info"
    RESPOND TYPE=command MSG="action:prompt_button warning|TEST|warning"
    RESPOND TYPE=command MSG="action:prompt_button error|TEST|error"
    RESPOND TYPE=command MSG="action:prompt_button_group_end"
    RESPOND TYPE=command MSG="action:prompt_show"
```

### Simple question prompt

```yaml
[gcode_macro SHOW_PROMT]
gcode:
    RESPOND TYPE=command MSG="action:prompt_begin Question"
    RESPOND TYPE=command MSG="action:prompt_text Do you wont to cancel the print?"
    RESPOND TYPE=command MSG="action:prompt_footer_button continue|RESPOND TYPE=command MSG=action:prompt_end"
    RESPOND TYPE=command MSG="action:prompt_footer_button CANCEL|CANCEL_PRINT|error"
    RESPOND TYPE=command MSG="action:prompt_show"
```
