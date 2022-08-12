# PolicyKit Permissions

Since Jan 28 ‘22, Moonraker has changed the way to communicate with system services to D-Bus instead of previously `sudo` commands.

After updating Moonraker you might be presented this warning message:

![](../../.gitbook/assets/policitykit.png)

To resolve this warning you have to install the PolicyKit permissions with the `set-policykit-rules.sh` script.

SSH into your system and execute the following commands:

```
cd ~/moonraker/scripts  
./set-policykit-rules.sh  
sudo service moonraker restart
```

## Known Problems <a href="#known-problems" id="known-problems"></a>

### A few messages still remain after the steps have been executed <a href="#a-few-messages-still-remain-after-the-steps-have-been-executed" id="a-few-messages-still-remain-after-the-steps-have-been-executed"></a>

SSH into your system and make sure that `packagekit` is installed.

```
sudo apt update
sudo apt install packagekit
```

This should usually be installed when Moonraker was updated via the Update Manager.

By running the following command, all missing dependencies will be installed.

```
~/moonraker/scripts/install-moonraker.sh -r
```
