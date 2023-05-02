//Find integers that appear an odd number of times
//There will always be one integer that appears an odd number of times

function findOdd(A) {
    //Create an element to store the amount of times a number repeats
     let count = 0
     //Create nested for loops to compare two numbers
     for(let i = 0; i < A.length; i++){
       for(let j = 0; j < A.length; j++){
         //If numbers are the same, count it
         if(A[i] == A[j]){
           count++
         }
       }
       //If numbers are not the same, leave them alone
       if(count % 2 !== 0){
         return A[i]
       }
     }
}