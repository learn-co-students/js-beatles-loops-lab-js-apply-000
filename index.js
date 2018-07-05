// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  var i
  for(i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts (facts) {
  var x = 0;
  while (x < facts.length) {
    facts[x] += "!!!";
    x++;
  }
  return facts;
}

function iLoveTheBeatles (num) {
  var a = [];
  do {
    a.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return a;
}