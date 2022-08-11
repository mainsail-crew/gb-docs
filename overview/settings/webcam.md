# Webcam

****

| Mode                 | Description                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MJPEG (Streamer)** | <p>The streamer mode extracts individual frames from the stream URL and streams them. </p><p></p><p>This is to prevent the buildup of delay in case of insufficient bandwidth. </p>                                                          |
| **MJPEG (Adaptive)** | <p>The adaptive mode takes the snapshot <em></em> URL and pulls individual images. </p><p></p><p>Also, this is intended to prevent a delay.</p>                                                                                              |
| **MJPEG (Classic)**  | <p>The classic mode is the plain MJPEG stream embedded in an image tag. </p><p></p><p>In this case, it can happen that after some runtime a delay steadily builds up, because frames cannot be skipped. Only a browser reload will help.</p> |

&#x20;

****
