// add solution here
function theBeatlesPlay (players, instruments){
  var beatPlay = [];
  for (var i = 0; i < players.length; i++){
    beatPlay.push(players[i] + " plays " + instruments[i]);
  }
  return beatPlay;
}

function johnLennonFacts(facts){
  var factsLoop = [];
  var i = 0;
  while (i < facts.length){
    factsLoop.push(facts[i] + "!!!");
    i++
  }

  return factsLoop;

}

function iLoveTheBeatles(num){
  var who = [];

  do {
    who.push("I love the Beatles!");
    num++
  } while (num < 15);

  return who;
}
