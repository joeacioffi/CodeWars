function howMuchILoveYou(nbPetals) {
    // Number is always greater than 0.
    // Only 6 options, but number of petals can be higher than 6.
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  for(let i = 0; i <= nbPetals; i++){
    arr.push(arr[i]);
  }
  return arr[nbPetals - 1]
}