# Docker

## Installing Mainsail using Docker <a href="#installing-mainsail-using-docker" id="installing-mainsail-using-docker"></a>

It’s possible to run Mainsail in Docker with our pre-built images. These images are running NGINX with Mainsail. Our images are hosted on the Github Package Registry. You can find more details [here](https://github.com/mainsail-crew/mainsail/pkgs/container/mainsail).

The image can be pulled using:

```bash
docker pull ghcr.io/mainsail-crew/mainsail
```

### &#x20;Configuration for the Docker image <a href="#configuration-for-the-docker-image" id="configuration-for-the-docker-image"></a>

By default the image will connect to `localhost:7125`. If Moonraker is not running on that address, you can configure Mainsail to behave differently using a config file. You can mount this file in your container.

First make sure that you have a `config.json` file configured. This is a `json` file that can look like this:

{% code title="config.json" %}
```json
{
  "remoteMode": true
}
```
{% endcode %}

You can set Mainsail in remote mode using the `remoteMode` option. That way you can manage your printers in the UI.

### &#x20;Running with the custom configuration <a href="#running-with-the-custom-configuration" id="running-with-the-custom-configuration"></a>

After creating the `config.json` file the container is ready to run. Make sure you’re executing the command in the same directory as your `config.json`. Running the following command will launch Mainsail on `http://localhost:8080`:

```bash
docker run \
  --name mainsail \
  -v "$(pwd)/config.json:/usr/share/nginx/html/config.json" \
  -p "8080:80" \
  ghcr.io/mainsail-crew/mainsail 
```

#### &#x20;Specifically for Windows, you can run: <a href="#specifically-for-windows-you-can-run" id="specifically-for-windows-you-can-run"></a>

```batch
docker run --name mainsail -v "%cd%//config.json:/usr/share/nginx/html/config.json" -p "8080:80" ghcr.io/mainsail-crew/mainsail 
```

### &#x20;Updating the container <a href="#updating-the-container" id="updating-the-container"></a>

`docker run` will always run the image that’s locally available. To get the latest image locally available, you’ll just need to pull the image again. After that, the `docker run` command will use the newest version.
