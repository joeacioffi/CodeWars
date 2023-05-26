function queueTime(customers, n) {
    //Create array of length representing tills
    //give value of 0 to each till
    const tills = new Array(n).fill(0);
    //go thorugh queue of customer wait times
    for(let waitTime of customers){
    //find till with least wait time on it, add next customer time to it
      const lowestWaitTill = tills.indexOf(Math.min(...tills));
      tills[lowestWaitTill] += waitTime;
      }
    //end result is the till with the heaviest load
      return Math.max(...tills);
  }