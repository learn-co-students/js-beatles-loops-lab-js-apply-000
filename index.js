function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    var musician = musiciansArray[i];
    var instrument = instrumentsArray[i];
    var sent = musician + " plays " + instrument;
    newArray.push(sent);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    var fact = array[i];
    var sent = fact + "!!!";
    newArray.push(sent);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var array = [];
  var sent = "I love the Beatles!";
  do {
    array.push(sent);
    num++;
  } while (num < 15);
  return array;
}
