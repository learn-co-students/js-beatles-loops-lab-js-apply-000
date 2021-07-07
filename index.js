function theBeatlesPlay(musician, instrument){
  let i = []; for(let j = 0; j < musician.length; j++){
  i.push(musician[j] + " plays " + instrument[j])
  } return i
}

function johnLennonFacts(){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
let exclamationFacts = [];
let a = 0;
while(a < facts.length)(exclamationFacts.push(facts[a] + "!!!")); return exclamationFacts
}

function iLoveTheBeatles(number){
  let num = [];
  do {num.push("I love the Beatles!")}
  while(number < 15);
  return num
}