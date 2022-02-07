function abbrevName(name){
  let arr = name.split(' ');
  let firstname = arr[0];
  let surname = arr[1];
  let result = firstname[0].toUpperCase() + '.' + surname[0].toUpperCase();
    return result;

}
