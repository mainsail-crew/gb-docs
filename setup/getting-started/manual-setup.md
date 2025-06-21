# Manual setup

## Operating System <a href="#operating-system" id="operating-system"></a>

{% hint style="warning" %}
Please do **not** use an OctoPi image, as it can cause unforeseen (avoidable) problems.
{% endhint %}

{% hint style="warning" %}
_Please check and modify the username, if you do not use the user pi, you have to replace it in each path and in the variable User in the service files._
{% endhint %}

{% hint style="info" %}
Don’t forget to enable SSH and configure a network if using Wi-Fi.
{% endhint %}

It is recommended to use a clean [Raspberry Pi OS 32-bit Lite](https://downloads.raspberrypi.org/raspios\_lite\_armhf\_latest) image. If you don't use a Raspberry Pi as SBC, every default Debian Buster / Bullseye (recommended) should also fit with this guide.

We recommend you follow the Raspberry Pi OS official [documentation](https://www.raspberrypi.org/documentation/installation/installing-images/) to flash and install the operating system to your SD card.

Once you have finished the installation and are connected via SSH, you can continue.

### &#x20;Requirements <a href="#requirements" id="requirements"></a>

Install the required packages and update the system:

{% tabs %}
{% tab title="Debian 11 (Bullseye)" %}
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git unzip
```
{% endtab %}

{% tab title="Debian 10 (Buster)" %}
```bash
sudo apt update --allow-releaseinfo-change && sudo apt upgrade --yes
sudo apt install git unzip
```
{% endtab %}
{% endtabs %}

## Klipper <a href="#klipper" id="klipper"></a>

### &#x20;Installation <a href="#installation" id="installation"></a>

At first we have to install some OS dependencies:

{% tabs %}
{% tab title="Debian 11 (Bullseye)" %}
{% code overflow="wrap" %}
```bash
sudo apt install python3-virtualenv python3-dev python3-dev libffi-dev build-essential libncurses-dev avrdude gcc-avr binutils-avr avr-libc stm32flash dfu-util libnewlib-arm-none-eabi gcc-arm-none-eabi binutils-arm-none-eabi libusb-1.0-0 libusb-1.0-0-dev
```
{% endcode %}
{% endtab %}

{% tab title="Debian 10 (Buster)" %}
{% code overflow="wrap" %}
```bash
sudo apt install python3-virtualenv python3-dev python3-dev libffi-dev build-essential libncurses-dev libusb-dev avrdude gcc-avr binutils-avr avr-libc stm32flash dfu-util libnewlib-arm-none-eabi gcc-arm-none-eabi binutils-arm-none-eabi libusb-1.0
```
{% endcode %}
{% endtab %}
{% endtabs %}

The following commands will clone Klipper to an appropriate directory in HOME.

```bash
cd ~
git clone https://github.com/KevinOConnor/klipper
```

Then we can initialize the python virtual environment and install the python dependencies:

<pre class="language-bash"><code class="lang-bash">cd ~
<strong>virtualenv -p python3 ./klippy-env
</strong>./klippy-env/bin/pip install -r ./klipper/scripts/klippy-requirements.txt
</code></pre>

### &#x20;Configuration & startup service <a href="#configuration--startup-service" id="configuration--startup-service"></a>

After Klipper is installed, you will need to create the file structure for Klipper & Moonraker.

```bash
mkdir ~/printer_data/
mkdir ~/printer_data/config
mkdir ~/printer_data/logs
mkdir ~/printer_data/gcodes
mkdir ~/printer_data/systemd
mkdir ~/printer_data/comms
touch ~/printer_data/config/printer.cfg
```

To create a service file for Klipper use:

```bash
sudo nano /etc/systemd/system/klipper.service
```

fill in these lines:

```systemd
[Unit]
Description=Klipper 3D Printer Firmware SV1
Documentation=https://www.klipper3d.org/
After=network-online.target
Wants=udev.target

[Install]
WantedBy=multi-user.target

[Service]
Type=simple
User=pi
RemainAfterExit=yes
WorkingDirectory=/home/pi/klipper
EnvironmentFile=/home/pi/printer_data/systemd/klipper.env
ExecStart=/home/pi/klippy-env/bin/python $KLIPPER_ARGS
Restart=always
RestartSec=10
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

Next step, you have to create an Klipper environment file in your `printer_data`:

```bash
nano ~/printer_data/systemd/klipper.env
```

fill in these line:

{% code overflow="wrap" %}
```bash
KLIPPER_ARGS="/home/pi/klipper/klippy/klippy.py /home/pi/printer_data/config/printer.cfg -l /home/pi/printer_data/logs/klippy.log -I /home/pi/printer_data/comms/klippy.serial -a /home/pi/printer_data/comms/klippy.sock"
```
{% endcode %}

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

{% hint style="info" %}
**Please check and modify the username!**\
If you do not use the user `pi`, you must replace it in each path and in the variable `User` in the service file.
{% endhint %}

To enable and start the Klipper service execute these commands:

```bash
sudo systemctl enable klipper.service
```

After your config is in place, restart Klipper with `sudo systemctl start klipper`.

## Moonraker <a href="#moonraker" id="moonraker"></a>

Moonraker is a web server that exposes APIs which lets Mainsail interact with Klipper.

### &#x20;Installation <a href="#installation" id="installation"></a>

At first we have to install some OS dependencies:

{% tabs %}
{% tab title="Debian 11 (Bullseye)" %}
{% code overflow="wrap" %}
```bash
sudo apt install python3-virtualenv python3-dev libopenjp2-7 python3-libgpiod curl libcurl4-openssl-dev libssl-dev liblmdb-dev libsodium-dev zlib1g-dev libjpeg-dev packagekit wireless-tools
```
{% endcode %}
{% endtab %}

{% tab title="Debian 10 (Buster)" %}
{% code overflow="wrap" %}
```bash
sudo apt install python3-virtualenv python3-dev libopenjp2-7 python3-libgpiod curl libcurl4-openssl-dev libssl-dev liblmdb-dev libsodium-dev zlib1g-dev libjpeg-dev packagekit wireless-tools
```
{% endcode %}
{% endtab %}
{% endtabs %}

Clone Moonraker into your HOME directory:

```bash
cd ~
git clone https://github.com/Arksine/moonraker.git
```

Then we can initialize the python virtual environment and install the python dependencies:

```bash
cd ~
virtualenv -p python3 ./moonraker-env
./moonraker-env/bin/pip install -r ./moonraker/scripts/moonraker-requirements.txt
```

### &#x20;Configuration <a href="#configuration" id="configuration"></a>

{% hint style="warning" %}
**Please pay attention to the following steps!**\
A very common source of errors are improperly configured `trusted_clients`.
{% endhint %}

For Moonraker you’ll need to create a separate config file.

`nano ~/printer_data/config/moonraker.conf`

Insert the following part:

```yaml
[server]
host: 0.0.0.0
port: 7125
# The maximum size allowed for a file upload (in MiB).  Default 1024 MiB
max_upload_size: 1024
# Path to klippy Unix Domain Socket
klippy_uds_address: ~/printer_data/comms/klippy.sock

[file_manager]
# post processing for object cancel. Not recommended for low resource SBCs such as a Pi Zero. Default False
enable_object_processing: False

[authorization]
cors_domains:
    *://my.mainsail.xyz
    *://*.local
    *://*.lan
trusted_clients:
    10.0.0.0/8
    127.0.0.0/8
    169.254.0.0/16
    172.16.0.0/12
    192.168.0.0/16
    FE80::/10
    ::1/128

# enables partial support of Octoprint API
[octoprint_compat]

# enables moonraker to track and store print history.
[history]

# this enables moonraker announcements for mainsail
[announcements]
subscriptions:
    mainsail

# this enables moonraker's update manager
[update_manager]
refresh_interval: 168
enable_auto_refresh: True

[update_manager mainsail]
type: web
channel: stable
repo: mainsail-crew/mainsail
path: ~/mainsail
```

{% hint style="info" %}
**This is a very basic config**\
For more options and detailed explanations you should follow [Moonraker’s instructions](https://github.com/Arksine/moonraker/blob/master/docs/installation.md).
{% endhint %}

{% hint style="danger" %}
**Trusted Clients - read carefully**\
A list of newline separated IP addresses and/or IP ranges that are trusted. Trusted clients are given full access to the API. Both `IPv4` and `IPv6` addresses and ranges are supported. Ranges must be expressed in CIDR notation (see [CIDR](http://ip.sb/cidr) for more info).\
For example, an entry of 192.168.1.0/24 will authorize IP addresses in the range of 192.168.1.1 - 192.168.1.254. Note that when specifying `IPv4` ranges the last segment of the IP address must be 0. The default is no clients or ranges are trusted.
{% endhint %}

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

### &#x20;Startup service <a href="#startup-service" id="startup-service"></a>

To edit this file type:

```bash
sudo nano /etc/systemd/system/moonraker.service
```

fill in these lines:

```systemd
#Systemd moonraker Service

[Unit]
Description=API Server for Klipper SV1
Requires=network-online.target
After=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=simple
User=pi
SupplementaryGroups=moonraker-admin
RemainAfterExit=yes
WorkingDirectory=/home/pi/moonraker
EnvironmentFile=/home/pi/printer_data/systemd/moonraker.env
ExecStart=/home/pi/moonraker-env/bin/python $MOONRAKER_ARGS
Restart=always
RestartSec=10
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

Next step, you have to create an Klipper environment file in your `printer_data`:

```bash
nano ~/printer_data/systemd/moonraker.env
```

fill in these lines:

```
MOONRAKER_ARGS="/home/pi/moonraker/moonraker/moonraker.py -d /home/pi/printer_data"
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

{% hint style="info" %}
**Please check and modify the username!**\
If you do not use the user `pi`, you must replace it in each path and in the variable user in the service file.
{% endhint %}

To enable Moonraker service execute these commands:

```bash
sudo systemctl enable moonraker.service
```

Then we have also to add some Moonraker PolicyKit rules. Moonraker already provides a script for these:

```bash
./moonraker/scripts/set-policykit-rules.sh
```

After your config is in place, start Moonraker with `sudo systemctl start moonraker`.

Open the following URL with your printers IP in your browser

```url
http://<printer-ip>:7125/server/info
```

If everything has been set up successfully, a message like this should appear:

{% code overflow="wrap" %}
```json
{"result": {"klippy_connected": false, "klippy_state": "disconnected", "components": ["klippy_connection", "application", "websockets", "internal_transport", "dbus_manager", "database", "file_manager", "klippy_apis", "secrets", "template", "shell_command", "machine", "data_store", "proc_stats", "job_state", "job_queue", "http_client", "announcements", "webcam", "extensions", "authorization", "octoprint_compat", "history", "update_manager"], "failed_components": [], "registered_directories": ["config", "logs", "gcodes"], "warnings": [], "websocket_count": 0, "moonraker_version": "v0.7.1-747-g779997c", "missing_klippy_requirements": [], "api_version": [1, 0, 5], "api_version_string": "1.0.5"}}
```
{% endcode %}

## Mainsail <a href="#mainsail" id="mainsail"></a>

### &#x20;Install web server & reverse proxy (NGINX) <a href="#install-web-server--reverse-proxy-nginx" id="install-web-server--reverse-proxy-nginx"></a>

NGINX is important to mount all components on port 80 and host the static files from Mainsail. To install NGINX you only need to execute:

```bash
sudo apt install nginx
```

now we create the config files with:

```bash
sudo touch /etc/nginx/sites-available/mainsail
sudo touch /etc/nginx/conf.d/upstreams.conf
sudo touch /etc/nginx/conf.d/common_vars.conf
```

Each file can be filled with the following content:

```bash
sudo nano /etc/nginx/conf.d/upstreams.conf
```

```nginx
# /etc/nginx/conf.d/upstreams.conf

upstream apiserver {
    ip_hash;
    server 127.0.0.1:7125;
}

upstream mjpgstreamer1 {
    ip_hash;
    server 127.0.0.1:8080;
}

upstream mjpgstreamer2 {
    ip_hash;
    server 127.0.0.1:8081;
}

upstream mjpgstreamer3 {
    ip_hash;
    server 127.0.0.1:8082;
}

upstream mjpgstreamer4 {
    ip_hash;
    server 127.0.0.1:8083;
}
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

```bash
sudo nano /etc/nginx/conf.d/common_vars.conf
```

```nginx
# /etc/nginx/conf.d/common_vars.conf

map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

```bash
sudo nano /etc/nginx/sites-available/mainsail
```

```nginx
# /etc/nginx/sites-available/mainsail

server {
    listen 80 default_server;
    # uncomment the next line to activate IPv6
    # listen [::]:80 default_server;

    access_log /var/log/nginx/mainsail-access.log;
    error_log /var/log/nginx/mainsail-error.log;

    # disable this section on smaller hardware like a pi zero
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_proxied expired no-cache no-store private auth;
    gzip_comp_level 4;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/x-javascript application/json application/xml;

    # web_path from mainsail static files
    root /home/pi/mainsail;

    index index.html;
    server_name _;

    # disable max upload size checks
    client_max_body_size 0;

    # disable proxy request buffering
    proxy_request_buffering off;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    location /websocket {
        proxy_pass http://apiserver/websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 86400;
    }

    location ~ ^/(printer|api|access|machine|server)/ {
        proxy_pass http://apiserver$request_uri;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Scheme $scheme;
    }

    location /webcam/ {
        postpone_output 0;
        proxy_buffering off;
        proxy_ignore_headers X-Accel-Buffering;
        access_log off;
        error_log off;
        proxy_pass http://mjpgstreamer1/;
    }

    location /webcam2/ {
        postpone_output 0;
        proxy_buffering off;
        proxy_ignore_headers X-Accel-Buffering;
        access_log off;
        error_log off;
        proxy_pass http://mjpgstreamer2/;
    }

    location /webcam3/ {
        postpone_output 0;
        proxy_buffering off;
        proxy_ignore_headers X-Accel-Buffering;
        access_log off;
        error_log off;
        proxy_pass http://mjpgstreamer3/;
    }

    location /webcam4/ {
        postpone_output 0;
        proxy_buffering off;
        proxy_ignore_headers X-Accel-Buffering;
        access_log off;
        error_log off;
        proxy_pass http://mjpgstreamer4/;
    }
}
```

Save the file with `CTRL+O` and close the editor with `CTRL+X`.

Create the directory for static files and active NGINX config:

```bash
mkdir ~/mainsail
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/mainsail /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

Now you can recheck the API to see if it works with the reverse proxy. Open the URL `http://<printer-ip>/server/info` in your browser. If you see content like this:

{% code overflow="wrap" %}
```json
{"result": {"klippy_connected": false, "klippy_state": "disconnected", "components": ["klippy_connection", "application", "websockets", "internal_transport", "dbus_manager", "database", "file_manager", "klippy_apis", "secrets", "template", "shell_command", "machine", "data_store", "proc_stats", "job_state", "job_queue", "http_client", "announcements", "webcam", "extensions", "authorization", "octoprint_compat", "history", "update_manager"], "failed_components": [], "registered_directories": ["config", "logs", "gcodes"], "warnings": [], "websocket_count": 0, "moonraker_version": "v0.7.1-747-g779997c", "missing_klippy_requirements": [], "api_version": [1, 0, 5], "api_version_string": "1.0.5"}}
```
{% endcode %}

Now we can install Mainsail.

### &#x20;Install `httpdocs` <a href="#install-httpdocs" id="install-httpdocs"></a>

Now you can download the current Mainsail static data.

```bash
cd ~/mainsail
wget -q -O mainsail.zip https://github.com/mainsail-crew/mainsail/releases/latest/download/mainsail.zip && unzip mainsail.zip && rm mainsail.zip
```

### &#x20;Set file permissions for nginx <a href="#nginx-permissions" id="nginx-permissions"></a>
We need to grant nginx access to the mainsail files
```bash
sudo chmod o+x /home/pi
```


Now it should be possible to open the interface: `http://<printer-ip>/`.

### &#x20;Important macros <a href="#important-macros" id="important-macros"></a>

If you want the whole experience with Mainsail and Klipper `virtual_sdcard` print, you should use these macros or use them as templates for your own.

[Macro Link](https://docs.mainsail.xyz/setup/configuration)

### &#x20;Use hostname instead of IP to open Mainsail (optional) <a href="#change-the-hostname-optional" id="change-the-hostname-optional"></a>

To use the hostname instate of the IP, you can install the avahi-daemon:

`sudo apt install avahi-daemon`

And you can config your hostname:

`sudo raspi-config`

In `2 Network Options` > `N1 Hostname`, you can edit the hostname of your Raspberry Pi. After a reboot, you can use `http://<hostname>.local/` to open the web interface.
