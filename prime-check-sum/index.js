function checkPrime(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (var i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}

function sumPrimes(num) {
  var primeArr = [];
  for (var i = 0; i <= num; i++) {
    primeArr.push(i);
  }
  return primeArr
          .filter(checkPrime)
          .reduce(function(a, b) {
            return a+b;
          });
}

console.log(sumPrimes(977));
