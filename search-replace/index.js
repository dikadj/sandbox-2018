function capitalize(str) {
  var eachCap = str.split(" ").map(function(el){return el[0].toUpperCase();});
  var eachWord = str.split(" ").map(function(el){return el.substr(1).toLowerCase();});

  var joinEach = [];

  for(var i=0;i<eachWord.length;i++) {
    joinEach.push(eachCap[i]+eachWord[i]);
  }

  return joinEach.join(" ");
}

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    return str.replace(before, capitalize(after));
  }
  console.log(str.replace(before, after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
