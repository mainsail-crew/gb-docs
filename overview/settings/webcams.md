---
description: >-
  In this tab you can connect mainsail with different webcam streamers. Some of
  the webcam clients are provided by Crowsnest (Webcam streamer wrapper from the
  Mainsail-Crew).
---

# Webcams

Go to the [settings](./) and select the Webcam category. In this view, you can add new webcams, or edit and remove existing ones.

<figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption><p>Webcam Settings</p></figcaption></figure>

While adding or editing a webcam, you will see the following screen.

<figure><img src="../../.gitbook/assets/image (24).png" alt=""><figcaption><p>Add Webcam form</p></figcaption></figure>

### Preview

On the right side, you can check the settings in a preview.

### Name and Icon

At first, you have to give the camera a name, and you can assign an icon to it.

### Stream & Snapshot URLs

You also need to specify stream and snapshot URL. For network cameras, please consult the manufacturer's manual or search the Internet.

**Note:** In [MainsailOS](https://app.gitbook.com/o/O2j4rN2JOaGEeS1KBjXz/s/HZGYoL7ogomNyBLNEpEJ/), by default, four webcam ports are mapped to URLs. Notice that the first URL doesn't contain a number. Check which port you have configured in your streamer and add the URLs.

<table><thead><tr><th width="150">Port</th><th>Stream URL</th><th>Snapshot URL</th></tr></thead><tbody><tr><td>8080</td><td>/webcam/?action=stream</td><td>/webcam/?action=snapshot</td></tr><tr><td>8081</td><td>/webcam2/?action=stream</td><td>/webcam2/?action=snapshot</td></tr><tr><td>8082</td><td>/webcam3/?action=stream</td><td>/webcam3/?action=snapshot</td></tr><tr><td>8083</td><td>/webcam4/?action=stream</td><td>/webcam4/?action=snapshot</td></tr></tbody></table>

### Service

You also need to select a streaming mode. Below are descriptions of the different modes, so you can decide. Try out what works best for you.

<table><thead><tr><th width="213.55085622344592">Mode</th><th>Description</th></tr></thead><tbody><tr><td><strong>MJPEG-Streamer</strong></td><td><p>The streamer mode extracts individual frames from the stream URL and streams them. </p><p></p><p>This is to prevent the buildup of delay in case of insufficient bandwidth. <br><br><strong>IMPORTANT:</strong> This mode does currently not work on iOS devices for technical reasons.</p></td></tr><tr><td><strong>Adaptive MJPEG-Streamer</strong></td><td><p>The adaptive mode takes the snapshot URL and pulls individual images. </p><p></p><p>Also, this is intended to prevent a delay.</p></td></tr><tr><td><strong>UV4L-MJPEG</strong></td><td><p>The classic mode is the plain MJPEG stream embedded in an image tag. </p><p></p><p>In this case, it can happen that after some runtime a delay steadily builds up, because frames cannot be skipped. Only a browser reload will help.</p></td></tr><tr><td><strong>IP-Camera</strong></td><td>The stream URL is embedded in an HTML5 video element. We can't really provide support for this. Browser plugins may be required.</td></tr><tr><td><strong>WebRTC (camera-streamer)</strong></td><td>This stream is very bandwidth efficient.<br><br><strong>IMPORTANT</strong>: This mode is currently only available on Raspberry devices.</td></tr><tr><td><strong>WebRTC (MediaMTX)</strong></td><td>This stream is very bandwidth efficient. This mode can also be used for WYZE-Cams with the docker-WYZE-Bridge. Here you can find a tutorial: <a href="https://app.gitbook.com/s/qXE1OQLsr0XFNbT54RTY/faq/how-to-use-wyze-cams">LINK</a><br><br><strong>IMPORTANT:</strong> min. v0.23 of MediaMTX</td></tr><tr><td><strong>HLS Streamer</strong></td><td>This mode is for IP webcams with RTSP support.</td></tr></tbody></table>



### Target FPS

Only in adaptive MJPEG mode, you also have to set the target frame rate. This is how often per second an image is requested.

### Rotate

In some services, you can also rotate the webcam stream.

### Hide FPS counter

Hide the FPS counter in the webcam image.

### Flip Webcam Image

Flip the webcam vertically and/or horizontally. Both at the same time corresponds to a 180° rotation.
