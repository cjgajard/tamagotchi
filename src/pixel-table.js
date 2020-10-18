import Pixel, { OFF, ON } from './pixel';

const defOx = 0;
const defOy = 0;
const defRefresh = 125;
const defWidth = 24;
const defHeight = 12;

class PixelTable {
  constructor(time = defRefresh, height = defHeight, width = defWidth) {
    this.height = height;
    this.refreshTime = time;
    this.repo = [];
    this.drawn = [];
    this.width = width;
  }

  assign(column, line) {
    const row = this.repo[line];
    if (typeof row === 'undefined')
      return;
    const pixel = row[column];
    pixel.change(ON);
    this.drawn.push(pixel);
  }

  clean() {
    this.drawn.forEach(pixel => pixel.change(OFF));
    this.drawn = [];
  }

  drawString(string, ox = defOx, oy = defOy) {
    string.trim().split('\n').forEach((linestr, line) => {
      linestr.split('').forEach((ch, column) => {
        switch (ch) {
        case 'x':
          this.assign(column + ox, line + oy);
          break;
        default:
          break;
        }
      });
    });
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
        this.repo[line].push(new Pixel(cell, column, line));
      }
      tbody.appendChild(row);
    }
    root.appendChild(tbody);
  }
}

export default PixelTable;
