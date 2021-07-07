// add solution here
function theBeatlesPlay(players, instruments){
  var allPlayers = [];
  for (var i=0; i < players.length; i++){
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}


function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}


function iLoveTheBeatles(num){
  var love = [];
    do {
      love.push("I love the Beatles!");
      num++;
    } while (num < 15);
  return love;
}
