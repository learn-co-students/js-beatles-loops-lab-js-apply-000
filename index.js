function theBeatlesPlay(musicians, instruments) {
    var result = [];

    for (var i = 0; i < musicians.length; i++) {
      var musician = musicians[i];
        for (var j = 0; j < instruments.length; j++) {
          var instrument = instruments[i];
          if (i === j) {
          result.push(musician + " plays " + instrument);
          }
        }
      }
    return result;
  }

function johnLennonFacts(facts) {
  var i = 0;
  var result = [];

  while (facts[i]) {
  result.push(facts[i] + "!!!");
  i++;
}
  return result;
}


function iLoveTheBeatles(number) {
  var result = [];
  var i = number;

  do {
    result.push("I love the Beatles!");
    i++;
  }  while( i < 15);
  return result;
}
