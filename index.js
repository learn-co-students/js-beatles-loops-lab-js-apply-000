function theBeatlesPlay(musicianArr, instrumentArr) {
  var result = [];

  for (var i = 0; i < musicianArr.length; i++) {

    for (var j = 0; j < instrumentArr.length; j++) {
      var str = "";

      if(i === j) {
        str = musicianArr[i] + " plays " + instrumentArr[j]
        result.push(str);
      }
    }
  }

  return result;
}

function johnLennonFacts(factsArr) {
  var result = [];
  var i = 0;

  while (i < factsArr.length) {
    var str = factsArr[i];

    result.push(str + "!!!");
    i++;
  }

  return result;
}

function iLoveTheBeatles(num) {
  var result = [];

  do {
    result.push('I love the Beatles!')
    num += 1
  }
  while (num < 15);

  return result;
}
