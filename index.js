function theBeatlesPlay(musicians, instruments) {
  var players = []
  for (var i = 0; i< musicians.length; i++){
    players.push(musicians[i]+' '+ 'plays' + ' ' +instruments[i])
  }
  return players
}

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i]);
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

