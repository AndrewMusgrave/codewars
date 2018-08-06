function orderWeight(strng) {
  const value = v =>
    v.split("").reduce((acc, val) => {
      return acc + parseInt(val);
    }, 0);

  return strng.split(" ").sort((a, b) => {
    let A = value(a),
        B = value(b);
    return (A === B) ? a.localeCompare(b) : A - B;
  }).join(" ")
}
