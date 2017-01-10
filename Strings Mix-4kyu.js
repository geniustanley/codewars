function mix(s1, s2) {
  // your code
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var g = [];
  var final = [];
  
  s1.match(/[a-z]/g).map((c) => {
    var i = c.charCodeAt(0) - 97;
    if (!g[i]) 
      g[i] = [];
    g[i][0] = (g[i][0] || '') + c;
    return c;
  });
  
  s2.match(/[a-z]/g).map((c) => {
    var i = c.charCodeAt(0) - 97;
    if (!g[i]) 
      g[i] = [];
    g[i][1] = (g[i][1] || '') + c;
    return c;
  });
  
  
  g.map((x) => {
    if (x[0] && x[0].length > 1) 
      if (!x[1] || x[0].length > x[1].length)
        final.push([1, x[0]]);
    if (x[1] && x[1].length > 1)
      if (!x[0] || x[1].length > x[0].length)
        final.push([2, x[1]]);
    if (x[0] === x[1] && x[0].length > 1)
      final.push(['=', x[0]]);
  });
  
  final.sort((a, b) => {
    if (a[1].length < b[1].length) {
      return 1; 
    } else if (a[1].length > b[1].length) {
      return -1; 
    } else if (a[1].length === b[1].length) {
    
      if (a[0] == '=' && b[0] != '=') {
        return 1; 
      } else if (a[0] != '=' && b[0] == '=') {
        return -1; 
      } else if (a[0] < b[0]) {
        return -1; 
      } else if (a[0] > b[0]) {
        return 1; 
      } else {
        return a[1].charCodeAt(0) - b[1].charCodeAt(0);
      }
      return 0;
    }
    return 0; 
  });
  
  var ret = '';
  
  for (var key in final) {
    ret += final[key][0] + ':' + final[key][1] + '/'; 
  }
  
  return ret.substring(0, ret.length - 1);

  /*
    這題寫好爛= =
  */

}

