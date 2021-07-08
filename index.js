// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  for(var i = 0; i < musicians.length; i++) {
    sentences.push(musicians[i] + ` plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var i = 0;
  var updatedFacts = [];
  while(i < facts.length) {
    updatedFacts.push(facts[i] + "!!!");
    i++;
  }
  return updatedFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++
  } while(number < 15)
  return array;
}

