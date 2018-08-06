const flatten = (...args) => {
  return args.reduce((a ,b) => {
    return a.concat(Array.isArray(b) ? flatten(...b) : b)
  }, [])
}
