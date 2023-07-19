//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
    //Find the highest number
    let max = Math.max.apply(this, numbers);
    //Find the lowest number
    let min = Math.min.apply(this, numbers);
    //Create a new array
    let result = []
    //Starting at the lowest number, incriment up by 1 until you reach the highest number
    for(let i = min; i <= max; i++){
      //Put all numbers in new array
      result.push(i);
    }
      return result
  }