function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n = n + 1;
  } while(n > 0 && n < 15)
  return arr;
}