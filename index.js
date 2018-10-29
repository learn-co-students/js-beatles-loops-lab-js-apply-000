// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newStrings = [];

  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var str = `${musician} plays ${instrument}`;
    newStrings.push(str);
  }
  return newStrings;
}

function johnLennonFacts(facts) {
  var newFacts = [];

  var i = 0;
  while(i < facts.length) {
    var fact = facts[i];
    newFacts.push(`${fact}!!!`)
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var arr = [];

  do {
    number++;
    arr.push("I love the Beatles!");
  } while (number < 15);
  return arr
}
