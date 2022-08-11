# Webcam

## Prerequisites

For being able to add a stream to Mainsail, it must be available as a so-called "MJPEG stream".

So either you have a network camera that offers such a stream by itself, or you use a conventional webcam (USB camera, Raspberry Pi Camera, …) that is connected to your system. For a non-network cameras, you need to install and configure a streamer software on your system, such as [Crowsnest](https://app.gitbook.com/o/O2j4rN2JOaGEeS1KBjXz/s/qXE1OQLsr0XFNbT54RTY/).&#x20;

{% hint style="info" %}
[MainsailOS ](https://app.gitbook.com/o/O2j4rN2JOaGEeS1KBjXz/s/HZGYoL7ogomNyBLNEpEJ/)comes preinstalled with [Crowsnest](https://app.gitbook.com/o/O2j4rN2JOaGEeS1KBjXz/s/qXE1OQLsr0XFNbT54RTY/) as streamer. If you wish to install Crowsnest on your system, or need assistance in configuring Crowsnest, please refer to its documentation.
{% endhint %}

Once such a stream is available, you only have to configure it in the Mainsail settings.&#x20;

## Settings

Go to the [settings](./) and select the Webcam category.

| Mode                 | Description                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MJPEG (Streamer)** | <p>The streamer mode extracts individual frames from the stream URL and streams them. </p><p></p><p>This is to prevent the buildup of delay in case of insufficient bandwidth. </p>                                                          |
| **MJPEG (Adaptive)** | <p>The adaptive mode takes the snapshot <em></em> URL and pulls individual images. </p><p></p><p>Also, this is intended to prevent a delay.</p>                                                                                              |
| **MJPEG (Classic)**  | <p>The classic mode is the plain MJPEG stream embedded in an image tag. </p><p></p><p>In this case, it can happen that after some runtime a delay steadily builds up, because frames cannot be skipped. Only a browser reload will help.</p> |
