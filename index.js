function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    var element = musicians[i] + " plays " + instruments[i];
    result.push(element);
  }
  return result;
}


function johnLennonFacts(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    var element = array[i] + "!!!";
    result.push(element);
    i += 1;
  }
  return result;
}


function iLoveTheBeatles(number) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    number += 1;
  }
  while (number < 15)
  return result;
}
