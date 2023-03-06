---
description: A guide to safe remote access.
---

# Remote Access

{% hint style="info" %}
**Notice**\
This guide does not include every step in detail, but is a recommendation for safe remote access.
{% endhint %}

You will need to decide if you want to receive status messages on your smartphone, have full remote access to Mainsail, or both.

## &#x20;Status messages <a href="#status-messages" id="status-messages"></a>

There are several options for sending status messages, some include additional functionality.\
(listed alphabetically)

* **Discord:**
  * [Mooncord](https://github.com/eliteSchwein/mooncord) by eliteSchwein is a bot that sends you status messages over Discord.
* **Moonraker:**
  * Moonraker has built-in [notification support](https://moonraker.readthedocs.io/en/latest/configuration/#notifier) for a variety of services via [Apprise](https://github.com/caronc/apprise).
* [**Obico for Klipper**](https://obico.io/docs/user-guides/klipper-setup/)**:**
  * Obico sends status messages as well as webcam snapshots to mobile push notification, Email, Telegram, Discord, and more.
  * You can get the real-time webcam feed and printer control using Obico’s mobile app or in the browser.
  * Obico also uses AI to detect print failures.
* [OctoEverywhere for Klipper](https://octoeverywhere.com/?source=mainsail\_docs)
  * OctoEverywhere’s free notification system sends real-time print status and webcam snapshots via push notifications, Discord, Telegram, Email, SMS, and more.
  * OctoEverywhere also provides free, private, and unlimited access to your full Mainsail web portal from anywhere, including full framerate webcam streaming.
  * [Gadget](https://octoeverywhere.com/gadget?source=mainsail\_docs), OctoEverywhere’s free and unlimited AI print failure detection, continuously watches your prints and alerts you or pauses the print if something is wrong.
* **Telegram:**
  * [Moonraker-telegram-bot](https://github.com/nlef/moonraker-telegram-bot) by nlef is a bot that provides you status updates using the Telegram messaging service.
  * [Moonraker-telegram](https://github.com/Raabi91/moonraker-telegram) by Raabi91 is a bot that also brings you status updates using the chat app Telegram.

These tools are installed on the local machine and send status messages to their respective platforms. No changes are needed to externally access your local network.

For details, please refer to each project’s instructions and documentation.

## Remote Access to Mainsail <a href="#remote-access-to-mainsail" id="remote-access-to-mainsail"></a>

{% hint style="danger" %}
What **not to do**:

* Please do not open ports of Mainsail/Moonraker in your router to the rest of the world. There are plenty of reports of OctoPrint installations being freely accessible on the Internet, with just as many reasons why this is not a good idea.

[3D Printers in The Wild, What Can Go Wrong](https://isc.sans.edu/forums/diary/3D+Printers+in+The+Wild+What+Can+Go+Wrong/24044/)
{% endhint %}

{% hint style="warning" %}
What you **could do**:

* Use an external service provider such as Tailscale to gain access to your home network.
  * A potential downside is not having personal control of the connection.
* Reverse Proxy
{% endhint %}

{% hint style="success" %}
**Recommendation** what you **should do**:

* Set up your own secured VPN tunnel.
  * In your router
  * Or your Raspberry Pi
{% endhint %}

### [OctoEverywhere For Klipper](https://octoeverywhere.com/?source=mainsail\_docs\_remote)

OctoEverywhere empowers the worldwide maker community with free, secure, and unlimited remote access to their entire Mainsail web UI from anywhere, including full resolution and frame rate webcam streaming.

OctoEverywhere is a community-based project with the goal of cloud-empowering 3D printers worldwide. Along with remote access, OctoEverywhere provides free and unlimited [AI print failure detection,](https://octoeverywhere.com/gadget?source=mainsail\_docs\_remote) 3rd party Moonraker app support, real-time print notifications, live streaming, secure shared remote access, and more!

* [Learn More About OctoEverywhere](https://octoeverywhere.com/?source=mainsail\_docs\_remote)

### Set up VPN <a href="#set-up-vpn" id="set-up-vpn"></a>

Several routers allow you to set up a VPN tunnel. After you have configured the VPN and logged in from another device, you will have secure access to your entire network, including Mainsail.

If your router does not support this, you can also set up your own VPN, for example, using your Raspberry Pi.\
[OpenVPN](https://openvpn.net/), [WireGuard](https://www.wireguard.com/) or [PiVPN](https://www.pivpn.io/) are all options that could work.

To be able to reach your home network even with a non-static IP address, you will need to use a Dynamic DNS service. This will forward a domain directly to your IP address. Often these DynDNS services can also be set up directly in your router so when your external IP address changes, your domain will be automatically updated. Free Dynamic DNS services include [DuckDNS](https://www.duckdns.org) or [FreeDNS](https://freedns.afraid.org/).

{% hint style="info" %}
**Notice**\
The devices that you use to access VPN tunnel are assigned to a different address range. This address range must be configured in Moonraker under `trusted_clients` and `cors_domains`. See also [Moonraker’s documentation on network authorization.](https://moonraker.readthedocs.io/en/latest/configuration/#authorization)\
\
For example:\
**192.168.1**.x     _// devices on your regular LAN_\
**192.168.50**.x _// devices connected through your VPN tunnel_
{% endhint %}
