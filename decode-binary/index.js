
function binaryAgent(str) {
//   var strArr = str.split(" ");
//   var intArr = strArr.map(function(n) {
//     return parseInt(n, 2);
//   });
//   var decodeInt = intArr.map(function(n) {
//     return String.fromCharCode(n);
//   });
//   var decodeStr = decodeInt.join("");
//   return decodeStr;

  // shorter
  return str.split(" ")
            .map(function(n) {
              return parseInt(n, 2);
            })
            .map(function(n) {
              return String.fromCharCode(n);
            })
            .join("");
}

console.log(
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
);
