function rgb(r, g, b){
  // complete this function  
  return [r, g, b].map((number) => {
    if (number <= 0) {
      return 0;
    } else if (number > 255) {
      return 255; 
    }
    return number;
  }).map((number) => (('00' + number.toString(16).toUpperCase()).substr(-2))).join('');
}

