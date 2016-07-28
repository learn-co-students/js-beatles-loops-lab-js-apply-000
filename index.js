function theBeatlesPlay (musicians, instruments){
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++){
    var instrument = musicians[i] + " plays " + instruments[i];
    whoPlaysWhat.push(instrument);
  }

  return whoPlaysWhat;
}

function johnLennonFacts (facts) {
  var shouted = [];
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i] + "!!!";
    shouted.push(fact);
    i++;
  }

  return shouted;
}

function iLoveTheBeatles (number){
  var reallyLoveBeatles = [];
  var loveBeatles = "I love the Beatles!";
  var i = number;
  do {
    reallyLoveBeatles.push(loveBeatles);
    i--;
  } while (i < 15 && i > -1);

  return reallyLoveBeatles;
}
