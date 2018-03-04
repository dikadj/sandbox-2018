
function rot13(str, rotate) {
  var key = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "!", "?", "."];
  var val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

  // search alphabet <-> number
  function alphaToNumFunc(keys,values,container) {
    for (var i=0;i<keys.length;i++) {
      container[keys[i]] = values[i];
    }
  }

  function numToAlphaFunc(values,keys,container) {
    for (var i=0;i<values.length;i++) {
      container[values[i]] = keys[i];
    }
  }

  // alpha -> number
  var alphaToNum = {};
  alphaToNumFunc(key, val, alphaToNum);

  // number -> alpha
  var numToAlpha = {};
  numToAlphaFunc(val, key, numToAlpha);

  // input value
  var inputVal = str;
  var outputVal = [];
  for (i=0;i<inputVal.length;i++) {
    outputVal.push(alphaToNum[inputVal[i]]);
  }

  var outKeys = Object.keys(outputVal);
  var outValues = Object.values(outputVal);

  var result = "";
  var preconfig = [];
  function dechiper(rotate) {
    // search index of
    for (var i=0;i<outputVal.length;i++) {
      preconfig[i] = outputVal[i];
      if (preconfig[i] >= 0 && preconfig[i] < 26) {
        preconfig[i]-= rotate;
      }
      if (preconfig[i] < 0) {
        preconfig[i]+= 26;
      }
      result+=numToAlpha[preconfig[i]];
    }
    return result;
  }

  // change number to change how many times you want to shift
  return dechiper(rotate);
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!?.", 13));
