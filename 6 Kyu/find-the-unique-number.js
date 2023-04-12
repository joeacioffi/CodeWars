// Array contains solely numbers
// Array contains at least 3 numbers
// Arrays can be huge

function findUniq(arr) {
    // Run for each item in the array
    // Check if the first item in array is the same as the next
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item))
  }