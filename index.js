function theBeatlesPlay(musicians, instruments) {
  var sentences=[];
  for(var i=0;i<musicians.length;i++) {
    sentences[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var i=0;
  while (i<facts.length) {
    facts[i] += "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i) {
  var array=[];
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i<15);
  return array;
}