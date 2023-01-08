import CanvasUtil from './CanvasUtil.js';
import Snake from './Snake.js';

export default class Player {
  private posX: number;

  private posY: number;

  public constructor(startX: number, startY: number, canvas: HTMLCanvasElement) {
    this.posX = startX;
    this.posY = startY;
  }

  /**
 * makes the Player move
 */
  public move(direction: 'left' | 'middleUp' | 'middleDown' | 'right'): void {
    if (direction === 'left') {
      this.posX -= 5;
    }
    if (direction === 'right') {
      this.posX += 5;
    }
    if (direction === 'middleUp') {
      this.posY -= 5;
    }
    if (direction === 'middleDown') {
      this.posY += 5;
    }
  }

  /**
   * renders this
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillRectangle(canvas, this.posX, this.posY, 300, 50, 'red');
  }
}
