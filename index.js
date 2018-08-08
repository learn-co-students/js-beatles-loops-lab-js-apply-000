function theBeatlesPlay(musicians, instruments) {
  var list = Array();
  
  for(var i = 0; i < musicians.length; i++) {
    // list.push(musicians[i] + " plays " + instruments[i]);
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return list;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(number) {
  var list = [];
  
  var i = number;
  do {
    list.push("I love the Beatles!");
    i++;
  }
  while(i < 15);
  
  return list;
}