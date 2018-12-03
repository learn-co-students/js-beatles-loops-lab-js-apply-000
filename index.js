// add solution here

function theBeatlesPlay(musicians, instruments){
var allPlay = [];
for (let i = 0; i < musicians.length; i++){
allPlay.push(musicians[i] +" plays " + instruments[i])
}
return allPlay
}

function johnLennonFacts(n){
let facts = n
let newFacts = []
let i = 0;
  while (i < facts.length){
  newFacts.push(facts[i] + "!!!")
  i++;
}
  return newFacts
}

function iLoveTheBeatles (number){
  let love = [];
  do {
    love.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return love
}
