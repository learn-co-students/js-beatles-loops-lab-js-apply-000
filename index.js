function theBeatlesPlay(musicians,instruments) {
  var B = []
  for (var i = 0; i < musicians.length; i++) {
    B.push(musicians[i] + ' plays ' + instruments[i])
  }
  return B;
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
  var array = [];
  var i = 0;
  do {
    array.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return array;
}