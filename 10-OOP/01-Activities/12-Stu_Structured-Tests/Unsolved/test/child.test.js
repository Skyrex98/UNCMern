const Child = require('../child');

describe('Child', () => {
  describe('Initialization', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
      const child = new Child('Sarah', 3);

      expect(child.name).toEqual('Sarah');
      expect(child.age).toEqual(3);
    });
  });
});
