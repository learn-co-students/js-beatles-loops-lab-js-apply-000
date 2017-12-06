function theBeatlesPlay (musicians, instruments) {
  var messages = [];
  var i;
  for (i= 0; i<musicians.length; i++) {
    messages.push(musicians[i] + " plays " + instruments[i]);
  }
  return messages;
}

function johnLennonFacts (facts) {
  var i;
  for (i= 0; i<facts.length; i++) {
      facts[i] += '!!!';
      }
  return facts;
}

function iLoveTheBeatles(beatlesLoveNum) {
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!');
    beatlesLoveNum++;
  } while (beatlesLoveNum < 15);

  return beatlesLove;
}
