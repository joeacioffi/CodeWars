// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// \d indicates that they are digits between 0-9.
//{#} quantifiers indicate how many numbers can be in the string
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }