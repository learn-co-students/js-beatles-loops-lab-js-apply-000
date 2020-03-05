// add solution here
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}


function johnLennonFacts(facts) {
    var results = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
    var newFacts = [];
    var count = 0;
    while (count < facts.length) {
        newFacts.push(facts[count] +"!!!");
        count++;
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


