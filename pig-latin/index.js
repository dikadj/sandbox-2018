function translatePigLatin(str) {
  var vowels = ["a", "i", "u", "e", "o"];
  function isItVow(letter) {
    for (var i = 0; i < vowels.length; i++) {
      return vowels.includes(letter);
    }
  }
  for (var i = 0; i < vowels.length; i++) {
    if (isItVow(str[0]) && isItVow(str[1]) || isItVow(str[0]) && !isItVow(str[1])) {
      return str + "way";
    } else if (!isItVow(str[0]) && isItVow(str[1])) {
      return str.slice(1, str.length)+str[0]+"ay";
    } else if (!isItVow(str[0]) && !isItVow(str[1])) {
      return str.slice(2, str.length)+str[0]+str[1]+"ay";
    }
  }

}

console.log(translatePigLatin("eight"));
