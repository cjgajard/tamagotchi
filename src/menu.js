export const EMPTY = -1;
const NEXT = 1;

class Menu {
  constructor() {
    this.options = [];
    this.selection = EMPTY;
  }

  deselect() {
    const el = this.options[this.selection];
    if (typeof el !== 'undefined') {
      el.classList.remove(this.constructor.selectLabel);
    }
    this.selection = EMPTY;
  }

  next() {
    const index = (this.selection + NEXT) % this.options.length;
    this.deselect();
    this.options[index].classList.add(this.constructor.selectLabel);
    this.selection = index;
  }

  hydrate(collection) {
    Array.prototype.forEach.call(collection, (el) => {
      this.options.push(el);
    });
  }
}

Menu.selectLabel = 'sel';

export default Menu;
