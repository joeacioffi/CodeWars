function capitals(word){
    //Create array
    var arr = []
    //Loop through letters in word
    for(var i = 0; i < word.length; i++){
      //If the letter is upper case
      if(word[i] == word[i].toUpperCase()){
        //Push to array
        arr.push(i)
      }
    }
   return arr
  }