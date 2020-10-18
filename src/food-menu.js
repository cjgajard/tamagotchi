import Menu from './menu';
import Opt from './opt';

export const MEAL = 0;
export const SNACK = 1;

const arrowSprite = `
x
xx
x
`;

const mealSprite = `
x...x..xx..x..x..
xx.xx.x.x.x.x.x..
x.x.x.xx..xxx.x..
x...x.xxx.x.x.xxx
`;

const snackSprite = `
.xx.............x..
xx..xxx..xx..xx.x.x
..x.x.x.x.x.x...xx.
xx..x.x..xx..xx.x.x
`;


class FoodMenu extends Menu {
  constructor(scr) {
    super();
    this.screen = scr;
    this.options.push(new Opt(MEAL));
    this.options.push(new Opt(SNACK));
  }

  draw() {
    this.screen.clean();
    const arrowA = this.selection === MEAL;
    const arrowB = this.selection === SNACK;
    /* eslint-disable no-magic-numbers */
    if (arrowA)
      this.screen.drawString(arrowSprite, 1, 2);
    this.screen.drawString(mealSprite, 5, 1);
    if (arrowB)
      this.screen.drawString(arrowSprite, 1, 8);
    this.screen.drawString(snackSprite, 4, 7);
    /* eslint-disable no-magic-numbers */
  }
}

export default FoodMenu;
