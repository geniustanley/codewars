function titleCase(title, minorWords) {
  return title.split(' ').map((word, i) => {
    
    if (minorWords && minorWords.toLowerCase().split(' ').indexOf(word.toLowerCase()) !== -1 && i) {
      return word.toLowerCase();
    }
    else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}

