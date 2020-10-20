export const EMPTY = -1;

class Menu {
  constructor() {
    this.options = [];
    this.selection = EMPTY;
  }

  deselect() {
    const op = this.options[this.selection];
    if (typeof op === 'undefined')
      return;
    op.deselect();
    this.selection = EMPTY;
  }

  draw() { // eslint-disable-line class-methods-use-this
  }

  next() {
    const op = this.options[this.selection];
    if (typeof op !== 'undefined')
      op.deselect();
    const index = (this.selection + 1) % this.options.length;
    this.options[index].select();
    this.selection = index;
  }
}

export default Menu;
