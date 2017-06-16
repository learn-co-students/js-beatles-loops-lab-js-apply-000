function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat= [];
  for (var i = 0; i < musicians.length; i++){
    var who = musicians[i];
    var what = instruments[i];
    whoPlaysWhat.push(who + " plays " + what);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts){
  var info = [];
  var i = 0;
  while (i < facts.length){
    var fact = facts[i];
    info.push(fact + "!!!");
    i++
  }
  return info;
}
function iLoveTheBeatles(num){
  var fanClub = [];
  do {
    fanClub.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return fanClub;
}
