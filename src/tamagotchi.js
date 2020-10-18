import IdleAnime from './idle-anime';
import JumpAnime from './jump-anime';

export const IDLE = 'IDLE';
export const JUMP = 'JUMP';

class Tamagotchi {
  constructor(scr) {
    this.animations = {
      [IDLE]: new IdleAnime(scr),
      [JUMP]: new JumpAnime(scr),
    };
    this.state = IDLE;
  }

  next() {
    switch (this.state) {
    case JUMP:
      this.state = IDLE;
      break;
    default:
      break;
    }
    this.animations[this.state].reset();
  }

  draw() {
    const anime = this.animations[this.state];
    anime.frame++;
    if (!anime.draw())
      return;
    this.next();
  }

  jump() {
    if (this.state !== IDLE)
      return;
    this.state = JUMP;
  }
}

export default Tamagotchi;
