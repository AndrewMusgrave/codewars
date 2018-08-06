function printerError(s) {
  let total = s.split('').reduce((acc, c) => c.charCodeAt() > 109 ? acc + 1 : acc,0)
  return `${total}/${s.length}`
}
