// add solution here

function theBeatlesPlay(musicians, instruments) {
  var music = [];
  
  for (var i=0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    music[i] = string;
  }
  
  return music;
}

function johnLennonFacts(fax) {
  var omg = '!!!'
  
  for (var i=0; i < fax.length; i++) {
    fax[i] = fax[i] + omg
  }
  
  return fax;
}

function iLoveTheBeatles(n) {
  var lol = [];
  
  do {
    lol.push("I love the Beatles!");
    n++
  }
  while (n < 15);
  
  return lol;
}