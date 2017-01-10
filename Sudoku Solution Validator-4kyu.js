function validSolution(board){
  //TODO
  
  var center = [
    [1, 1],
    [1, 4],
    [1, 7],
    [4, 1],
    [4, 4],
    [4, 7],
    [7, 1],
    [7, 4],
    [7, 7],
  ];
  
  var walk = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]; 
  
  return board.reduce((pre, row) => (
    pre && row.reduce((pre, num) => (pre + num), 0) === 45
  ), true)
  
  &&
  
  board.reduce((pre, row) =>  (
    row.map((n, i) => (pre[i]+n))
  )).reduce((pre, n) => (
    pre && 45 === n
  ), true)
  
  &&
  
  center.reduce((pre, c) => (
    pre && walk.reduce((p, w) => (
      p + board[c[0]+w[0]][c[1]+w[1]]      
    ), board[c[0]][c[1]]) === 45
  ), true);
  
}

