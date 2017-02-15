function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var bandArray = [];

  for (var i = 0; i < musiciansArray.length; i++) {
    bandArray[i] = `${musiciansArray[i]} plays`;
  }

  for (var i = 0; i < instrumentsArray.length; i++) {
    bandArray[i] = `${bandArray[i]} ${instrumentsArray[i]}`;
  }

  return bandArray;
}

function johnLennonFacts(factsArray) {
  var j = 0;
  var johnLennonFactsArray = [];

  while (j < factsArray.length) {
    johnLennonFactsArray[j] = `${factsArray[j]}!!!`;
    j++;
  }

  return johnLennonFactsArray;
}

function iLoveTheBeatles(loveNum) {
  var k = 0;
  var loveArray = [];

  do {
    loveArray[k] = 'I love the Beatles!';
    k++;
    loveNum++;
  } while (loveNum < 15);

  return loveArray;
}