//You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

function areaCode(text) {
    return text.match(/\((\d{3})\)/)[1];
  }