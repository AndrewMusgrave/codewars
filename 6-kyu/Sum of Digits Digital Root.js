function digital_root(n) {
  n = n.toString().split('').reduce((acc, num) => acc += parseInt(num), 0);
  return (n > 9) ? digital_root(n): n;
}
