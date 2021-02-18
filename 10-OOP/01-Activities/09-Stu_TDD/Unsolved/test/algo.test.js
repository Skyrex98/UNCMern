const Algo = require('../algo');

const algo = new Algo();

describe('Algo', () => {
  describe('reverse', () => {
    it('should reverse a given string', () => {
      const str = 'Hello World';
      const reversed = 'dlroW olleH';

      const result = algo.reverse(str);

      expect(result).toEqual(reversed);
    });

    it('should return an empty string if no string is provided', () => {
      const result = algo.reverse();

      expect(result).toEqual('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for civic being a palindrome', () => {
      const str = 'civic';

      const result = algo.isPalindrome(str);

      expect(result).toBeTruthy();
    });

    it('should return false for noah being a palindrome', () => {
      const str = 'noah';

      const result = algo.isPalindrome(str);

      expect(result).toBeFalsy();
    });
  });

  describe('capitalize', () => {
    it('should capitalize a given string', () => {
      const str = 'Hello World';
      const capitalized = 'HELLO WORLD';

      const result = algo.capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});
