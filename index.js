function theBeatlesPlay(musicians, instruments) {
  var final = [];
  for (var i = 0; i < musicians.length; i++) {
    final.push(musicians[i] + " plays " + instruments[i])
  }
  return final
}

function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!")
    i++;
  }
  return newArray
}


function iLoveTheBeatles(number) {
  var output = [];
  do {
    output.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return output;
}
