//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
  //Iterate through all elements of the array
  for(let i = 0; i<numbers.length; i++){
    //Iterate through the elements in the next array
    for(let j = i+1; j<numbers.length; j++){
      //Check if the sum of the element iterated in the first loop plus the one iterated in the next loop is equal to the target, return their positions
      let res = numbers[i] + numbers[j]
      if(res == target) return [i,j]
    }
  }
}