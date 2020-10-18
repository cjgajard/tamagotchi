class Button {
  constructor(key) {
    this.key = key;
  }

  hydrate(root) {
    this.root = root;
    this.root.addEventListener('click', ev => this.onclick(ev));
    this.constructor.repo[this.key] = this;
  }

  static onkeyup(ev) {
    const button = this.repo[ev.key];
    if (typeof button === 'undefined')
      return;
    button.root.classList.remove('active');
  }

  static onkeydown(ev) {
    if (ev.repeat)
      return;
    const button = this.repo[ev.key];
    if (typeof button === 'undefined')
      return;
    button.root.classList.add('active');
    button.onclick(ev);
  }
}

Button.repo = {};

export default Button;
