 const theBeatlesPlay = (musicians, instruments) => {
   var results = [];

   musicians.forEach( (musician, i) => {
     results.push(`${musician} plays ${instruments[i]}`)
   });

   return results;
 };

const johnLennonFacts = strings => {
  strings.forEach ( (string, i) => {
    strings[i] += "!!!";
  });

  return strings;
}

const iLoveTheBeatles = int => {
  var result = ["I love the Beatles!"];

  for ( var i = 0; i < int && int < 15; i ++) {
    result.push("I love the Beatles!");
  }

  return result;
}
