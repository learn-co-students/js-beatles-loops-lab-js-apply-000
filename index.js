function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for(var i = 0; i < musicians.length; i++) {
    var artist = musicians[i];
    var instrument = instruments[i];
    arr.push(artist + ' plays ' + instrument);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  
  while (i < facts.length) {
    arr.push(facts[i] + '!!!');
    i++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var arr = [];
  
  if (number < 15) {
    var i = 0;
    do {
     arr.push('I love the Beatles!');
      i++;
    }
    while (i <= number);
  } else {
    arr.push('I love the Beatles!')
  }
  return arr;
}