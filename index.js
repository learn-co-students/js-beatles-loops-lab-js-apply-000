// add solution here

function theBeatlesPlay(musicians, instruments) {
  var Variable = []; 
  for (var i = 0; i < musicians.length; i++ ) {
    Variable.push(musicians[i] + " plays " + instruments[i]);
    }
  return Variable
}


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
function johnLennonFacts(facts) {
  var i = 0;
  var Output = [];
  while (i < facts.length) {
    Output.push(facts[i] + "!!!")
    i++;
  }
  return Output
}

function iLoveTheBeatles(Number) {
  var Variable = [];
  do {
    Variable.push("I love the Beatles!");
    Number++;
  } while (Number < 15);
  return Variable
}