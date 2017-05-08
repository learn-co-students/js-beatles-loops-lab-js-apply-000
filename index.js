function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + "plays" + instruments[i]);
}
return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
}
while (number < 15);
return array;
}
