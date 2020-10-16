import Animation, { IDLE, JUMP } from './animation';

const Sprite = [
  `
..xxxx..
.x....x.
x.x..x.x
x..xx..x
.xxxxxx.
  `,
  `
..xxxx..
.x....x.
.xx..xx.
.x.xx.x.
.x....x.
.x....x.
..xxxx..
  `,
  `
..xxxx..
.x....x.
x.x..x.x
x..xx..x
.x....x.
..xxxx..
  `,
  `
..xxxx..
.x....x.
.x....x.
.x....x.
.xx..xx.
.x.xx.x.
..xxxx..
  `,
];

class Tamagotchi {
  constructor(screen) {
    this.animation = new Animation();
    this.screen = screen;
  }

  jump() {
    this.animation.jump();
  }

  drawIdle() {
    /* eslint-disable no-magic-numbers */
    switch (this.animation.frame) {
    case 0:
      this.screen.deleteString();
      this.screen.drawString(Sprite[0], 8, 6);
      break;
    case 2:
      this.screen.deleteString();
      this.screen.drawString(Sprite[2], 8, 5);
      break;
    case 3:
      this.animation.reset();
      break;
    default:
      break;
    }
    /* eslint-enable no-magic-numbers */
  }

  drawJump() {
    this.screen.deleteString();
    /* eslint-disable no-magic-numbers */
    switch (this.animation.frame) {
    case 0:
      this.screen.drawString(Sprite[0], 8, 6);
      break;
    case 1:
      this.screen.drawString(Sprite[1], 8, 4);
      break;
    case 2:
      this.screen.drawString(Sprite[2], 8, 1);
      break;
    case 3:
      this.screen.drawString(Sprite[3], 8, 3);
      this.animation.reset();
      break;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
  }

  draw() {
    this.animation.frame++;
    switch (this.animation.state) {
    case JUMP:
      this.drawJump();
      break;
    case IDLE:
    default:
      this.drawIdle();
      break;
    }
  }
}

export default Tamagotchi;