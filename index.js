// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;
  while(i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(x) {
  var result = [];
  do{
    result.push("I love the Beatles!");
    x++;
  } while(x < 15)
  return result;
}