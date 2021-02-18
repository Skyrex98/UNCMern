const DigitalPal = function (name) {
  this.hungry = true;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.houseQuality = 100;
  this.name = name;
  //   put a function here
};

DigitalPal.prototype.feed = function () {
  console.log('YUMMMMM');
  this.sleep();
};

DigitalPal.prototype.sleep = function (shouldSleep) {
  console.log('ZZZzzzzZZZZzzzZZZZzzzZZZZ');
  this.increaseAge();
};

DigitalPal.prototype.increaseAge = function () {
  this.age = this.age + 1;
  console.log(`HAPPY BIRTHDAY TO ME! IM ${this.age} YEARS OLD`);
  this.feed();
};

const babytchi = new DigitalPal('babytchi');

babytchi.feed();
// babytchi.sleep(true);
