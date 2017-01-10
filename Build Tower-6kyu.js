function towerBuilder(nFloors) {
  // build here
  var ret = []; 
  for(var i = 1; i <= nFloors; i++) {
    var tmp = '';
    for (var j = 0; j < nFloors-i; j++)
      tmp += ' '; 
    for (var j = 1; j < i; j++)
      tmp += '*';
    tmp += '*';
    for (var j = 1; j < i; j++)
      tmp += '*';
    for (var j = 0; j < nFloors-i; j++)
      tmp += ' ';
    ret.push(tmp);
  }
  return ret;
}

/*
 * best practice *
------------------
  function towerBuilder(n) {
    // build here
    return [...Array(n)].map((_, i) => " ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i));
  }
*/

