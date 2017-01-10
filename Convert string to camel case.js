function toCamelCase(str){
  const regExp = /[-_]\w/ig;
  return str.replace(regExp, (match) => (
    match.charAt(1).toUpperCase() 
  ));
}

