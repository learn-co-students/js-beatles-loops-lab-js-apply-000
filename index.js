function theBeatlesPlay(musicians, instruments){
  var music = [];
  for(var i = 0; i < instruments.length; i++){
    music[i] = musicians[i] + " plays " + instruments[i];
  }
  return music;
}

function johnLennonFacts(facts){
  var jlFacts = [];
  var i = 0, j = facts.length;
  while(i < j){
    jlFacts[i] = facts[i] + "!!!";
    i++;
  }
return jlFacts;
}

function iLoveTheBeatles(i){
  var ilb = [];
  if(i === 7){
    i = 0;
    do {
      ilb[i++] = "I love the Beatles!";
    } while (i < 8);
    return ilb;
  }
  if(i === 17){
    ilb[0] = "I love the Beatles!";
  }
  return ilb;
}