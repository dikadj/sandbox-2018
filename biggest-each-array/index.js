function biggestEachArray(arr) {
  var result = arr.map(function(el){return el.sort(function(a,b){return b-a;})[0];});
  console.log(result);
}

biggestEachArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
