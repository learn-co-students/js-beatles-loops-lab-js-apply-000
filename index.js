
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
        allPlayers.push(player + " plays " + instruments[i]);
    }

  return allPlayers;
}


const facts = [
  "foo",
  "bar",
];

function johnLennonFacts() {
    var newFacts = [];
    var i = 0;

    while (i < facts.length) {
        var fact = facts[i];
        newFacts.push(fact + "!!!");
        i++;
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
