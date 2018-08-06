function onlyDuplicates(str) {
  return str.split('').filter((c) => str.indexOf(c) != str.lastIndexOf(c)).join('')
}
