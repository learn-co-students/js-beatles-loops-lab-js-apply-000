// add solution here
function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i=0; i < players.length; i++) {
    allPlayers.push(players[i] 
    + " plays " 
    + instruments[i]);
  }
  return allPlayers
}

var facts = ["He was the last Beatle to learn to drive","He was never a vegitarian","He was a choir boy and boy scout","He hated the sound of his own voice","While on tour, he enjoyed playing Monopoly","Harmonica was the first instrument Lennon learned to play"]

function johnLennonFacts (facts) {
  var i = 0 
  while (i<facts.length){
  facts[i] += "!!!";
    i++;
  }
  return facts;
}


function iLoveTheBeatles (num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return love;
}