/* eslint-disable max-classes-per-file */

export default class Opt {
  deselect() { // eslint-disable-line class-methods-use-this
  }

  select() { // eslint-disable-line class-methods-use-this
  }
}

export class MainMenuOpt extends Opt {
  constructor(element) {
    super();
    this.$el = element;
  }

  deselect() {
    this.$el.classList.remove(this.constructor.selectLabel);
  }

  select() {
    this.$el.classList.add(this.constructor.selectLabel);
  }
}

MainMenuOpt.selectLabel = 'sel';
