function theBeatlesPlay(musicians, instruments) {
  var emtArr = [];
    for (var i = 0; i < instruments.length; i++) {
      emtArr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return emtArr;
}

function johnLennonFacts (facts) {
  var emtArr = [];
    while (facts.length > 0){
      emtArr.push(facts.shift() + "!!!");
    }
  return emtArr;
}

function iLoveTheBeatles (n) {
  var emtArr = [];
  do {
    emtArr.push('I love the Beatles!')
    n += 1;
  } while (n < 15)

  return emtArr;
}
