export const IDLE = 'IDLE';
export const JUMP = 'JUMP';

const RESET = -1;

class Animation {
  constructor() {
    this.reset();
    this.state = IDLE;
  }

  reset(state = IDLE) {
    this.frame = RESET;
    this.state = state;
  }

  jump() {
    if (this.state === JUMP) return;
    this.reset(JUMP);
  }
}
export default Animation;
