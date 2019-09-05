function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}
function johnLennonFacts(array) {
   var i = 0;
   while (i < array.length) {
    array[i] = array[i] + "!!!";
     i++;
   }
   return array;
}
function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}