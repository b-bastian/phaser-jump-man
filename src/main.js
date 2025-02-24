import { Start } from "./scenes/Start.js";

const config = {
  type: Phaser.AUTO,
  title: "Jump Man",
  parent: "game-container",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  pixelArt: false,
  scene: [Start],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(config);
