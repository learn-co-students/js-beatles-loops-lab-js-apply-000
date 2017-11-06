function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }

  return arr;
}

function johnLennonFacts(arr) {
  var newArr = [];

  var i = 0
  while (i < arr.length) {
    var newStr = arr[i] + '!!!';
    newArr.push(newStr);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];

  var i = 0;
  do {
    num++;
    arr.push('I love the Beatles!');
  } while (num < 15);

  return arr;
}
