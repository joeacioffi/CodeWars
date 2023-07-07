//Find the number that would be in the middle of a group of 3 if in numerical order
//Numbers may not be in numerical order
//Return the index of the number in its original grouping

function gimme (triplet) {
    //Make new bucket for array
  var newArray = triplet.slice(0);
    //Sort in ascending order
    newArray.sort(function(a,b){
      return a-b
    });
    // Return index number
    return triplet.indexOf(newArray[1]);
  }