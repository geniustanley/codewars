function friend(friends){
  //your code here
  return friends.filter( function(name) {
    return name.length === 4;
  });
}

