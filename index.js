function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return result;
}


function johnLennonFacts(array) {
  var result = [];
    var i = 0;

  while (i < array.length) {
    result.push(array[i] + '!!!')
    i++;
  }

  return result;
}


function iLoveTheBeatles(num) {
  var arr = [];
  var i = num;

  do {
    arr.push('I love the Beatles!');
    i++;
  }

  while (i < 15);

  return arr;

  }
