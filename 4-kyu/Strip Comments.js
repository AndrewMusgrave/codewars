function solution(input, markers){
  return input.split("\n").reduce((acc, line) => {
    for (let i = 0; i < markers.length; i++) 
      if (line.indexOf(markers[i]) !== -1) {
        acc.push(line.slice(0, line.indexOf(markers[i])).replace(/\s*$/, ""))
        return acc;
      }
    acc.push(line)
    return acc;
  }, []).join("\n")
}
