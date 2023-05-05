//Check if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    //Establish the check for the word reading left to right, ignoring case
    x = x.toLowerCase()
    //Establish the check for the word reading right to left, ignoring case
    let reversed = x.toLowerCase().split('').reverse().join('')
    //Check if the word is the same backwards and forwards
    if(x == reversed){
      //If it is, return true
      return true
      //Otherwise return false
    }else{
      return false
    }
  }