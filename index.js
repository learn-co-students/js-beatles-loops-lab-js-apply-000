

function theBeatlesPlay(musicians, instruments){
 var theBand = [];
 for (let i = 0; i < musicians.length; i++) {
   theBand.push(musicians[i] + " plays " + instruments[i]);

 }
 return theBand
}

function johnLennonFacts(facts){
var truths = [];
let i = 0
while (i < facts.length) {
  truths.push(facts[i] + "!!!");
  i++;
}
  return truths
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;

  } while (n < 15);
  return love
}
