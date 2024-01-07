# Ideamaker

### Thumbnail (since v4.2.1)

To enable thumbnails, open the `Advanced` tab in the `printer settings`, enable the `GCode Thumbnails for Octoprint and Mainsail` option and enter your preferred _square format_ image size in the `Resolution` fields (e.g. `400 X 400`). It's necessary that the thumbnail width and height resolution is equal.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

{% embed url="https://www.youtube.com/watch?v=EbtLn3bDs5I" %}

### Best practise G-codes

To have the full metadata support, you have to add the following lines to your start G-code:

```
;Nozzle diameter = {machine_nozzle_diameter1}
;Filament type = {filament_name_abbreviation1}
;Filament name = {filament_name1}
```
