function arrayDiff(a, b) {
    //Filter array, only keep the value if b does not contain the value in a.
    return a.filter(val => !b.includes(val))
  }