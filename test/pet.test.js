const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      const dog = new Pet ("lasi");
      expect (dog.name).toBe("lasi");
    });
  });
  
