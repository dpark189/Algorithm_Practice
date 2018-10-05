function whoIsNext(names, r){
  if(r == 1){
    return names[0];
  }
  var base = names.length;

  function getIndex(n, i) {
    i = i || base;
    if (n < i) {
        return Math.floor(n * base / i);
    }
    return getIndex(n - i, 2 * i);
  }

  return names[getIndex(r-1)];

}
