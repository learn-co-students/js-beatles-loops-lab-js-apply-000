// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var mySentence = musicians[i] + ' plays ' + instruments[i];
    myArray.push(mySentence);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var myArray = [];
  while (i < facts.length) {
    myArray.push(facts[i] + "!!!");
    i++;
  }
  return myArray;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  if (num < 15) {
    var i = (15 - num);
    do {
      myArray.push("I love the Beatles!");
      i++;
    }
    while (i <= 15);
    return myArray;
  }
  return ['I love the Beatles!'];
}