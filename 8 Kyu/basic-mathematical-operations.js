// The function can do four mathematica opererations
// The function should result of numbers after applying the chosen operation

function basicOp(operation, value1, value2)
{
  switch(operation){
      case '+':
      return value1 + value2;
      case '-':
      return value1 - value2;
      case '*':
      return value1 * value2;
      case '/':
      return value1 / value2;
      default:
      return 0;
  }
}   