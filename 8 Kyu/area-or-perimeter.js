// assume all values are positive integers
// assume length = width is a square
// otherwise it is a rectangle
// square area = l x w
// rectangle perimeter = 2*(l + w)

const areaOrPerimeter = function(l , w) {
    // if the length and width are equal, it is a square
    if(l == w){
      // return the area of a square
      return l * w
      // otherwise, it is a rectangle. return the perimeter
    } else {
        return (l + w) * 2
    }
  };