function findDifference(a, b) {
    const c = a.reduce((acc, c) => acc * c, 1);
    const d = b.reduce((acc, c) => acc * c, 1);
    if(c > d){
      return c - d
    } else {
      return d - c
    }
  }