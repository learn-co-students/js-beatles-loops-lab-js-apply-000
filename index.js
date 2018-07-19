// add solution here
function theBeatlesPlay(musicians, instruments) {
  var list = [];
    for (let i =0 ; i< musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}

function johnLennonFacts(facts) {
  var newFacts = facts.map(function(fact){
    return fact+'!!!'
  })
  return newFacts;
}

function iLoveTheBeatles(number) {
  var repeat = [];
  let i = number;
  do {
    repeat.push('I love the Beatles!');
    i++;
  } while (i < 15)
  return repeat;
}
