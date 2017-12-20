function theBeatlesPlay(musicians, instruments) {
  var returnArr = [];
  for (var i = 0; i < musicians.length; i += 1) {
    returnArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return returnArr;
}


function johnLennonFacts(testArr) {
  var returnArr = [];
  for (var i = 0; i < testArr.length; i += 1) {
    returnArr.push(testArr[i] + '!!!')
  }
  return returnArr;
}


function iLoveTheBeatles(num) {
  var returnArr = ["I Love the Beatles!"];
  if (num >= 15) return returnArr;
  var i = 0;
  do {
    returnArr.push("I Love the Beatles!")
    i += 1;
  } while (i < num)
  return returnArr;
}
