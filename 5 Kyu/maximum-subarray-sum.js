function maxSequence(arr){
    let currentSum = 0
    let maxSum = 0
    
    //If array is empty, return 0
    if(arr.length === 0){
        return 0
    }
  //Loop through the array
    arr.forEach(a => {
      //Add numbers together
      currentSum = Math.max(a, currentSum + a)
      maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
  }