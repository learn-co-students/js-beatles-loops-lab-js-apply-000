function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var theString = "";

  for(var i = 0; i < musicians.length; i++) {
    theString = musicians[i] + " plays " + instruments[i];
    array.push(theString);
  }

  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var counter = 0;
  var newStr = "";

  while (counter < facts.length) {
    newStr = facts[counter] + "!!!";
    array.push(newStr);
    counter++;
  }

  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var paraChecker = number;

  do {
    array.push("I love the Beatles!");
    paraChecker++;
  } while(paraChecker < 15);

  return array;
}
