function theBeatlesPlay(musician, instrument) {
  var x = [];
  for(var i=0; i<musician.length; i++) {
  x.push(musician[i] + ' plays ' + instrument[i])
  }
  return x;
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
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } 
  while (i <= number && number < 15);
  return arr;
}