# War Of Tanks
## Structure

### Frontend
- [Vite](https://vitejs.dev/) - A fast frontend build tool.

- [Phaser](https://phaser.io/) - A fast, robust, and versatile HTML5 game framework.

### Backend
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) - A lightweight WSGI web application framework in Python.

### Versions

This template has been updated for:

- [Phaser 3.88.2](https://github.com/phaserjs/phaser)
- [Vite 6.2.5](https://github.com/vitejs/vite)

<!-- ![screenshot](screenshot.png) -->

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands
### Frontend
| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Launch a development web server |
| `npm run build` | Create a production build in the `dist` folder |
| `npm run prettier:check` | Check code formatting |
| `npm run prettier:format` | Format code |

### Backend
| Command | Description |
|---------|-------------|
| `pip install -r requirements.txt` | Install project dependencies |
| `python app.py` | Launch a development web server |


## Writing Code
### Frontend
Go to the `frontend` folder and run `npm install` to install the dependencies. Then you can start the local development server by running `npm run dev`.

The local development server runs on `http://localhost:8080` by default.

### Backend
Go to the `backend` folder and run `pip install -r requirements.txt` to install the dependencies. Then you can start the local development server by running `python app.py`. 

The local development server runs on `http://localhost:5000` by default.

## Handling Assets

Vite supports loading assets via JavaScript module `import` statements.

This template provides support for both embedding assets and also loading them from a static folder. To embed an asset, you can import it at the top of the JavaScript file you are using it in:

```js
import logoImg from './assets/logo.png'
```

To load static files such as audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
preload ()
{
    //  This is an example of an imported bundled image.
    //  Remember to import it at the top of this file
    this.load.image('logo', logoImg);

    //  This is an example of loading a static image
    //  from the public/assets folder:
    this.load.image('background', 'assets/bg.png');
}
```

When you issue the `npm run build` command, all static assets are automatically copied to the `dist/assets` folder.

## Deploying to Production

After you run the `npm run build` command, your code will be built into a single bundle and saved to the `dist` folder, along with any other assets your project imported, or stored in the public assets folder.

In order to deploy your game, you will need to upload *all* of the contents of the `dist` folder to a public facing web server.

## Customizing the Template

### Vite

If you want to customize your build, such as adding plugin (i.e. for loading CSS or fonts), you can modify the `vite/config.*.mjs` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json`. Please see the [Vite documentation](https://vitejs.dev/) for more information.
