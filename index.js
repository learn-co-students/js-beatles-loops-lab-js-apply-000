function theBeatlesPlay (musicians,instruments) {
  var whoPlaysWhat = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];

    whoPlaysWhat.push(musician + " plays " + instrument);
  }

  return whoPlaysWhat;
}

function johnLennonFacts (facts) {
  var index = 0;
  var exclamatedFacts = [];

  while (index < facts.length) {
    var fact = facts[index];
    exclamatedFacts.push(fact + '!!!');
    index++;
  }

  return exclamatedFacts;
}

function iLoveTheBeatles (num) {
  var loveArray = [];

  do {
    loveArray.push('I love the Beatles!');
    num += 1;
  } while (num < 15)

  return loveArray;
}
