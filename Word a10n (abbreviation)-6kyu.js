function abbreviate(string) {
  // ...
  
  return string.replace(/\w+/ig, (word) => (
    word.length >= 4 ? word.charAt(0)+(word.length-2)+word.charAt(word.length-1) : word
  ));
}

