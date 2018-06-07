function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsExclamation = [];
  while (i < facts.length) {
    factsExclamation[i] = facts[i] + "!!!";
    i++;
  }
  return factsExclamation;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
return array;
}