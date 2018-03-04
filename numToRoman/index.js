
function convertToRoman(num) {
  var chars = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"];
  var roman = "";
  var i = 3;
  var digitsLength = String(+num).split("");
  while (i--) {
    roman = (chars[+digitsLength.pop() + (i * 10)] || "") + roman;
  }
  console.log(Array(+digitsLength.join("") + 1).join("M") + roman);
}

convertToRoman(45);
