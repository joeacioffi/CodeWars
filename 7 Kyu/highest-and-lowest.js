// Find highest and lowest values in array
// All numbers are valid
// There will always be at least one number in an input string
// Output must be two numbers separated by a single space, with highest number being first

const highAndLow = numbers => {
    //Separate numbers into individual strings
    numbers = numbers.split(" ");
    //Use spread operator to loop through numbers and find the max and min
    return Math.max(...numbers) + " " + Math.min(...numbers);
  }