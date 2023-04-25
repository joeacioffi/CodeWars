//all integers are non-negative
//combo of integers and strings
//return list with strings filtered out

function filter_list(l) {
    //create an empty array
    let numbers = []
    //parse through all elements of array
    for (let i = 0; i < l.length; i++){
      //if the element in array is a number
      if(Number.isInteger(l[i])){
        //push to new array
        numbers.push(l[i])
      }
    }
    return numbers
  }