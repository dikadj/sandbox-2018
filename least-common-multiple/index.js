function smallestCommons(arr) {
  var min = arr.sort()[0],
      max = arr.sort()[1];

  function range(min, max) {
      var arr = [];
      for (var i = min; i <= max; i++) {
          arr.push(i);
      }
      return arr;
  }

  function gcd(a, b) {
      return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
      return (a * b) / gcd(a, b);
  }

  var multiple = min;
  range(min, max).forEach(function(n) {
      multiple = lcm(multiple, n);
  });

  return multiple;
}


console.log(smallestCommons([1,5]));
