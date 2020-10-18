import FoodMenu, { MEAL, SNACK } from './food-menu';
import Menu, { FOOD } from './main-menu';
import Button from './button';
import { EMPTY } from './menu';
import PixelTable from './pixel-table';
import Tamagotchi from './tamagotchi';
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
  activeMenu.next();
  activeMenu.draw();
};
buttonB.onclick = function () {
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
      console.warn('meal');
      break;
    case SNACK:
      console.warn('snack');
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
  activeMenu.deselect();
  mainMenu.deselect();
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

  let id = null;
  id = setInterval(() => {
    try {
      switch (mainMenu.selection) {
      case FOOD:
        if (foodMenu.selection === EMPTY)
          tamagotchi.draw();
        break;
      default:
        tamagotchi.draw();
      }
    }
    catch (err) {
      console.error(err);
      if (id)
        clearInterval(id);
    }
  }, pixelTable.refreshTime);
});
