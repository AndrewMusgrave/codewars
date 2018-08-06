function openOrSenior(data) {
  return data.map((d) => d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open' )
}
