// add solution here
function theBeatlesPlay(musicians, instruments){
  var musiciansPlays = [];
  for(let i = 0; i < musicians.length; i++){
    musiciansPlays[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return musiciansPlays;
}

function johnLennonFacts(fact){
  var jLFacts = [];
  var i = 0;
  while(i < fact.length){
    jLFacts[i] = `${fact[i++]}!!!`
  }
  return jLFacts;
}

function iLoveTheBeatles(aNumber){
  var iHeartBeatles = [];
  var i = 0;
  do {
    iHeartBeatles[i] = "I love the Beatles!"
  } while (++i <= aNumber && aNumber < 15)
  return iHeartBeatles;
}