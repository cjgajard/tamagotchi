import FoodMenu, { MEAL, SNACK } from './food-menu';
import Menu, { FOOD } from './main-menu';
import Button from './button';
import { EMPTY } from './menu';
import PixelTable from './pixel-table';
import Tamagotchi from './tamagotchi';
import auclInterval from './autoclear-interval';
import emulatorBg from '../vendor/bg.webp';

const pixelTable = new PixelTable();

const mainMenu = new Menu();
const foodMenu = new FoodMenu(pixelTable);
const tamagotchi = new Tamagotchi(pixelTable);
let activeMenu = mainMenu;

const buttonA = new Button('z');
const buttonB = new Button('x');
const buttonC = new Button('c');

buttonA.onclick = function () {
  if (tamagotchi.blocking)
    return;
  activeMenu.next();
  activeMenu.draw();
};
buttonB.onclick = function () {
  if (tamagotchi.blocking)
    return;
  switch (mainMenu.selection) {
  case EMPTY:
    tamagotchi.jump();
    break;
  case FOOD:
    switch (foodMenu.selection) {
    case EMPTY:
      activeMenu = foodMenu;
      foodMenu.next();
      foodMenu.draw();
      break;
    case MEAL:
      activeMenu.deselect();
      activeMenu = mainMenu;
      tamagotchi.eat();
      break;
    case SNACK:
      activeMenu.deselect();
      activeMenu = mainMenu;
      tamagotchi.eat();
      break;
    default:
      break;
    }
    break;
  default:
    break;
  }
};
buttonC.onclick = function () {
  if (tamagotchi.blocking)
    return;
  activeMenu.deselect();
  activeMenu = mainMenu;
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
  pixelTable.hydrate(document.getElementById('pixel-table'));
  mainMenu.hydrate(document.getElementsByClassName('emu-img'));
  buttonA.hydrate(document.getElementById('button-A'));
  buttonB.hydrate(document.getElementById('button-B'));
  buttonC.hydrate(document.getElementById('button-C'));

  auclInterval(() => {
    switch (mainMenu.selection) {
    case FOOD:
      if (foodMenu.selection === EMPTY)
        tamagotchi.draw();
      break;
    default:
      tamagotchi.draw();
    }
  }, pixelTable.refreshTime, true);
});
