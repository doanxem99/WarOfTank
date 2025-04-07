import Story from '../story/story.js';

export default class Outro extends Phaser.Scene {
    constructor() {
        super({ key: 'Outro' });
        this.storyLine = new Story.Ending(this);
    }

    create() {
        this.playMusic();
        this.showStory();
    }

    playMusic() {
        this.sound.add('outro-music').play({ loop: true });
    }

    showStory() {
        this.storyLine.showStory();
    }
}