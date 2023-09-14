// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

function checkExam(array1, array2) {
    let points = 0;
      for (let i=0; i<array1.length; i++) {
        if(array1[i] == array2[i]) {
          points += 4;
          } else if (array2[i] === "") {
          points += 0;
          } else {
          points -= 1;
          }
    }
    if (points > 0) {
      return points;
      } else { 
      return 0;
      };
    }