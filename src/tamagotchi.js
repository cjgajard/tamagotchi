import { MEAL, SNACK } from './menu/food';
import EatAnime from './anime/eat';
import IdleAnime from './anime/idle';
import JumpAnime from './anime/jump';
import MealAnime from './anime/meal';
import SnackAnime from './anime/snack';

export const IDLE = 'IDLE';
export const JUMP = 'JUMP';
export const EAT = 'EAT';

class Tamagotchi {
  constructor(scr) {
    this.screen = scr;
    this.animations = {
      [EAT]: new EatAnime(scr),
      [IDLE]: new IdleAnime(scr),
      [JUMP]: new JumpAnime(scr),
    };
    this.state = IDLE;
    this.blocking = false;
  }

  draw() {
    const anime = this.animations[this.state];
    anime.frame++;
    if (!anime.draw())
      return;
    this.next();
  }

  eat(food) {
    this.state = EAT;
    const anime = this.animations[EAT];
    switch (food) {
    case MEAL:
      anime.food = new MealAnime(this.screen);
      break;
    case SNACK:
      anime.food = new SnackAnime(this.screen);
      break;
    default:
      break;
    }
    this.blocking = true;
  }

  jump() {
    if (this.state !== IDLE)
      return;
    this.state = JUMP;
    this.blocking = true;
  }

  next() {
    switch (this.state) {
    default:
      this.state = IDLE;
      this.blocking = false;
      break;
    }
    this.animations[this.state].reset();
  }
}

export default Tamagotchi;
