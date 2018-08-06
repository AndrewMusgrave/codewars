function array_diff_very_fast(a, b) {
  const arr = [], numbers = {};
  for( let i = 0; i < b.length; i ++ )
    numbers[b[i]] = true;

  for( let i = 0; i < a.length; i ++ )
    if( !numbers[a[i]] ) arr.push(a[i]);

  return arr;
}
