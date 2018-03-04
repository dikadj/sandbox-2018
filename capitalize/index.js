// simply run node index.js
function capitalize(str) {
  var eachCap = str.split(" ").map(function(el){return el[0].toUpperCase();});
  var eachWord = str.split(" ").map(function(el){return el.substr(1).toLowerCase();});

  var joinEach = [];

  for(var i=0;i<eachWord.length;i++) {
    joinEach.push(eachCap[i]+eachWord[i]);
  }

  console.log(joinEach.join(" "));
}

capitalize("I'm a little tea pot");
// will be printed as "I'm A Little Tea Pot"
