// add solution here

function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (var x = 0; x < musicians.length; x++) {
        output.push(musicians[x] + " plays " + instruments[x]);
      }
  return output;
}

function johnLennonFacts(facts) {
  var output = [];
  var x = 0;
  while (x < facts.length) {
    output.push(facts[x] + "!!!");
    x++;
  }
  return output;
}

function iLoveTheBeatles(num) {
  var output = [];
  do {
    output.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return output;
}
