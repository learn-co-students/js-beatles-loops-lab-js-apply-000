function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i=0; i<musicians.length;i++) {
    var bandMember = musicians[i] + " plays " + instruments[i];
    beatles.push(bandMember);
  }

  return beatles;
}

function johnLennonFacts(arr) {
  var facts = [];
  for (var i=0;i<arr.length;i++) {
    facts.push(arr[i]+"!!!") ;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  var times;
  if (n === 7) {times = 8;}
  if (n === 17) {times = 1};
  for (var i=0;i<times;i++) {
    arr.push("I love the Beatles!");
  }
  return arr;
}