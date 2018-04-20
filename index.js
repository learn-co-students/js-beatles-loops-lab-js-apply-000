function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for(var i = 0; i < musicians.length; i++) {
    result[i] = musicians[i] +" plays "+ instruments[i];
  }

  return result;
}

function johnLennonFacts(facts) {
  var i = 0;

  while(facts[i]) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var result = [];
  var i = 0;

  do  {
    result[i] = "I love the Beatles!";
    num++;
    i++;
  } while(num < 15)

  return result;
}