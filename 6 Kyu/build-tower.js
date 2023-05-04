// Build a pyramid shaped tower
// Given a positive integer
// Tower block is represented with "*"

function towerBuilder(nFloors) {
  // Create array for tower
  var tower = [];
  // Loop through number of floors
  for (var i = 0; i < nFloors; i++) {
    // Create spaces on the left hand side
    tower.push(" ".repeat(nFloors - i - 1)
               // Create stars
             + "*".repeat((i * 2)+ 1)
               // Create spaces on right hand side
             + " ".repeat(nFloors - i - 1));
  }
}