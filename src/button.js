class Button {
  constructor(key) {
    this.key = key;
  }

  hydrate(root) {
    this.root = root;
    this.root.addEventListener('click', event => this.onclick(event));
    this.constructor.repo[this.key] = this;
  }

  static onkeyup(event) {
    const button = this.repo[event.key];
    if (typeof button === 'undefined') {
      return;
    }
    button.root.classList.remove('active');
  }

  static onkeydown(event) {
    if (event.repeat) {
      return;
    }
    const button = this.repo[event.key];
    if (typeof button === 'undefined') {
      return;
    }
    button.root.classList.add('active');
    button.onclick(event);
  }
}

Button.repo = {};

export default Button;
