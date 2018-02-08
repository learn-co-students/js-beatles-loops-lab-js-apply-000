function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  var str;
  var index;
  for (index=0; index < musicians.length; index++) {
    str = musicians[index] + ' plays ' + instruments[index];
    arr[index] = str;
  }
  return arr;
}

function johnLennonFacts (facts) {
  var arr = [];
  var str;
  var index = 0;
  while (index < facts.length) {
    str = facts[index] + '!!!';
    arr[index] = str
    index++;
  }
  return arr;
}

function iLoveTheBeatles (num) {
  var arr = [];
  var index = 0;
  do {arr[index] = 'I love the Beatles!'; index++; }
  while (index <=num && num<15);
  return arr;
}