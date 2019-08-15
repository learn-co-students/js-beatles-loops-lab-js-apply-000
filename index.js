// add solution here
function theBeatlesPlay(musicians, instruments) {
  var pair = [];
  var index;
  for (index = 0; index < musicians.length; index++) { 
    pair.push(`${musicians[index]} plays ${instruments[index]}`); 
  } 
  return pair;
}

function johnLennonFacts(facts) {
  var bigFacts = [];
  var index = 0;
  while (index < facts.length) {
    bigFacts.push(`${facts[index]}!!!`);
    index++;
  }
  return bigFacts;
}

function iLoveTheBeatles(number) {
  var loveBeatles = [];
  do {
  loveBeatles.push('I love the Beatles!');
  number++;
  }
  while (number < 15);
  return loveBeatles;
}