var palindromeChainLength = function(n) {
  var cnt = 0; 
  while (n.toString().split('').join('') !== n.toString().split('').reverse().join('')) {
    n += Number(n.toString().split('').reverse().join(''));
    cnt++;
  }
  return cnt;
};

/* 

best practice

var palindromeChainLength = function(n) {
  var r = 1 * n.toString().split('').reverse().join('');
  return n - r && 1 + palindromeChainLength(r + n);
};

*/

