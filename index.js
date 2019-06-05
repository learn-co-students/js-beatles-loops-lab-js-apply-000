
function theBeatlesPlay(musicians, instruments) {
  var emptyArr = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + ' plays ' + instruments[i]);
}
  return emptyArr;
}

function johnLennonFacts (facts) {
  var emptyArr2 = [];
  var i = 0;
  while (i < facts.length ) {
    emptyArr2.push(facts[i] + "!!!");
    i++;
  }
  return emptyArr2;
}

function iLoveTheBeatles(number) {
  var emptyArr3 = [];
  do { emptyArr3.push("I love the Beatles!");
  number++;
  } while (number < 15);
  
  return emptyArr3;
}