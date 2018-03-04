function chunkArrayInGroups(arr, size) {
  var result = [];
  var plus = size;
  for (var i=0;i<arr.length;i+=plus) {
    result.push(arr.slice(i,size+i));
  }
  console.log(result);
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 2);
// result: [["a", "b"], ["c", "d"], ["e", "f"], ["g", "h"]]
