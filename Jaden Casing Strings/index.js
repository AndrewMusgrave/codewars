String.prototype.toJadenCase = function () {
  return this.split(" ").map((curr) => {
    return curr.charAt(0).toUpperCase() + curr.slice(1);
  }).join(" ")
};