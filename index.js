function theBeatlesPlay(musicians, instruments) {
  var band = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
      
    band.push(musician + ' plays ' + instrument);
  }
  
  return band;
}

function johnLennonFacts(facts) {
  var exclaimedFacts = [];
  var i = 0;
  
  while (i < facts.length) {
    var fact = facts[i];
    
    exclaimedFacts.push(fact + '!!!');
    i++;
  }
  
  return exclaimedFacts;
}

function iLoveTheBeatles(num) {
  var makeLove = [];
  
  var i = 0;
  
  do {
    makeLove.push('I love the Beatles!');
    i++;
    
  }
  
  while (i < 15 - num);
  
  return makeLove;
}