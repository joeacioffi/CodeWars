//Function should return a number

function finalGrade (exam, projects) {
    //Grade of 100 if the exam is more than a 90 OR number of projects completed is more than 10
    if(exam > 90 || projects > 10){
    return 100
      }//Grade of 90 if the exam is more than 75 AND number of projects is minimum 5
    else if(exam > 75 && projects >= 5){
        return 90
        }//Grade of 75 if the exam is more than 50 AND number of projects is minimum 2
    else if(exam > 50 && projects >= 2){
          return 75
        }//All other cases 0
    else{
          return 0
        }
      }