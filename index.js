// add solution here
function theBeatlesPlay(musicians, instruments) {
  let sentences = [];
  
  for (let i = 0; i < musicians.length; i++) {
    sentences.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return sentences;
}

function johnLennonFacts(facts) {
  let factsExclamation = [];
  let i = 0;
  
  while (i < facts.length) {
    factsExclamation.push(facts[i] + "!!!");
    i++;
  }
  
  return factsExclamation;
}

function iLoveTheBeatles(num) {
  let array = [];
  
  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  
  return array;
}