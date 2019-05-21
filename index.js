// add solution here
function theBeatlesPlay(musicians, instruments) {
  var  BeatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    BeatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return BeatlesArray;
}

function johnLennonFacts(facts) {
  var FactsArray = [];
  var i = 0;
  while(i < facts.length) {
    FactsArray.push(facts[i] + "!!!");
    i++;
  }
  return FactsArray;
}

function iLoveTheBeatles(n) {
  var LoveArray = [];
  do {
    LoveArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return LoveArray;
}