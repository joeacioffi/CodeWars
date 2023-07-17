//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    // Use RegEx to replace the characters in one call
    return string.replace(/a|e|i|o|u/gi, '');
  }