function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + ' plays ' + instrument);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    var newFact = facts[i] + '!!!';
    newFacts.push(newFact);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles (num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } 
  while (num < 15);
  return arr;
}

