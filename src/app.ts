import Snake from './Snake.js';
import { GameLoop } from './GameLoop.js';

const game = new Snake(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
