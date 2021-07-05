// add solution here

  function theBeatlesPlay(musicians, instruments) {
  var empty = [];

  for(var i = 0; i < musicians.length; i++) {

  empty.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return empty
    }



function johnLennonFacts(facts) {
var counter = 0;
  while ( counter < facts.length) {
    facts[counter]+='!!!';
    counter++;
}
return facts
}


function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
     emptyArray.push('I love the Beatles!');
     number++;
  }
  while (number < 15);

  return emptyArray
}
