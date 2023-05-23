function isIsogram(str){
    //ignore case
    str = str.toLowerCase()
    //cycle through letters
    for (i = 0; i < str.length; i++){
      //cycle through letters a second time
      for (j = i + 1; j < str.length; j++){
        //compare the two cycles
        if(str[i] === str[j]){
          //if there are two of the same letter
          return false
        }
      }
    }
    //else
    return true
  }