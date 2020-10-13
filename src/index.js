import Pixel from './pixel';
import Menu from './menu';

const IDLE_0 = `
........
........
........
..xxxx..
.x....x.
x.x..x.x
x..xx..x
.x....x.
..xxxx..
`;

const IDLE_1 = `
........
..xxxx..
.x....x.
.xx..xx.
.x.xx.x.
.x....x.
.x....x.
.x....x.
..xxxx..
`;

const IDLE_2 = `
..xxxx..
.x....x.
x.x..x.x
x..xx..x
.x....x.
..xxxx..
........
........
........
`;

const IDLE_4 = `
........
..xxxx..
.x....x.
.x....x.
.xx..xx.
.x.xx.x.
.x....x.
.x....x.
..xxxx..
`;

let animationFrame = 0;

document.addEventListener('DOMContentLoaded', function () {
  Pixel.onload(document.getElementById('pixel-table'));
  Menu.onload(document.getElementsByClassName('emu-img'));

  const buttonA = document.getElementById('button-A');
  buttonA.addEventListener('click', () => Menu.next());
  const buttonC = document.getElementById('button-C');
  buttonC.addEventListener('click', () => Menu.deselect());

  setInterval(function () {
    switch (animationFrame++) {
    case 0:
      Pixel.drawString(IDLE_0, 8, 2);
      break;
    case 1:
      Pixel.drawString(IDLE_1, 8, 2);
      break;
    case 2:
      Pixel.drawString(IDLE_2, 8, 2);
      break;
    case 3:
      Pixel.drawString(IDLE_4, 8, 2);
      animationFrame = 0;
      break;
    }
  }, 333);

  document.getElementById('egg').style.visibility = 'visible';
});
