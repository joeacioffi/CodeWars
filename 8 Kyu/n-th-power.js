//All positive and non negative numbers
//Find the nth power of the element with the array index of N
//If N is not in the array, return -1.
function index(array, n){
    if(n >= array.length){
      return -1
    } else {
      return array[n] ** n
    }
  }