function theBeatlesPlay(musicianArr, instrumentArr) {
  var arr = [];
  for (var i = 0; i < musicianArr.length; i++) {
    arr.push(musicianArr[i] + " plays " + instrumentArr[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '!!!';
  }
  return arr;
}
function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}