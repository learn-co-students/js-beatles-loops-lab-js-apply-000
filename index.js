// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (var i = 0; i < musicians.length; i += 1) {
    result.push(musicians[i] + ' plays ' + instruments[i])
  }
  
  return result;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;
  while (i < facts.length) {
    result.push(facts[i] + '!!!');
    
    i += 1;
  }
  
  return result;
}

function iLoveTheBeatles(n) {
  var result = [];
  if (n < 15) {

  var i = 0;
  do {
    i += 1
    result.push("I love the Beatles!");
  }
    while (i <= n);
  } else {
    return ["I love the Beatles!"]
  }
  return result
}