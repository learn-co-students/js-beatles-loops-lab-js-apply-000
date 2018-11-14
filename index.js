// add solution here
function theBeatlesPlay(musicians, instruments){
  var allPlayers=[];
  for (var i = 0; i < musicians.length; i++) { 
    allPlayers.push(musicians[i]+" plays "+instruments[i])
  }
  return allPlayers;
}

function johnLennonFacts(facts){
  var newFacts=[];
  for (var i = 0; i < facts.length; i++) { 
    newFacts.push(facts[i]+"!!!")
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}
