//Given a string, return a string in which each character is repeated once.
//Case-sensitive

function doubleChar(str) {
    //Create new string
    let string = ""
    //Loop through string
    for(i = 0; i < str.length; i++){
      //Put all double letters in new string
      string += str[i] + str[i]
    }
    return string
  }