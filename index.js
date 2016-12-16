function theBeatlesPlay(musicians, instruments) {
    var playlist = [];
  for (var i = 0; i < musicians.length; i++) {
    playlist.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return playlist
}

function johnLennonFacts(facts) {
  var i = 0
  var JohnFacts = []
  while (i < facts.length) {
    JohnFacts.push(facts[i] + "!!!")
    i ++
  }
  return JohnFacts
}

function iLoveTheBeatles(num) {
  var FansLove = [];
  do {
    FansLove.push("I love the Beatles!")
    num ++
  } while (num < 15);
  return FansLove;
}
