function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var string;
    string = musicians[i] + " plays " + instruments[i];
    newArr.push(string);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  var i = 0;
  while (i < facts.length) {
    var newStr = facts[i] + "!!!";
    excitedFacts.push(newStr);
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  
  do {
    var string = "I love the Beatles!";
    beatlesLove.push(string);
    number++;
  } while (number < 15);
  return beatlesLove;
}