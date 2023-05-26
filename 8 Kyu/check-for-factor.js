//Check for a factor
//If you can divide the base by the factor and get 0, it is a factor
//Return true if factor
//Else return false
const checkForFactor = (base, factor) => {
    return (base % factor === 0) ? true : false
  }