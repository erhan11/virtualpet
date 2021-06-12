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
});
