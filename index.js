// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i=0; i<musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return myArray;
}
