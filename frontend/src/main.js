// This file is required by the index.html file and will be executed in the renderer process for that window.
import Phaser from 'phaser';
import BootLoader from './scenes/bootloader.js';
import Intro from './scenes/intro.js';
import GameScene from './scenes/game.js';
import Outro from './scenes/outro.js';
import MainMenu from './scenes/mainmenu.js';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024, // Temporary value
    height: 768, // Temporary value
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        BootLoader,
        MainMenu,
        Intro,
        GameScene,
        Outro
    ]
};

export default new Phaser.Game(config);
