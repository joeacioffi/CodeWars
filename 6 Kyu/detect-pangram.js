// Check if string uses all letters at least once
// Ignore case
// Ignore numbers and punctuation

function isPangram(string){
    // Convert all letters to lowercase
    let strArr = string.toLowerCase();
    // Give parameters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // Loop through alphabet
    for(let i = 0; i < alphabet.length; i++){
      // Check if all letters re in the string. If all letters are not in the string...
      if (strArr.indexOf(alphabet[i]) < 0){
        return false
      }
    }
    return true
  }