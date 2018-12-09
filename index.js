function theBeatlesPlay(players, instruments) {
  var allThePlayers = [];
 for (var i=0; i < players.length; i++) {
   allThePlayers.push(players[i] + " plays " + instruments[i]);
 }
 return allThePlayers;
}

function johnLennonFacts(facts) {
  var results = [];
  var cont = 0;
  while (cont < facts.length) {
    results.push(facts[cont] + "!!!");
    cont++;
      }
      return results;
}

function iLoveTheBeatles(number) {
var array = [];
do {array.push("I love the Beatles!");
number++;}
while (number < 15);
return array;
}