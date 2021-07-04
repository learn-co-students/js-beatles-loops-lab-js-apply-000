function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array
}

var i = 0;

function iLoveTheBeatles(numb) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    i++;
  } while (i <= numb && numb < 15);
  return array
}