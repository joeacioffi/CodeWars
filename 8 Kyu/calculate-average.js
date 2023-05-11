// Find average of numbers in a given list

let findAverage = (array) => {
    // If there are no numbers in the array, return 0
    // Run reduce function to loop through the arrays
    // Add numbers together
    // Divide by number of numbers in the array
    return array.length === 0 ? 0 : array.reduce((a,b) => a+b, 0) / array.length
    }