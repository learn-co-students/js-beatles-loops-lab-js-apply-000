function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for(var i = 0; i < musicians.length; i++) {
    facts.push(musicians[i] + " plays "  + instruments[i]);
  }
  return facts;
}

function johnLennonFacts(facts) {
  var facts_johnLennon = [];
  var index = 0;
  while (index < facts.length) {
    facts_johnLennon.push(facts[index] + "!!!");
    index++;
  }
  return facts_johnLennon;
}

function iLoveTheBeatles(num) {
  var expression = [];
  do {
    expression.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return expression;
}
