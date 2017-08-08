function theBeatlesPlay(arraryMusicians,arrayInstruments) {
    var resultsArray = [];
    for ( var i = 0; i <arraryMusicians.length; i ++) {
      resultsArray.push( arraryMusicians[i] + ' plays ' + arrayInstruments[i]);
    };
    return resultsArray;
};

function johnLennonFacts(arrayFacts) {
  var i = 0;
  while (i < arrayFacts.length) {
    arrayFacts[i] = arrayFacts[i] + "!!!";
    i ++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(number){
  var i = 0
  var resultsArray = [];
  if (number > 15) {
    resultsArray.push("I love the Beatles!");
  }
  else
    do {
      resultsArray.push("I love the Beatles!");
      i ++;
    } while (i<=number);
  return resultsArray;
}
