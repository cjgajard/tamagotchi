import Pixel, { OFF, ON } from './pixel';

const defOx = 0;
const defOy = 0;
const defRefresh = 250;
const defWidth = 24;
const defHeight = 12;

class PixelTable {
  constructor(time = defRefresh, height = defHeight, width = defWidth) {
    this.drawn = {};
    this.height = height;
    this.refreshTime = time;
    this.repo = [];
    this.width = width;
  }

  assign(column, line, value) {
    const row = this.repo[line];
    if (typeof row === 'undefined') return;
    const pixel = row[column];
    pixel.change(value);
  }

  deleteString() {
    const ox = this.drawn.column || defOx;
    const oy = this.drawn.line || defOy;
    const string = this.drawn.string || '';
    string.trim().split('\n').forEach((linestr, line) => {
      linestr.split('').forEach((ch, column) => {
        switch (ch) {
        case 'x':
          this.assign(column + ox, line + oy, OFF);
          break;
        default:
          break;
        }
      });
    });
  }

  drawString(string, ox = 0, oy = 0) {
    string.trim().split('\n').forEach((linestr, line) => {
      linestr.split('').forEach((ch, column) => {
        switch (ch) {
        case 'x':
          this.assign(column + ox, line + oy, ON);
          break;
        case '.':
        default:
          this.assign(column + ox, line + oy, OFF);
          break;
        }
      });
    });
    this.drawn.column = ox;
    this.drawn.line = oy;
    this.drawn.string = string;
  }

  hydrate(root) {
    const tbody = document.createElement('tbody');
    for (let line = 0; line < this.height; line++) {
      const row = document.createElement('tr');
      this.repo.push([]);
      for (let column = 0; column < this.width; column++) {
        const cell = document.createElement('td');
        cell.className = 'pixel';
        row.appendChild(cell);
        this.repo[line].push(new Pixel(cell));
      }
      tbody.appendChild(row);
    }
    root.appendChild(tbody);
  }
}

export default PixelTable;
