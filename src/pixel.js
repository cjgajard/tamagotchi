class Pixel {
  constructor(element) {
    this.$el = element;
  }

  change(value) {
    const className = this.constructor.on;
    switch (value) {
      case this.constructor.off:
        this.$el.classList.remove(className);
        break;
      case this.constructor.toggle:
        this.$el.classList.toggle(className);
        break;
      default:
        this.$el.classList.add(className);
        break;
    }
  }

  static assign(x, y, value) {
    const row = this.repo[y];
    if (typeof row === 'undefined')
      return;
    const pixel = row[x];
    pixel.change(value);
  }

  static drawString(str, ox = 0, oy = 0) {
    str.trim().split('\n').forEach((line, y) => {
      line.split('').forEach((ch, x) => {
        switch (ch) {
        case 'x':
          Pixel.assign(x + ox, y + oy, 1);
          break;
        case '.':
        default:
          Pixel.assign(x + ox, y + oy, 0);
          break;
        }
      });
    });
  }

  static onload(root) {
    const tbody = document.createElement('tbody');
    for (let j = 0; j < Pixel.height; j++) {
      const row = document.createElement('tr');
      Pixel.repo.push([]);
      for (let i = 0; i < Pixel.width; i++) {
        const cell = document.createElement('td');
        cell.className = 'pixel';
        row.appendChild(cell);
        Pixel.repo[j].push(new Pixel(cell));
      }
      tbody.appendChild(row);
    }
    root.appendChild(tbody);
  }
}

Pixel.off = 0;
Pixel.on = 'on';
Pixel.toggle = -1;
Pixel.repo = [];
Pixel.width = 24;
Pixel.height = 12;

export default Pixel;
