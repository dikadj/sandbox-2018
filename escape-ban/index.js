function convertHTML(str) {
  var res = str.split("");
  for (var i = 0; i < res.length; i++) {
    switch(res[i]) {

        case "&":
          res[i] = "&amp;";
          break;
        case "<":
          res[i] = "&lt;";
          break;
        case ">":
          res[i] = "&gt;";
          break;
        case '"':
          res[i] = "&quot;";
          break;
        case "'":
          res[i] = "&apos;";
          break;

    }
  }
  console.log(res.join(""));
}

convertHTML('Dolce & Gabbana');
