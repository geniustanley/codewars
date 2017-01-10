function playPass(s, n) {
    // your code
    return s.split('').map( (c, i) => {
      if ( c >= 'A' && c <= 'Z' ) {
        var tmp = c.charCodeAt(0) + n;
        if ( tmp > 90 )
          tmp -= 26;
          
        if ( i % 2 === 1)
          tmp += 32;
      
        return String.fromCharCode(tmp);
      }
      else if ( c >= 'a' && c <= 'z') {
        var tmp = c.charCodeAt(0) + n;
        if ( tmp > 122 )
          tmp -= 26;
          
        if ( i % 2 === 0)
          tmp -= 32;
        return String.fromCharCode(tmp);
      }
      else if ( c >= '0' && c <= '9') {
        return 9-c; 
      }
      return c;
        
    }).reverse().join('');
    
}

