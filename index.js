function theBeatlesPlay (musicians, instruments) {

  var whoPlays = [];

    for (var i = 0; i < musicians.length; i++) {
      var player = musicians[i] + " plays " + instruments[i];
      whoPlays.push(player)
    }

  return whoPlays
}

function johnLennonFacts (facts) {

  var funFacts = [];

  var i = 0;

  while (i < facts.length) {
    var exclaim = facts[i] + "!!!"
    funFacts.push(exclaim)
    i ++;
  }

  return funFacts
}

function iLoveTheBeatles (num) {

  var Beatles = [];

  var i = num;

  do {
    i++;
    Beatles.push("I love the Beatles!")
  } while (i < 15)

  return Beatles
}
