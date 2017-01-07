function theBeatlesPlay(musicians, instruments){
  var whatTheyPlay = [];
  var i;
  for(i = 0; i < musicians.length; i++){
    whatTheyPlay[i] = musicians[i] + " plays " + instruments[i]
  }
  return whatTheyPlay
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var love = []
  var c = 0
  do{
    love[c] = "I love the Beatles!"
    c++
    n++
  }while(n < 15);
  return love
}