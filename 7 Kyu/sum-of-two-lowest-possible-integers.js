//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


function sumTwoSmallestNumbers(numbers) {  
    //Cycle through numbers, find the smallest one
   let a = Math.min(...numbers);
    //Isolate the smallest number
    numbers.splice(numbers.indexOf(a), 1);
    //Find the second smallest number
   let b = Math.min(...numbers);
    //Add them together
    return a + b
  }