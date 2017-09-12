function theBeatlesPlay(musicians, instruments) {
  var temparray = [];
  if(musicians.length == instruments.length) {
    for(var i = 0; i < musicians.length; i++) {
      temparray.push(musicians[i] + ' plays ' + instruments[i]);
    }
  }
  return temparray;
}

function johnLennonFacts(array) {
  array.forEach((item, i, ar) => ar[i]+='!!!');
  return array;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return arr;
}
