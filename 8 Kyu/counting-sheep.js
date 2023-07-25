// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    //Create a counter
    let sheep = 0
    //Loop through each item in the array
    for(let i = 0; i < arrayOfSheep.length; i++){
      //if the value is true
      if(arrayOfSheep[i] == true){
        //add one sheep
        sheep++
      }
    }
    return sheep
  }