let min = list => {
  let m = list[0];
  for(let i = 1; i < list.length; i++){
    if(list[i] < m) m = list[i];
  }
  return m;
}
    
let max = list => {
  return Math.max(...list);
}
