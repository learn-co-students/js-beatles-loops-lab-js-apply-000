// add solution here
function theBeatlesPlay(musicians, instruments) {
  var response = [];
  for (var i = 0; i < musicians.length; i++) {
    response.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return response;
}

function johnLennonFacts(facts) {
  let response = [], i = 0;
  while (i < facts.length) {
    response.push(facts[i] + "!!!");
    i++
  }
  return response;
}

function iLoveTheBeatles(num) {
  var response = [];
  do {
    response.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return response;
}
