function getAverage(marks){
  let acc = 0;
  marks. forEach(element => acc += element);
  return Math.floor(acc / marks.length);
}
