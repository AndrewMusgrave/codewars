const numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
const numerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

RomanNumerals = {
  toRoman: (num) =>
    numbers.reduce((a, n, i) => {
      while (n <= num) {
        a += numerals[i]
        num -= n
      }
      return a;
    }, ''),
  fromRoman: (str) =>
    numerals.reduce((a, c, i) => {
      while (str.indexOf(c) == 0) {
        a += numbers[i]
        str = str.replace(numerals[i], '')
      }
      return a;
    }, 0)
}
