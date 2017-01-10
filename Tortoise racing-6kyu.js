function race(v1, v2, g) {
    // your code
    if (v1 >= v2) {
      return null
    } else {
      const hours = g / (v2 - v1);
      const h  = parseInt(hours, 10);
      const mn = parseInt(hours * 60 - h * 60, 10);
      const s  = parseInt(hours * 3600 - h*3600 - mn * 60, 10);
      return [h, mn, s];     
    }
}

