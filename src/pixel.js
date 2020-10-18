export const OFF = 0;
export const TOGGLE = -1;
export const ON = 1;

class Pixel {
  constructor(element, column, line) {
    this.column = column;
    this.line = line;
    this.$el = element;
  }

  change(value) {
    const label = this.constructor.onLabel;
    switch (value) {
    case OFF:
      this.$el.classList.remove(label);
      break;
    case TOGGLE:
      this.$el.classList.toggle(label);
      break;
    case ON:
    default:
      this.$el.classList.add(label);
      break;
    }
  }
}

Pixel.onLabel = 'on';

export default Pixel;
