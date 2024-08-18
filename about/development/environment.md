---
description: >-
  Learn how to set up a local development environment for Mainsail on your PC.
  This guide walks you through the process so you can start developing and
  customizing quickly.
---

# Environment

Whether new to Mainsail development or looking to optimize your existing setup, this guide provides clear instructions for installing the necessary tools and configuring your environment. We will show you how to install the required dependencies, set up your development environment, and take the first steps towards customizing your Mainsail project efficiently.

## Prerequisites

Before you start setting up your development environment, make sure you have the following prerequisites.

### **Install Git**

Git is a version control system that you'll need to clone the Mainsail repository to manage your changes. Download Git from the official [Git website](https://git-scm.com/) and install it according to the instructions for your operating system.

### **Install Node.js**

Node.js is a JavaScript runtime environment required for developing and building Mainsail. Download and install the latest LTS version of Node.js from the [official website](https://nodejs.org/). Ensure npm (the Node Package Manager) is installed along with Node.js.

{% hint style="info" %}
Ensure that you are using Node.js version 20 or higher.
{% endhint %}

### **Fork and Clone the Mainsail Repository**

Fork the Mainsail repository on GitHub to create a copy of the project in your own GitHub account. Visit the [Mainsail GitHub page](https://github.com/mainsail-crew/mainsail) and click on "Fork." Afterward, you can clone your forked repository to your local machine using Git. Use the following command in your terminal:

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/mainsail.git
```

## Mainsail Development Server

After successfully cloning the Mainsail repository, the next step is to set up and start the development server. Follow these steps:

### Install npm Dependencies

Use `npm ci` in your project directory to install all the necessary dependencies for the project. This command ensures that the exact versions of packages specified in the `package-lock.json` file are installed:

```bash
npm ci
```

### Configure the .env file

Mainsail uses a .env file to define environment variables. Copy the `.env.development.local.example` file in the project's root directory, rename it `.env.development.local`, and adjust the configurations to suit your needs. Here is an example of what the `.env.development.local` file might look like:

```yaml
# hostname or ip from the moonraker instance
VUE_APP_HOSTNAME=printer.local

# port from the moonraker instance
VUE_APP_PORT=7125

# route_prefix from the moonraker instance
VUE_APP_PATH="/"

# reconnect interval in ms
VUE_APP_RECONNECT_INTERVAL=5000

# where should mainsail read the instances from (moonraker, browser or json)
VUE_APP_INSTANCES_DB="moonraker"

# defaults for multi language tests
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=en
```

{% hint style="info" %}
You need to set `VUE_APP_HOSTNAME=localhost` in case you want to use a [Virtual-Klipper-Printer](environment.md#virtual-klipper-printer-with-docker).
{% endhint %}

### **Add `cors_domains` to Moonraker**

To ensure the development server can access the Moonraker API, add the `cors_domains` entry \`\*//localhost:8080\` in the Moonraker configuration file (`moonraker.conf`). Open the configuration file and add the line at the end of `cors_domains`. Your `moonraker.conf` should look like this:

```yaml
[authorization]
cors_domains:
    https://my.mainsail.xyz
    http://my.mainsail.xyz
    http://*.local
    http://*.lan
    *://localhost:8080
```

### **Start the Development Server**

To start the Mainsail development server and test the application locally, run the following command:

```bash
npm run serve
```

This command will start the development server, and you should be able to open Mainsail in your default browser at [http://localhost:8080](http://localhost:8080). The server will respond to code changes and automatically refresh the components/page.

## Virtual Klipper Printer with Docker (Optional)

For those who wish to develop Mainsail using a virtual printer, it's possible to set up a virtual Klipper printer within a Docker container. We've created a dedicated project to simplify this process, which you can find [https://github.com/mainsail-crew/virtual-klipper-printer](https://github.com/mainsail-crew/virtual-klipper-printer).

Before proceeding, ensure that Docker is installed on your system. Docker allows you to run applications in isolated containers, making it an ideal tool for testing and development.

**Docker Installation Resources:**

* **Linux:** [Install Docker on Linux](https://docs.docker.com/engine/install)
* **Mac:** [Install Docker on Mac](https://docs.docker.com/docker-for-mac/install)
* **Windows:** [Install Docker on Windows](https://docs.docker.com/docker-for-windows/install)

Once Docker is installed, follow the instructions in the virtual Klipper printer project repository to set up and run your virtual printer environment.
