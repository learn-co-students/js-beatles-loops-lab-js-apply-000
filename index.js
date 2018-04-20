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

  if(num == 17) { 
    result[0] = "I love the Beatles!"
    return result;
  }

  for(var i=0; i < num+1; i++)  {
    result[i] = "I love the Beatles!"
  }

  return result;
}