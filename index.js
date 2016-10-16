var i;

function theBeatlesPlay(musicians, instruments) {
  var BeatlesArray = [];
  for (i=0; i < musicians.length; i++) {
    BeatlesArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return BeatlesArray;
}

function johnLennonFacts (facts) {
  var myArray = [];
  i = facts.length-1;
  while (i>=0) {
    myArray[i] = facts[i] + "!!!";
    i--;
  }
  return myArray;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
     myArray.push("I love the Beatles!");
     number++;
  }
  while (number<15);
  return myArray;
}
