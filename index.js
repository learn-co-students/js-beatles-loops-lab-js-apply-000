// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    array.push(musician + " plays " + instrument);
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var exclaimed = [];
  var i = 0;
  
  while (i < facts.length) {
    exclaimed.push(facts[i] + "!!!");
    i++;
  }
  
  return exclaimed;
}

function iLoveTheBeatles(num) {
  var array = [];
  
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return array;
}