function isValidIP(str) {
  let arr = str.split(".");
  if (arr.length != 4) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/^[a-zA-Z]+/)) return false;
    if (arr[i].includes(" ")) return false;
    if (arr[i][0] == 0 && arr[i].length > 1) return false;
    if (arr[i] > 255) return false;
  }
  return true;
}
