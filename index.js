// add solution here
function theBeatlesPlay(musicians, instruments){
var list = [];
  for (let i = 0; i < musicians.length; i++){
    list.push(musicians[i]+ " plays "+instruments[i])
  }
  return list
}

function johnLennonFacts(n){
let facts = n;
let newFacts = [];
  let i = 0;
  while (i < facts.length){
    newFacts.push(facts[i]+"!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(num){
let love = [];
  do {
    love.push("I love the Beatles!");
    num++
  }
  while (num< 15);
return love
}
