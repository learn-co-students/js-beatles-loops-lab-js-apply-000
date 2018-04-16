function theBeatlesPlay(a1, a2) {
  
  var players = [];
  
  for (var i = 0; i < a1.length; i++) {
    players.push(a1[i] + " plays " + a2[i]);
  }
  return players
}

function johnLennonFacts(a) {
  
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i] + "!!!";
  }
  return a
}

function iLoveTheBeatles(n) {
  
  var BeatleLover = [];
  
  do {
    BeatleLover.push("I love the Beatles!");
    n ++;
  } while (n < 15);
  return BeatleLover;
}
