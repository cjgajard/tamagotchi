import { idleSprite, jumpSprite } from './sprites';
import Anime from './anime';

export default class JumpAnime extends Anime {
  draw() {
    this.screen.clean();
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
      this.screen.drawString(idleSprite[0], 8, 6);
      break;
    case 1:
      this.screen.drawString(jumpSprite[0], 8, 4);
      break;
    case 2:
      this.screen.drawString(idleSprite[1], 8, 1);
      break;
    case 3:
      this.screen.drawString(jumpSprite[1], 8, 3);
      this.reset();
      return true;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
    return false;
  }
}
