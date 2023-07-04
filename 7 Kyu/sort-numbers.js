// Sorts the passed in array of numbers in ascending order
// Return an empty array if there are no values

function solution(nums){
    return nums !== null ? nums.sort((a,b) => a - b) : []
  }