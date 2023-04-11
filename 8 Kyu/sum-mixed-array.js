// Convert all elements in array to a number
// Elements are both strings and numbers

function sumMix(x){
    // Parse through array, convert strings into numbers, add them together
    return x.reduce((a,b) => Number(a) + Number(b),0)
    }