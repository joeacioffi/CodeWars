//Correct the following errors in a string
//Only have to handle a handful of mistakes

function correct(string)
{
  //Define corrections
	const corrections = {
    "5": "S",
    "0": "O",
    "1": "I"
  }
  //Split string of characters
  //Check if the current char is in the corrections object
  //Replace the char if it is
  //Join the array back to a string
  return (string.split('').map((char) => corrections.hasOwnProperty(char) ? corrections[char] : char).join(''))
  }