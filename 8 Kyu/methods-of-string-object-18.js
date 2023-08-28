function splitAndMerge(string,separator){
    let words = string;
    return words.split(" ").map(index => index.split("").join(separator)).join(" ");
   }