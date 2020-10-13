class Menu {
  static deselect() {
    const el = this.options[this.selection];
    if (typeof el !== 'undefined')
      el.classList.remove(this.selectLabel);
    this.selection = -1;
  }

  static next() {
    const i = (this.selection + 1) % this.options.length;
    this.deselect();
    this.options[i].classList.add(this.selectLabel);
    this.selection = i;
  }

  static onload(elements) {
    Array.prototype.forEach.call(elements, (e) => {
      Menu.options.push(e);
    });
  }
}

Menu.selectLabel = 'sel';
Menu.selection = -1;
Menu.options = [];

export default Menu;
