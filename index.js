function theBeatlesPlay(musicians, instruments) {
  var myArray = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + ' plays ' + instruments[i];
    myArray.push(str);
  }

  return myArray;
}


function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;

  while (i < facts.length) {
    var addExclamation = facts[i] + '!!!';
    newFacts.push(addExclamation);
    i++;
  }

  return newFacts;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  var i = 0;

  if (num > 15) {
    myArray.push('I love the Beatles!');
    return myArray;
  }

  do {
    myArray.push('I love the Beatles!');
    i++;
  }
  while (i <= num);

  return myArray;
}
