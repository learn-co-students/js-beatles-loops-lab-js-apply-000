function theBeatlesPlay(musicians, instruments) {
  var groupmusicians = [];
  for (var x = 0; x < musicians.length; x++) {
    groupmusicians.push(musicians[x] + " plays " + instruments[x]);
  }
return groupmusicians;
}

function johnLennonFacts(facts){
  const givenFacts =[]

  var k = 0
  while(k < facts.length) {
    givenFacts.push(`${facts[k]}!!!`)
    k++
  }
    return givenFacts
}

function iLoveTheBeatles(number) {
  const array = [];
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
  return array
}
