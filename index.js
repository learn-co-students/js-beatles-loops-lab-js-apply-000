function theBeatlesPlay(musicians, instruments){
var plays = [];
for (var i = 0; i < musicians.length; i++){
  plays[i] = musicians[i] + " plays " + instruments[i];
}
  return plays;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(number){
  var love = [];
while(number < 15){
  love.push("I love the Beatles!");
  number++;
}
if(love.length===0){
  love.push("I love the Beatles!");
}
return love;
}
