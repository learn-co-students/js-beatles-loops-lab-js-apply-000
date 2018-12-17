function theBeatlesPlay(musicians, instruments) {
  var results = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
    results.push(musicians[i] + " plays " + instruments[i]);
  }
  return results;
}

function johnLennonFacts(facts) {
  formatted_facts = [];
  var i;
  while (i < facts.length) {
    formatted_facts.push(facts[i] + "!!!");
  }
  return formatted_facts;
}