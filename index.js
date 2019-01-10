function theBeatlesPlay(musicianArr, instrumentArr) {
  var resultArr = [];
  for (var i = 0; i < musicianArr.length; i++) {
    var str = `${musicianArr[i]} plays ${instrumentArr[i]}`;
    resultArr.push(str);
  }
  console.log(resultArr);
  return resultArr;
}

function johnLennonFacts(factArray) {
  var i = 0;
  while (i < factArray.length) {
    factArray[i] += '!!!';
    i++;
  }
  return factArray;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  var loveMsg = 'I love the Beatles!';
  do {
    loveArray.push(loveMsg);
    num++;
  } while (num < 15);
  return loveArray;
}
