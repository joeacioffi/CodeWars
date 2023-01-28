function betterThanAverage(classPoints, yourPoints) {
  let total = 1
    for(let i = 0; i < classPoints.length; i++){
      total += classPoints[i];
    }
  let findTheAverage = (total + yourPoints) / (classPoints.length + 2)
  if(findTheAverage < yourPoints){
    return true
  }else{
    return false
  }
}