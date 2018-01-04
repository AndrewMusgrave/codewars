function accum(s) {
	let arr = s.toLowerCase().split("");
  return arr.reduce((acc, curr, ind) => {
    let str = "";
    for (let i = 0; i <= ind; i++) {
			i == 0 ? str += curr.toUpperCase() : str +=curr;
    }
    acc.push(str);
    return acc;
  }, []).join("-");
}