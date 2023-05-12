String.prototype.toJadenCase = function () { 
    //Split words
    //Iterate over each word
    return this.split(" ").map(function(word){
      //Capitalize the first letter of each word
      //Rejoin the words into a string
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }