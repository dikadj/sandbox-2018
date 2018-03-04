function steamrollArray(arr) {
  // I'm a steamroller, baby

  var arrObj = arr.map(function(n) {
    return typeof n;
  });

  var inclObj = arr[1].toString() === "[object Object]";

  // if object
  if (inclObj) {
    var objIndex = arrObj.indexOf("object");
    var res = arr.toString().split(",").map(function(n) {
      return parseInt(n);
    });
    res[objIndex] = {};
    return res;
  }

  var resSplit = arr.toString().split(",");

  var isString = resSplit[0].match(/\d+/) === null;

  var ifNum = arr.toString().split(",").map(function(n) {
      return parseInt(n);
    });

  // if number
  if (!isString) {
    return ifNum.toString().split(",").filter(function(n) {
      return n !== "NaN";
    }).map(function(n) {
      return parseInt(n);
    });
  }

  // if string
  return resSplit;

}

console.log(steamrollArray([[["a"]], [["b"]]]));
