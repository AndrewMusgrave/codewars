function narcissistic( value ) {
  return value.toString().split("").reduce((acc, num) => {
   return acc += Math.pow(num, value.toString().length)
  }, 0) == value
}
