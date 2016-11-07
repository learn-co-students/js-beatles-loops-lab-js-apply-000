function theBeatlesPlay (ary1, ary2) {
  var emptyArr = [];

  for (var i = 0; i < ary1.length; i++) {
    var ele = ary1[i];
    emptyArr.push(ele + " plays " + ary2[i]);
  }
  return emptyArr;
}

function johnLennonFacts (ary1) {
  var emptyArr = [];
  var i = 0

  while(i < ary1.length) {
    emptyArr.push(ary1[i] + "!!!");
    i++;
  }

  return emptyArr;
}

function iLoveTheBeatles (num) {
  var emptyArr = [];
  var i = num

  do {
    i++;
    emptyArr.push('I love the Beatles!');
  } while(i < 15)

  return emptyArr;
}
