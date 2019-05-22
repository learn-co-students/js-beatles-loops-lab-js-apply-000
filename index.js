function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i=0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
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