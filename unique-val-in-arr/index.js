function uniqueInArr(arr1) {
  var res = [];
  for (var i = 0; i < arguments.length; i++) {
    res = res.concat(arguments[i]);
  }
  console.log(
		res.filter(function(val, index, self) {
	    return self.indexOf(val) === index;
	  })
	);
}

uniqueInArr([1, 3, 2], [5, 2, 1, 4], [2, 1]);
