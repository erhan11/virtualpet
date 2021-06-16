const Pet = require("../src/pet");


describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("has a name", () => {
    const dog = new Pet("lasi");

    expect(dog.name).toBe("lasi");
  });
  it("grows up", () => {
    const dog = new Pet("lasi");

    dog.growUp();
    expect(dog.age).toEqual(1);
  });

  it("hunger increases and fitness decresess", () => {
    const dog = new Pet("lasi");

    dog.growUp();
    expect(dog.hunger).toEqual(5);
    expect(dog.fitness).toEqual(7);
  });
  it("walks", () => {
    const dog = new Pet("lasi");
    dog.fitness = 8;
    dog.walk();
    expect(dog.fitness).toEqual(10);
  });

  it("get full", () => {
    const dog = new Pet("lasi");
    dog.hunger = 2;
    dog.feed();
    expect(dog.hunger).toEqual(0);
  });
it("is hungry and needs a walk CheckUp", () => {
  const dog = new Pet("lasi");
  dog.hunger = 6;
  dog.fitness = 2;
  expect(dog.checkUp()).toEqual(expect.stringContaining("I am hungry AND I need a walk"));
});




});
