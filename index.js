function theBeatlesPlay(musicians, instruments) {
  var theBeatlesAndTheirInstruments = [];
  for (var i = 0; i < musicians.length; i++){
      theBeatlesAndTheirInstruments.push(
        `${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesAndTheirInstruments;
}

function johnLennonFacts(factsList) {
  var i = 0;
  while (i < factsList.length) {
      factsList[i] = factsList[i].concat("!!!");
      i++;
  }
  return factsList;
}

function iLoveTheBeatles(num) {
  var twistAndShoutIt = "I love the Beatles!";
  var onRepeat = [];
  if (num < 15) {
    for (var i = 0; i <= num; i++) {
      onRepeat.push(twistAndShoutIt);
    }
  }
  else onRepeat.push(twistAndShoutIt);
  return onRepeat;
}
