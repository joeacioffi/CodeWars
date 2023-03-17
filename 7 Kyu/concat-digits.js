const squareDigits = num =>
 parseInt(String(num).split('').map(i =>
parseInt(i)**2).reduce((a, i) => a + String(i)))