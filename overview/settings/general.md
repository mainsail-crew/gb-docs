# General

Go to the [settings](./) and select the General category.

<figure><img src="../../.gitbook/assets/image (5) (1).png" alt=""><figcaption><p>General settings</p></figcaption></figure>

## Printer Name

Here you can assign a name for your printer. This name is displayed in the top bar, but also in printer selections in various places or in the print farm.

## Language

Choose the language in which you want to use Mainsail. Please note that the translations are created by the community. [Missing a translation or found an incorrect translation?](../features/localization.md#missing-a-translation-or-found-an-incorrect-translation)

## Data Format

Choose your favorite date format. . By default, Mainsail use the browser format.

## Time Format

Choose your favorite time format. . By default, Mainsail use the browser format.

## Print progress calculation

* File position (relative)\
  The print progress will be calculated via file position without start and end G-code metadata.\

* File position (absolute)\
  The print progress will be calculated via file position incl. start and end G-code metadata.\

* Slicer(M73)\
  Mainsail displays the print progress of the M73 G-code. Absolute file progress is used as fallback.\

* Filament\
  The progress will be calculated via used filament and slicer calculated filament.

## Estimate time calculation

This is where you can select the factors to be used for calculating the print time.

{% hint style="info" %}
More information on this topic in the FAQ:\
[How are estimations of the printing time calculated?](../../faq/mainsail.md#how-are-estimations-of-the-printing-time-calculated)
{% endhint %}

## ETA calculation

This is where you can select the factors to be used for calculating the print ETA (estimated time of arrival).

{% hint style="info" %}
More information on this topic in the FAQ:

[How are estimations of the printing time calculated?](../../faq/mainsail.md#how-are-estimations-of-the-printing-time-calculated)
{% endhint %}

## Moonraker DB

This allows you to back up groups of Mainsail settings to your device and restored later. A dialog allows you to select individual groups.

For example, if you want to save your dashboard layout, or presets, this is possible with this function.

## Factory Reset

This allows you to reset groups of Mainsail settings. A dialog allows you to select individual groups.&#x20;

For example, if you only want to reset the webcam settings, this is possible with this function.
