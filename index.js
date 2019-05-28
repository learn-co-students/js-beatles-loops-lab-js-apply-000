function theBeatlesPlay(players, instruments) { // create function with 2 parameters.
  var allPlayers = []; //create variable with empty array
  for (var i=0; i < players.length; i++) { //iterates over array starting from 0 (the first one)                                      //([initialization]; [condition]; [iteration]) {[loopBody];
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
    return allPlayers;
}

function johnLennonFacts(facts){
  var lennonArray = [];
  var i = 0;
  
  while (i < facts.length) {
    lennonArray.push(facts[i] + "!!!");
    i++;
  }
  return lennonArray;
}

function iLoveTheBeatles(number){
  var loveBeatArray = [];
  var i = 0;

  do {
    loveBeatArray.push("I love the Beatles!");
    i++;
  } while (i <= number && number < 15);

  return loveBeatArray;
}
