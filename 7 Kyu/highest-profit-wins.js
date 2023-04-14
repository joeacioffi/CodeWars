// Assume all arrays are numbers
// Return both the minimum and maximum number
// All arrays will have at least one element
// Don't have to check for null or undefined

function minMax(arr){
    //Find min and max in array- use spread syntax to parse through each element
    return [Math.min(...arr),Math.max(...arr)];
  }