function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var result = [];

  for (var i = 0; i < arrayOfMusicians.length; i++) {
    result.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
  }

  return result;
}

function johnLennonFacts(array) {
  var result = [];

  var i = 0;

  while (i < array.length) {
    result.push(array[i] + "!!!");
    i++;
  }

  return result;
}

function iLoveTheBeatles(num) {
  var result = [];

  while (num < 15) {
    result.push("I love the Beatles!");
    num++;
  }

  if (result.length === 0) {
    result.push("I love the Beatles!");
  }

  return result;
}
