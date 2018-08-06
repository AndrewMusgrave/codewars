const inArray = (a1, a2) => {
  const words = a2.join(" ");
  return a1.filter(str => words.includes(str)).sort();
}
