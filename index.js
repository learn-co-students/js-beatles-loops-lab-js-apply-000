// add solution here
function theBeatlesPlay (musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts (array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles (number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number<15);
  return array;
}
