function longest(s1, s2) {
  // your code
  var combine = s1.concat(s2).split('').sort();
  var ret = "";
  combine.map( function (e) {
    if (ret.search(e) == -1)
      ret += e;
  });
  return ret;
}

/*
 * best practice *
-------------------
  function longest(s1, s2) {
    // your code
    return [... new Set(s1+s2)].sort().join('');
  }
*/

