function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array2 = [];
  var i = 0;
  do {
    array2.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return array2;
}