function squareOrSquareRoot(array) {
  return array.map(el => {
    if(Number.isInteger(Math.sqrt(el))){
      return Math.sqrt(el);
    } else {
    return Math.pow(el, 2);
    }
  });
}
