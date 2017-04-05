function theBeatlesPlay(musicians, instruments) {
  var newArr = [];

  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(num) {
  var newFacts = [];

  var n = 0;
  var exp = "!!!";
  while (n < num.length) {
    newFacts.push(num[n] += exp);
    n++;
  }
  return newFacts;
}

function iLoveTheBeatles(d) {
  var arr = [];

  do {
    arr.push('I love the Beatles!');
    d++
  } while(d < 15);

  return arr;
}
