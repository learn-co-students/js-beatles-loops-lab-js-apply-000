function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var musicianToInstruments = [];

  for (var i = 0; i < arrayMusicians.length; i++) {
    var currentMusician = arrayMusicians[i];
    var currentInstrument = arrayInstruments[i];
    var string = currentMusician + " plays " + currentInstrument;
    musicianToInstruments.push(string);
  }

  return musicianToInstruments;
}

function johnLennonFacts(arrayOfFacts) {
  var i = 0;

  var factsWithExclamations = [];
  while (i < arrayOfFacts.length) {
    factsWithExclamations.push(arrayOfFacts[i].concat('!!!'));
    i += 1;
  }
  return factsWithExclamations
}

function iLoveTheBeatles(num) {
  var emptyArr = [];
  do {
    emptyArr.push('I love the Beatles!');
    num++;
  }
  while(num < 15);
  return emptyArr;
}
