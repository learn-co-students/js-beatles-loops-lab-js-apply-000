function theBeatlesPlay(music, instrum) {
  var result = [];
  for (var i = 0; i < music.length; i++) {
    result.push(music[i] + " plays " + instrum[i]);
  }
  return result;
}

function johnLennonFacts(array) {
  var newAry = [];
  var i = 0;
  while (i < array.length) {
    newAry.push(array[i] + "!!!");
    i++;
  }
  return newAry;
}

function iLoveTheBeatles(num) {
  var beatlesAry = [];
  var i = num;
  do {
    i++;
    beatlesAry.push('I love the Beatles!');
  } while (i < 15);
  return beatlesAry;
}
