function solution(number){
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  return decimals.reduce((acc, num, i) => {
    while (num <= number) {
      acc += numerals[i];
      number -= num;
    }
    return acc;
  }, '')
}
