import Menu, { EMPTY } from './.';
import { MainMenuOpt as Opt } from '../opt';

export { EMPTY };
export const FOOD = 0;

class MainMenu extends Menu {
  hydrate(collection) {
    Array.prototype.forEach.call(collection, (el) => {
      this.options.push(new Opt(el));
    });
  }
}

export default MainMenu;
