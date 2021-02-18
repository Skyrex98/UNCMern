const DayCare = require('../dayCare');
const Child = require('../child');

describe('DayCare', () => {
  describe('Initialization', () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });
});
