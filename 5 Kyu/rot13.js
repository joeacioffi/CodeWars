function rot13(message){
    //establish alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //establish cipher
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    //replace based off of indexes
    return message.replace(/[a-z]/gi, letter => cipher[alphabet.indexOf(letter)])
  }