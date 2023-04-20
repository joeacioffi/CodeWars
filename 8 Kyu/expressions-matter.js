// Numbers are always positive
// Numbers are in the range of 1 and 10
// You can use the same operation more than once
// Repetition in numbers can happen
// Operands can't be swapped

function expressionMatter(a, b, c) {
    // Create an array to store results
    let arr = []
    // Do the math and store results in array
    arr.push(a * (b + c))
    arr.push(a * b * c)
    arr.push(a + b * c)
    arr.push((a + b) * c)
    arr.push(a + b + c)
    // Return the largest number possible
    return Math.max(...arr)
  }