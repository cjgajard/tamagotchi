import Anime from './anime';
import { idleSprite } from './sprites';

export default class IdleAnime extends Anime {
  draw() {
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
      this.screen.clean();
      this.screen.drawString(idleSprite[0], 8, 6);
      break;
    case 2:
      this.screen.clean();
      this.screen.drawString(idleSprite[1], 8, 5);
      break;
    case 3:
      this.reset();
      break;
    default:
      break;
    }
    /* eslint-enable no-magic-numbers */
    return false;
  }
}
