function sumOddFibs(num) {
  var val1 = 0;
  var val2 = 1;
  var val3 = val1+val2;

  var fibArr = [];
  fibArr.push(val1, val2, val3);

  while (val2 <= num) {
    val1 = val2+val3;
    fibArr.push(val1);
    val2 = val3+val1;
    fibArr.push(val2);
    val3 = val1+val2;
    fibArr.push(val3);
  }

  return fibArr // this is the fibonacci array
				.filter(function(n) {
        	return n <= num && n%2 !== 0 || n === 0;
				}) // filter last value <= num && odd || 0
				.reduce(function(a, b) {
					return a + b;
				}); // sum all values in the current array
}

console.log(sumOddFibs(75025)); // return: 135721
