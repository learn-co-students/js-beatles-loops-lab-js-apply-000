// add solution here
function theBeatlesPlay(musicians, instruments) {
  var final = [];
  for(var i = 0; i < musicians.length; i++) {
    final.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return final;
}

function johnLennonFacts(facts) {
  var i = 0;
  var final = [];
  while(i < facts.length) {
    final.push(facts[i] + '!!!');
    i++;
  }
  return final;
}

function iLoveTheBeatles(num) {
  var final = [];
  do {
    final.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return final;
}