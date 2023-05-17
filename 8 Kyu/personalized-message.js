// Create a function that gives a personalized greeting with the parameters name and owner
// If name = owner, return Hello boss
// Otherwise return Hello guest

function greet (name, owner) {
    if(name === owner){
      return 'Hello boss'
    }else{
      return 'Hello guest'
    }
  }