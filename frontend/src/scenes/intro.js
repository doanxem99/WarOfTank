
import Story from '../story/story.js';

export default class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });
        this.storyLine = new Story.Beginning(this);
    }
    contructor() {
        super({ key: 'Intro' });
    }

    create() {
        this.playMusic();
        this.showStory();
    }

    playMusic() {
        this.sound.add('intro-music').play({ loop: true });
    }

    showStory() {
        this.storyLine.showStory();
    }
};