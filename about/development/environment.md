---
description: Set up a development environment for Mainsail
---

# Environment

## Set up the environment <a href="#set-up-the-environment" id="set-up-the-environment"></a>

At this point you should have already forked Mainsail into your repositories.\
If that is not the case, go ahead and fork Mainsail now.

Copy the `.env.development.local.example` file and omit the `.example` at the end.\
The file is located in the root directory of the Mainsail project.

Now edit the `.env.development.local` file to reflect your printers network configuration.

_Example:_ If the IP of your printer is `192.168.1.10`, modify it like this:

```editorconfig
# hostname or ip from the moonraker instance
VUE_APP_HOSTNAME=192.168.1.10
```

{% hint style="info" %}
You need to set `VUE_APP_HOSTNAME=localhost` in case you want to use a [Virtual-Klipper-Printer](environment.md#virtual-klipper-printer-with-docker).
{% endhint %}

### Configure Moonraker <a href="#configure-moonraker" id="configure-moonraker"></a>

For Moonraker, you need to add localhost:8080 to the `cors_domains` section inside the `moonraker.conf`:

```yaml
cors_domains:
    *//localhost:8080
```

{% hint style="info" %}
Port 8080 is the default port `npm` will serve the development server on.
{% endhint %}

### Install NodeJS <a href="#install-nodejs" id="install-nodejs"></a>

You can download NodeJS from [here](https://nodejs.org/en/download).\
Pick your preferred installation package.

{% hint style="info" %}
Make sure you run node >= 16
{% endhint %}

Open your preferred terminal application and navigate into the Mainsail root directory.\
Run the following command to install all required modules and dependencies:

```bash
npm install
```

Afterwards run the following command to start a local development server:

```bash
npm run serve
```

Once the server is up and running, you can access Mainsail on `http://localhost:8080`.

## Virtual-Klipper-Printer with Docker <a href="#virtual-klipper-printer-with-docker" id="virtual-klipper-printer-with-docker"></a>

It is possible to develop Mainsail with a virtual printer running inside a Docker container.\
We created a special project for that, which you can find [here](https://github.com/mainsail-crew/virtual-klipper-printer).

To use our Virtual-Klipper-Printer project, it is required to have Docker installed.\
Below are some general resources on how to get Docker.

**Linux:** [https://docs.docker.com/engine/install](https://docs.docker.com/engine/install)\
**Mac:** [https://docs.docker.com/docker-for-mac/install](https://docs.docker.com/docker-for-mac/install)\
**Windows:** [https://docs.docker.com/docker-for-windows/install](https://docs.docker.com/docker-for-windows/install)



After Docker is installed, follow the instructions [here](https://github.com/mainsail-crew/virtual-klipper-printer#instructions) to get everything up and running.
