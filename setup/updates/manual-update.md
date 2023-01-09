# Manual Update

## Klipper

### Update from Repository <a href="#update-from-repository" id="update-from-repository"></a>

```bash
cd ~/klipper
git pull
```

Restart Klipper (`sudo service klipper restart`) and check the `klippy.log`, if Klipper starts correctly and then continue the guide.

### Update Klipper dependences

This is only necessary, if you see missing modules in the Klipper log.

```bash
./klippy-env/bin/pip install -r ./klipper/scripts/klippy-requirements.txt
```

### Klipper config changes <a href="#klipper-config-changes" id="klipper-config-changes"></a>

If you have issues after update your Klipper instance, you can check config changes [here](https://www.klipper3d.org/Config\_Changes.html).

## Moonraker

```bash
cd ~/moonraker
git pull
```

Restart Moonraker (`sudo service moonraker restart`) and open the URL `http://<printer-ip>:7125/printer/info` in your browser.

If you see a content like this

```
{"result": {"hostname": "voron250", "error_detected": false, "version": "v0.8.0-643-g528f9f25", "is_ready": true, "message": "Printer is ready", "cpu": "4 core ARMv7 Processor rev 4 (v7l)"}}
```

### &#x20;Update Moonraker dependences <a href="#update-moonraker-dependence" id="update-moonraker-dependence"></a>

This is only necessary, if you see missing modules in the Moonraker log.

```bash
~/moonraker/scripts/install-moonraker.sh -r
```

### &#x20;Moonraker config changes <a href="#moonraker-config-changes" id="moonraker-config-changes"></a>

If you have issues after update your Moonraker instance, you can check config changes [here](https://moonraker.readthedocs.io/en/latest/user\_changes/).

## Mainsail

```bash
cd ~/mainsail
rm -R ./*
wget -q -O mainsail.zip https://github.com/mainsail-crew/mainsail/releases/latest/download/mainsail.zip && unzip mainsail.zip && rm mainsail.zip
```

Now it should be possible to open the interface: `http://<printer-ip>/`.
