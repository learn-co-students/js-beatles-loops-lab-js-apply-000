// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + ' plays ' + instruments[i];
    arr.push(string);
  } 
  return arr;
}

function johnLennonFacts(factsArr) {
  var n = 0;
  while (n < factsArr.length) {
    factsArr[n] = (factsArr[n] + '!!!');
    n++;
  }
  return factsArr;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}

