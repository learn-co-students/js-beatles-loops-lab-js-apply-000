var musicians = [];
var instruments = [];
function theBeatlesPlay(musicians, instruments) {
var play = [];
var i;
  for (i = 0; i < musicians.length; i++){
  play[i] = musicians[i] + " plays " + instruments[i];
  }
return play
}

var lennon = [];
function johnLennonFacts(lennon) {
var facts = [];
var i;
  for (i = 0; i < lennon.length; i++){
  facts[i] = lennon[i] + "!!!";
  }
return facts
}

var ok;
function iLoveTheBeatles(ok){
  var beatle = [];
  var i = 0;
  var count = ok - 1;
if (ok < 15){
  do {
    beatle[i] = "I love the Beatles!"
    i++;
  }
  while (i + 1 <= ok + 1);
  return beatle
}
else {
  return "I love the Beatles!"
}
}
