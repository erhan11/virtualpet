function Pet(petname) {
  this.name = petname;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

const MAXIMUM_FITNESS = 10;

Pet.prototype.growUp = function growUp() {
  this.age++;
  this.hunger = this.hunger + 5;
  this.fitness = this.fitness - 3;
};
Pet.prototype.walk = function walk() {
  this.fitness = this.fitness + 4;
  if (this.fitness > MAXIMUM_FITNESS) {
    this.fitness = MAXIMUM_FITNESS;
  }
};
const MIN_HUNGER = 0;
Pet.prototype.feed = function feed() {
  this.hunger -= 3;
  if (this.hunger < MIN_HUNGER) {
    this.hunger = MIN_HUNGER;
  }
};

Pet.prototype.checkUp = function checkUp() {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry AND I need a walk";
  } else if (4 <= this.fitness && 6 <= this.hunger) {
    return "I feel great!";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger <= 5) {
    return "I am hungry";
  } else if (this.fitness > 3) {
    return "I feel great";
  } else if (this.hunger < 5) {
    return "I feel great";
  } 
};

module.exports = Pet;
