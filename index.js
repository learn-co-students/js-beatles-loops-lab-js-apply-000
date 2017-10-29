function theBeatlesPlay(musicians,instruments) {
  var arrayBeatles = [];
  for (let i=0; i < musicians.length; i++) {
  arrayBeatles.push(musicians[i] + " plays " + instruments[i])
  }
  return arrayBeatles;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while(i<facts.length) {
    newFacts.push(facts[i]+"!!!")
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(x) {
  var iLoveArray = [];
  do {
    iLoveArray.push("I love the Beatles!")
    x++;
  } while (x<15);
  return iLoveArray
}
