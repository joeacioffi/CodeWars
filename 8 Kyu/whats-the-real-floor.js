// Write a function that given a floor in the american system returns the floor in the european system
//Remove the 13th floor
//Negative numbers and 0 stay the same

function getRealFloor(n) {
    //If the floor is less than 13 and greater than 0
    if (n < 13 && n > 0){
      //Return floor number minus 1
      return n - 1
      //If floor is greater than or equal to 13
    } else if (n >= 13){
      //Return floor number minus 2
      return n - 2
    } else {
      //If none apply return the default number
      return n
    }
  }