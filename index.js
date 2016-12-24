function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }

  return arr;
}

function johnLennonFacts(arr) {
  var newArr = [];

  var i = 0;
  while(i < arr.length) {
    newArr.push(arr[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = 0;

  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= num && num < 15);

  return arr;
}
