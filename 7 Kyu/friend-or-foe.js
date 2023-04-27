// Filter a list of strings and return a list with only friends' names
// Friends only have 4 letters in their names
// Assume all strings are names

function friend(friends){
    // Filter friends if word length == 4
    return friends.filter(friend => friend.length == 4);
  }