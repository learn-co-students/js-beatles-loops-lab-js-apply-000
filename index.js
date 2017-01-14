function theBeatlesPlay(muscians, instruments) {
  var array = [];

  for (var i = 0; i < muscians.length; i++) {
    var muscian = muscians[i];
    var instrument = instruments[i];
    var play = muscian + " plays " + instrument;
      array.push(play);
    }

  return array;
}

function johnLennonFacts(facts) {
  var ary = [];
  var i = 0;

  while(i < facts.length) {
    var fact = facts[i] + "!!!";
      ary.push(fact);
      i++;
  }

  return ary;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var sentence = "I love the Beatles!";

  if (number > 15) {
    newArray.push(sentence);
  }

  var i = number;

  while(i < 15) {
      newArray.push(sentence);
      i++;
  }

  return newArray;
}
