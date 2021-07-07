// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatleArray = [];
  for (let i = 0; i < musicians.length; i++) {
    beatleArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatleArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsArray = [];
  while ( i < facts.length ) {
    factsArray.push(`${facts[i]}!!!`);
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return array;
}