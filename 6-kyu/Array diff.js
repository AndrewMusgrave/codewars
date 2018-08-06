function array_diff(a, b) {
  return a.reduce((acc, d) => {
    if (b.indexOf(d) == -1)
       acc.push(d)
    return acc;
    }, [])
}
