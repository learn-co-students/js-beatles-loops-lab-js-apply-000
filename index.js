function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays;
}
function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (facts[i]) {
    newFacts.push(`${facts[i]}!!!`);
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(aNumber){
  var loveArr = [];
  if (aNumber >= 15) {
    loveArr.push('I love the Beatles!');
  }
  else if (aNumber < 15) {
    var nuNumber = aNumber;
    while (nuNumber < 15) {
      loveArr.push('I love the Beatles!');
      nuNumber++;
    }
  }
  return loveArr;
}
