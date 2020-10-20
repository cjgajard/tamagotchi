import Anime from './.';
import { eatSprite } from '../sprites';

export default class EatAnime extends Anime {
  draw() {
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
    case 4:
    case 8:
      this.screen.clean();
      if (this.food)
        this.food.draw();
      this.screen.drawString(eatSprite[0], 9, 5);
      break;
    case 2:
    case 6:
    case 10:
      this.screen.clean();
      if (this.food) {
        this.food.frame++;
        this.food.draw();
      }
      this.screen.drawString(eatSprite[1], 9, 5);
      break;
    case 11:
      if (this.food)
        this.food.frame = 0;
      this.reset();
      return true;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
    return false;
  }
}
