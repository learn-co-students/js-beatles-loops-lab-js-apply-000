function theBeatlesPlay(players, instruments) {
     var allPlayers = [];
     for (var i=0; i < players.length; i++) {
         allPlayers.push(players[i] + " plays " + instruments[i]);
     }
     return allPlayers;
 }
 
 function johnLennonFacts(facts){
  const givenFacts = []

  var k = 0
  while(k < facts.length) {
    givenFacts.push(`${facts[k]}!!!`)
    k++
  }
    return givenFacts
}
 
 function iLoveTheBeatles(num) {
     var love = [];
     do {
         love.push("I love the Beatles!");
         num++;
     } while (num < 15);    
     return love;
 }