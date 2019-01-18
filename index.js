function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + " plays " + instrument);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0
  
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var newArr = [];
  
  do {
    newArr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArr;
}