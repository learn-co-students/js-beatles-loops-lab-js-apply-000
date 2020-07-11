function theBeatlesPlay(musicians, instruments) {
  let musicianPlays = []
  for(let i=0; i<musicians.length; i++){
    musicianPlays[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return musicianPlays;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i<facts.length){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let fansArray = [];
  let i = 0
  
  if(n>15){
    fansArray = 'I love the Beatles!';
  } else {
    do {
      fansArray[i] = 'I love the Beatles!';
      i++
    } while (i<=n);
  }
  return fansArray;
}