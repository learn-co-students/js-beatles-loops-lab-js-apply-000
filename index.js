function theBeatlesPlay(musicians,instruments){
  var finalSentence = [];
  for (var i = 0; i<musicians.length; i++) {
    finalSentence.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return finalSentence;
}

function johnLennonFacts(facts){
  var bigFacts = [];
  var i=0;
  while(i<facts.length){
    bigFacts.push(facts[i]+"!!!");
    i++;
  }
  return bigFacts;
}
function iLoveTheBeatles(num){
  var love = [];
  do{
    love.push("I love the Beatles!");
    num++;
    }
    while(num<15);
    return love;
}