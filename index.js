function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0;i < musicians.length;i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++; // this prevents an infinite loop
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var i = 0;
  do {
    newArray[i] = "I love the Beatles!";
    number += 1;
    i += 1;
  }
  while (number < 15);
  return newArray;
}
