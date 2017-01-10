function toCamelCase(str){
  return str.split(/-|_/).map( (word, i) => {
    if (i) {
      return word.charAt(0).toUpperCase()+word.slice(1); 
    }
    return word;
  }).join('');
}

/*
 * best practice *
-------------------
  function toCamelCase(str){
    const regExp = /[-_]\w/ig;
    return str.replace(regExp, (match) => (
      match.charAt(1).toUpperCase() 
    ));
  }
*/

