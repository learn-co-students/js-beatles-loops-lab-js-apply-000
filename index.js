function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];
  for (var i = 0; i < musicians.length; i++ ) {
      musiciansAndInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansAndInstruments;
}

var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian", "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var withExclamation = [];
  var i = 0;
  while (i < facts.length) {
    withExclamation.push(facts[i] + "!!!");
    i++;
  }
  return withExclamation;
}





function iLoveTheBeatles (number) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    number ++;
  } while (number < 15);
  return love;
}







