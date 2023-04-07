//convert to new string
//should ignore case
//repeated characters convert to ")"
//non-repeated characters convert to "("

function duplicateEncode(word){
    // create a string value that ignores case
  let str = word.toLowerCase();
  // variable to hold the string after it's loop
  let strFin = ''
  //loop though the letters in the string
  for (i = 0; i < str.length; i++){
    //check for repeating letters
    if (str.lastIndexOf(str[i]) === str.indexOf(str[i])){
      //for each unique character
      strFin += '(';
      //for each duplicate character
    } else {
      strFin += ')';
    }
  }
      //return in new string
  return strFin
  
}