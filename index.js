function theBeatlesPlay(musicians, instruments) {
  var emptyArr = [];
  for (let i = 0; i < 4; i++) {
    emptyArr.push(musicians[i] + " plays " + instruments[i]);
  } return emptyArr;
}

function johnLennonFacts(facts) {
  var factsArr = [];
  var i = 0; 
  while (i < facts.length) {
    factsArr.push(facts[i] + "!!!");
    i++;
  } return factsArr;
}

function iLoveTheBeatles(n) {
  var numArr = [];
  do {
    numArr.push("I love the Beatles!");
    n++; 
  } while (n < 15);
  return numArr;
}
