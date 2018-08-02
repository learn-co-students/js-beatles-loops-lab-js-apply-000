// add solution here
function theBeatlesPlay(musicians, instruments) {
  var maps = [];
  var i = 0;
  for (; i < musicians.length; i++) {
    maps[i] = musicians[i] + " plays " + instruments[i];
  }
  return maps;
}

function johnLennonFacts(facts) {
  let k = 0;
  var l = [];
  while (k < facts.length) {
    l[k] = facts[k] + "!!!";
    k++
  }
  return l;
}

function iLoveTheBeatles(k) {
    let i = 0;
    var arr = [];
    do {
      arr[i] = "I love the Beatles!";
      i++;
    } while(i <= k && k < 15);
    return arr;
}
