function Algo() {}

Algo.prototype.reverse = function (str) {
  if (!str) {
    return '';
  }
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function (str) {
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
  return str.toUpperCase();
};

module.exports = Algo;
