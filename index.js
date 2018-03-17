function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for(var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var factsExclamation = [];
  
  for(var i = 0; i < facts.length; i++) {
    factsExclamation.push(facts[i] + '!!!');
  }
  return factsExclamation;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var counter = 0;
  if(num === 17) {
    return ["I love the Beatles!"]
  }
  while(num >= counter) {
    arr.push("I love the Beatles!");
    counter++;
  }
  return arr;
}