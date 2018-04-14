function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  var i, j;
  for (i = 0; i < musicians.length; i++) {
    var result = musicians[i] + ' plays ' + instruments[i];
    resultArray[i] = result;
  }
  
  return resultArray;
}

function johnLennonFacts(facts) {
  var resultArray = [];
  var i;
  for (i = 0; i < facts.length; i++) {
    var result = facts[i] + '!!!';
    resultArray[i] = result;
  }
  
  return resultArray;
}

function iLoveTheBeatles(number) {
  var resultArray = [];
  do {
    resultArray.push('I love the Beatles!');
    number++;
  } 
  while (number < 15);
  
  return resultArray;
}