// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var rosterItem = musicians[i] + " plays " + instruments[i];
    arr.push(rosterItem);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while(facts[i]) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while(num < 15);
  return arr;
}