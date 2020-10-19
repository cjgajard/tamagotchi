import EatAnime from './eat-anime';
import IdleAnime from './idle-anime';
import JumpAnime from './jump-anime';

export const IDLE = 'IDLE';
export const JUMP = 'JUMP';
export const EAT = 'EAT';

class Tamagotchi {
  constructor(scr) {
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

  eat() {
    this.state = EAT;
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
