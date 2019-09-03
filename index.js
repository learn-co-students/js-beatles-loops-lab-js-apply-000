// add solution here
function theBeatlesPlay(players, instruments) {
    var theBand= [];
    for (var i=0; i < players.length; i++) {
       theBand.push(players[i] + " plays " + instruments[i]);
    }
    return theBand;
    
}



function johnLennonFacts(fact) {
  var i = 0
  while (i < fact.length) {
    fact[i] += '!!!';
    i++;
  }
  return fact;
}
 


function iLoveTheBeatles(num) {
    var emptyArray = [];
    do {
        emptyArray.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return emptyArray;
}

  




