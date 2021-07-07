// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesList = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesList.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesList;
}

function johnLennonFacts(facts) {
  var factList = [];
  var i = 0;
  while (i < facts.length) {
    factList.push(facts[i] + "!!!")
    i++
  }
  return factList;
}

function iLoveTheBeatles(n) {
  var sentence = [];
  do {
  sentence.push("I love the Beatles!");
  n++
  } while (n < 15);
  return sentence;
}