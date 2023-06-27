//Is the string uppercase? If it is, return true

String.prototype.isUpperCase = function() {
    if(this == this.toUpperCase()){
      return true
    } else { 
    return false
    }
  }