function getDivisorsCnt(n){
    let arr = []
      for (i = 1; i <= n; i++){
        if(n % i == 0){
          arr.push(n)
        }
      }
    return arr.length
  }