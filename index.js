function theBeatlesPlay(mArr, iArr) {
  var strArr = [];
  for(var i = 0; i < mArr.length; i++){
    strArr.push(mArr[i] + " plays " + iArr[i]);
  }
  return strArr;
}

function johnLennonFacts(fArr) {
  var i = 0;
  while(i < fArr.length) {
    fArr[i] += "!!!";
    i++;
  }
  return fArr;
}

function iLoveTheBeatles(n) {
  var answerArr = [];
  do {
    answerArr.push("I love the Beatles!");
    n++;
  } while(n < 15)
  return answerArr;
}
