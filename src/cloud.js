import auclInterval from './autoclear-interval';

const defWidth = 206;
const defHeight = 132;
const defSpeed = 1;

const refreshRate = 33.3333;
const startX = 0;
const positionWrap = 100;

export default class Cloud {
  constructor(altitude, speed = defSpeed, size = 1) {
    this.$el = null;
    this.altitude = altitude;
    this.height = defHeight * size;
    this.position = startX;
    this.speed = speed;
    this.width = defWidth * size;
  }

  connect(root) {
    this.$el = document.createElement('div');
    this.$el.classList.add('cloud');
    this.$el.style.width = `${this.width}px`;
    this.$el.style.height = `${this.height}px`;
    this.$el.style.bottom = `${this.altitude}%`;
    this.$el.style.right = `${this.position}%`;
    root.appendChild(this.$el);
  }

  static loop() {
    auclInterval(() => {
      this.repo.forEach((cloud) => {
        cloud.position += cloud.speed;
        cloud.position %= positionWrap;
        cloud.$el.style.right = `${cloud.position}%`;
      });
    }, refreshRate, true);
  }

  static hydrate() {
    const root = document.getElementById('background');
    this.repo.forEach((cloud) => {
      cloud.connect(root);
    });
  }

  static populate() {
    let cloud = null;
    /* eslint-disable no-magic-numbers */
    cloud = new Cloud(50, 1);
    cloud.position = 20;
    this.repo.push(cloud); // eslint-disable-line no-magic-numbers
    cloud = new Cloud(20, 1);
    cloud.position = 60;
    this.repo.push(cloud);
    cloud = new Cloud(80, 1.2);
    cloud.position = 80;
    this.repo.push(cloud);
    /* eslint-enable no-magic-numbers */
  }
}

Cloud.repo = [];
