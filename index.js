function theBeatlesPlay(musicians, instruments) {
  var arrangement = [];
  for(var i = 0; i < musicians.length; i++){
    arrangement.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arrangement;
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return loveArray;
}
