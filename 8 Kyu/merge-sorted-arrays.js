//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {
    //Bring the two arrays together and sort them
    let arr = arr1.concat(arr2).sort((a,b) => a - b);
    //Create a new array to store everything in
    let result = []
    
    //Cycle through the arrays
    for (let i = 0; i < arr.length; i++){
      //If the numbers aren't the same, push them to the new array
      if (arr[i] !== arr[i + 1]){
        result.push(arr[i]);
      }
    }
    return result
  }