import Button from './button';
import Menu from './menu';
import PixelTable from './pixel-table';
import Tamagotchi from './tamagotchi';
import emulatorBg from '../vendor/bg.webp';

const menu = new Menu();
const screen = new PixelTable();
const tamagotchi = new Tamagotchi(screen);
const buttonA = new Button('z');
const buttonB = new Button('x');
const buttonC = new Button('c');

buttonA.onclick = function () {
  menu.next();
};
buttonB.onclick = function () {
  tamagotchi.jump();
};
buttonC.onclick = function () {
  menu.deselect();
};

const emuBg = document.createElement('img');
emuBg.onload = function () {
  const emu = document.getElementById('emulator');
  emu.style.setProperty('background-image', emulatorBg);
  emu.style.removeProperty('visibility');
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('egg-hole').style.removeProperty('visibility');
  emuBg.src = emulatorBg;

  document.addEventListener('keydown', ev => Button.onkeydown(ev));
  document.addEventListener('keyup', ev => Button.onkeyup(ev));
  screen.hydrate(document.getElementById('pixel-table'));
  menu.hydrate(document.getElementsByClassName('emu-img'));
  buttonA.hydrate(document.getElementById('button-A'));
  buttonB.hydrate(document.getElementById('button-B'));
  buttonC.hydrate(document.getElementById('button-C'));

  let id = null;
  id = setInterval(() => {
    try {
      tamagotchi.draw();
    }
    catch {
      if (id) {
        clearInterval(id);
      }
    }
  }, screen.refreshTime);
});
