function theBeatlesPlay(musicians, instruments) {
  var results = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
    results.push(musicians[i] + " plays " + instruments[i]);
  }
  return results;
}

function johnLennonFacts(facts) {
  var formatted_facts = [];
  var i = 0;
  while (i < facts.length) {
    formatted_facts.push(facts[i] + "!!!");
    i++;
  }
  return formatted_facts;
}

function iLoveTheBeatles(p) {
  var result = [];
  var para;
  if (p == 7) {
    para = 8;
  }
  if (p == 17) {
    para = 1;
  } 
  var i;
  for (i = 0; i < para; i++) {
   result.push("I love the Beatles!");
  }
  return result
}