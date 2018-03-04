function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var remove = [];
  var bigger;
  var smaller;
  var iterator;
  // which one is longer
  if (arr1.length>=arr2.length) {
    iterator = arr1.length;
    bigger = arr1;
    smaller = arr2;
  } else {
    iterator = arr2.length;
    bigger = arr2;
    smaller = arr1;
  }
  // what to remove
  for (var i=0;i<iterator;i++) {
    if (bigger.includes(smaller[i])) {
      remove.push(smaller[i]);
    }
  }
  // remove bigger
  for (i=0;i<remove.length;i++) {
    bigger.splice(bigger.indexOf(remove[i]),1);
  }
  //remove smaller
  for (i=0;i<remove.length;i++) {
    smaller.splice(smaller.indexOf(remove[i]),1);
  }

  console.log(bigger.concat(smaller));
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
