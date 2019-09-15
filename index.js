// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] +' plays ' + instruments[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(factsArray) {
  var factsIndex = 0;
  while (factsIndex < factsArray.length) {
    factsArray[factsIndex] += '!!!';
    factsIndex++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}