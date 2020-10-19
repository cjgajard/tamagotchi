import Anime from './anime';
import { eatSprite } from './sprites';

export default class EatAnime extends Anime {
  draw() {
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
    case 4:
    case 8:
      this.screen.clean();
      this.screen.drawString(eatSprite[0], 8, 4);
      break;
    case 2:
    case 6:
    case 10:
      this.screen.clean();
      this.screen.drawString(eatSprite[1], 8, 4);
      break;
    case 11:
      this.reset();
      return true;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
    return false;
  }
}
