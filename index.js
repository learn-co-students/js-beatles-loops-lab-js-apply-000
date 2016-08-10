function theBeatlesPlay(musicians, instruments) {
  var play = [];

  for (var i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i]);
  }

  return play;
}

function johnLennonFacts(facts) {
  var i = 0;

  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(n) {
  var says = [];

  var number = n;
  while (number !== 15){
    if (number < 15) {
    says.push("I love the Beatles!");
    number++;
  } else if (number > 15) {
    says.push("I love the Beatles!");
    break;
    }
  }

  return says;
}
