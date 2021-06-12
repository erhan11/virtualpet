function Pet(petname) {
  this.name = petname;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype.growUp = function growUp() {
  this.age++;
  this.hunger = this.hunger + 5;
  this.fitness = this.fitness - 3;
};
Pet.prototype.walk = function walk() {
  this.fitness = this.fitness + 4;
  if (this.fitness > 10) {
    this.fitness = 10;
  }
};

module.exports = Pet;
