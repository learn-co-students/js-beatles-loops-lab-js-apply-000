function theBeatlesPlay(musicians, instruments){
  var musicianWithInstrument = [];
  var i;
  for (i=0; i<musicians.length; i++) {
    musicianWithInstrument[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return musicianWithInstrument
}

function johnLennonFacts(facts){
  var funFacts = [];
  var i=0;
  while (i<facts.length) {
    funFacts[i] = facts[i] + "!!!";
    i++;
  }
  return funFacts
}

function iLoveTheBeatles(number) {
  var times= 0;
  var body=[];
  if(number > 15){
    number = 0;
  }
  do {
    body[times] = "I love the Beatles!"
    times++;
  } while(times <= number);
  return body;
}
